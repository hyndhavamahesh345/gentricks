import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database file path
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'submissions.json');

// Ensure data directory & file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(DATA_FILE)) {
  const initialData = {
    registrations: [],
    builderProjects: [],
    partnerInquiries: []
  };
  fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
}

// Data Store Helpers
function getStore() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    return { registrations: [], builderProjects: [], partnerInquiries: [] };
  }
}

function saveStore(store) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(store, null, 2), 'utf-8');
}

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

// 1. POST /api/register - Waitlist & Member Registration
app.post('/api/register', (req, res) => {
  const { fullName, email, domain } = req.body;

  if (!fullName || !email || !domain) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: fullName, email, and domain are required.'
    });
  }

  const store = getStore();
  const newRegistration = {
    id: `REG-${Date.now()}`,
    fullName: fullName.trim(),
    email: email.trim().toLowerCase(),
    domain: domain.trim(),
    createdAt: new Date().toISOString()
  };

  store.registrations.unshift(newRegistration);
  saveStore(store);

  console.log(`[API /api/register] New submission received from ${email}`);

  return res.status(201).json({
    success: true,
    message: 'Registration successful! You are added to the Gentricks founding member waitlist.',
    data: newRegistration
  });
});

// 2. POST /api/builder - Project Incubation Submission
app.post('/api/builder', (req, res) => {
  const { projectName, stage, founderEmail, summary } = req.body;

  if (!projectName || !stage || !founderEmail || !summary) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: projectName, stage, founderEmail, and summary are required.'
    });
  }

  const store = getStore();
  const newProject = {
    id: `BLD-${Date.now()}`,
    projectName: projectName.trim(),
    stage: stage.trim(),
    founderEmail: founderEmail.trim().toLowerCase(),
    summary: summary.trim(),
    createdAt: new Date().toISOString()
  };

  store.builderProjects.unshift(newProject);
  saveStore(store);

  console.log(`[API /api/builder] New project "${projectName}" submitted by ${founderEmail}`);

  return res.status(201).json({
    success: true,
    message: 'Project submission received! Our incubation team will review your application.',
    data: newProject
  });
});

// 3. POST /api/partner - Partnership Inquiry
app.post('/api/partner', (req, res) => {
  const { orgName, contactPerson, workEmail, scope } = req.body;

  if (!orgName || !contactPerson || !workEmail || !scope) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: orgName, contactPerson, workEmail, and scope are required.'
    });
  }

  const store = getStore();
  const newInquiry = {
    id: `PRT-${Date.now()}`,
    orgName: orgName.trim(),
    contactPerson: contactPerson.trim(),
    workEmail: workEmail.trim().toLowerCase(),
    scope: scope.trim(),
    createdAt: new Date().toISOString()
  };

  store.partnerInquiries.unshift(newInquiry);
  saveStore(store);

  console.log(`[API /api/partner] New partnership inquiry from ${orgName} (${workEmail})`);

  return res.status(201).json({
    success: true,
    message: 'Partnership inquiry recorded! Our institutional relations lead will reach out promptly.',
    data: newInquiry
  });
});

// 4. GET /api/submissions - Retrieve Data Endpoint (Admin / Inspection)
app.get('/api/submissions', (req, res) => {
  const { type } = req.query;
  const store = getStore();

  if (type === 'register') {
    return res.json({ success: true, count: store.registrations.length, data: store.registrations });
  } else if (type === 'builder') {
    return res.json({ success: true, count: store.builderProjects.length, data: store.builderProjects });
  } else if (type === 'partner') {
    return res.json({ success: true, count: store.partnerInquiries.length, data: store.partnerInquiries });
  }

  return res.json({
    success: true,
    totals: {
      registrations: store.registrations.length,
      builderProjects: store.builderProjects.length,
      partnerInquiries: store.partnerInquiries.length
    },
    data: store
  });
});

// Start Express server
app.listen(PORT, () => {
  console.log(`🚀 Gentricks Backend API Server active on http://localhost:${PORT}`);
});
