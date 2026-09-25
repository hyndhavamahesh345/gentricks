import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  serverTimestamp,
  getDocs,
  query,
  orderBy,
  limit
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase only if projectId is provided
const isConfigured = Boolean(firebaseConfig.projectId && firebaseConfig.apiKey);

export const app = isConfigured
  ? (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp())
  : null;

export const db = app ? getFirestore(app) : null;

export type CommunityMember = {
  full_name: string;
  email: string;
  phone?: string;
  city: string;
  state: string;
  role: string;
  interests: string;
  consent: boolean;
};

export type IdeaSubmission = {
  title: string;
  category: string;
  problem_statement: string;
  proposed_solution: string;
  target_audience: string;
  team_members?: string;
  contact_email: string;
};

/**
 * Submit a community member registration
 * Sends to Firebase Firestore 'community_members' collection with localStorage fallback
 */
export async function submitCommunityMember(member: CommunityMember): Promise<void> {
  if (db) {
    try {
      await addDoc(collection(db, 'community_members'), {
        ...member,
        createdAt: serverTimestamp(),
      });
      return;
    } catch (err) {
      console.warn('Firebase Firestore submission error, saving locally:', err);
    }
  }

  // Graceful fallback for offline, preview, or development without credentials
  try {
    const existing = JSON.parse(localStorage.getItem('gentricks_submissions') || '[]');
    existing.push({ ...member, submitted_at: new Date().toISOString() });
    localStorage.setItem('gentricks_submissions', JSON.stringify(existing));
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }

  // Realistic feedback delay
  await new Promise((resolve) => setTimeout(resolve, 350));
}

/**
 * Submit an idea to the LaunchPad
 */
export async function submitIdea(idea: IdeaSubmission): Promise<void> {
  if (db) {
    try {
      await addDoc(collection(db, 'idea_submissions'), {
        ...idea,
        review_status: 'Pending',
        createdAt: serverTimestamp(),
      });
      return;
    } catch (err) {
      console.warn('Firestore idea submission error, saving locally:', err);
    }
  }

  try {
    const existing = JSON.parse(localStorage.getItem('gentricks_ideas') || '[]');
    existing.push({ ...idea, submitted_at: new Date().toISOString() });
    localStorage.setItem('gentricks_ideas', JSON.stringify(existing));
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }

  await new Promise((resolve) => setTimeout(resolve, 350));
}

/**
 * Subscribe email to newsletter
 */
export async function subscribeNewsletter(email: string): Promise<void> {
  if (db) {
    try {
      await addDoc(collection(db, 'newsletter_subscribers'), {
        email,
        subscribedAt: serverTimestamp(),
      });
      return;
    } catch (err) {
      console.warn('Firestore newsletter subscription error, saving locally:', err);
    }
  }

  try {
    const existing = JSON.parse(localStorage.getItem('gentricks_subscribers') || '[]');
    existing.push({ email, subscribed_at: new Date().toISOString() });
    localStorage.setItem('gentricks_subscribers', JSON.stringify(existing));
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }

  await new Promise((resolve) => setTimeout(resolve, 350));
}
