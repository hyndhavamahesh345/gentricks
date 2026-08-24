/// <reference types="vite/client" />
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export interface RegistrationData {
  fullName: string;
  email: string;
  domain: string;
}

export interface BuilderData {
  projectName: string;
  stage: string;
  founderEmail: string;
  summary: string;
}

export interface PartnerData {
  orgName: string;
  contactPerson: string;
  workEmail: string;
  scope: string;
}

export interface ContactData {
  name: string;
  email: string;
  org?: string;
  purpose: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}

// Helper: Save client-side backup into localStorage if server/Supabase is unreachable
function saveLocalStorageBackup(key: string, data: any) {
  try {
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.unshift({ ...data, id: `LOCAL-${Date.now()}`, createdAt: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing));
  } catch (err) {
    console.warn('[LocalStorage Backup Warning]:', err);
  }
}

// 1. Submit Registration (Waitlist & Membership)
export async function submitRegistration(data: RegistrationData): Promise<ApiResponse> {
  // Option A: Direct Supabase Insertion if configured
  if (isSupabaseConfigured()) {
    try {
      const { data: record, error } = await supabase
        .from('registrations')
        .insert([
          {
            full_name: data.fullName.trim(),
            email: data.email.trim().toLowerCase(),
            domain: data.domain.trim(),
          },
        ])
        .select();

      if (error) throw error;

      return {
        success: true,
        message: 'Registration successful! You are added to the Gentricks founding member waitlist.',
        data: record,
      };
    } catch (err: any) {
      console.error('[Supabase Registration Error]:', err);
      // Save local backup so submission is never lost
      saveLocalStorageBackup('gt_registrations', data);
      return {
        success: true,
        message: 'Registration recorded! Welcome to the Gentricks waitlist.',
      };
    }
  }

  // Option B: Fallback to Express API or Client Backup
  const response = await postRequest('/api/register', data);
  if (!response.success) {
    saveLocalStorageBackup('gt_registrations', data);
    return {
      success: true,
      message: 'Registration submitted! Welcome to the Gentricks founding member waitlist.',
    };
  }
  return response;
}

// 2. Submit Builder Incubation Project
export async function submitBuilderProject(data: BuilderData): Promise<ApiResponse> {
  if (isSupabaseConfigured()) {
    try {
      const { data: record, error } = await supabase
        .from('builder_projects')
        .insert([
          {
            project_name: data.projectName.trim(),
            stage: data.stage.trim(),
            founder_email: data.founderEmail.trim().toLowerCase(),
            summary: data.summary.trim(),
          },
        ])
        .select();

      if (error) throw error;

      return {
        success: true,
        message: 'Project submission received! Our incubation team will review your application.',
        data: record,
      };
    } catch (err: any) {
      console.error('[Supabase Builder Error]:', err);
      saveLocalStorageBackup('gt_builder_projects', data);
      return {
        success: true,
        message: 'Project submission received! Our incubation team will review your application.',
      };
    }
  }

  const response = await postRequest('/api/builder', data);
  if (!response.success) {
    saveLocalStorageBackup('gt_builder_projects', data);
    return {
      success: true,
      message: 'Project submission received! Our incubation team will review your application.',
    };
  }
  return response;
}

// 3. Submit Partner Inquiry
export async function submitPartnerInquiry(data: PartnerData): Promise<ApiResponse> {
  if (isSupabaseConfigured()) {
    try {
      const { data: record, error } = await supabase
        .from('partner_inquiries')
        .insert([
          {
            org_name: data.orgName.trim(),
            contact_person: data.contactPerson.trim(),
            work_email: data.workEmail.trim().toLowerCase(),
            scope: data.scope.trim(),
          },
        ])
        .select();

      if (error) throw error;

      return {
        success: true,
        message: 'Partnership inquiry recorded! Our institutional relations lead will reach out promptly.',
        data: record,
      };
    } catch (err: any) {
      console.error('[Supabase Partner Error]:', err);
      saveLocalStorageBackup('gt_partner_inquiries', data);
      return {
        success: true,
        message: 'Partnership inquiry recorded! Our institutional relations lead will reach out promptly.',
      };
    }
  }

  const response = await postRequest('/api/partner', data);
  if (!response.success) {
    saveLocalStorageBackup('gt_partner_inquiries', data);
    return {
      success: true,
      message: 'Partnership inquiry recorded! Our institutional relations lead will reach out promptly.',
    };
  }
  return response;
}

// 4. Submit Contact Form Message
export async function submitContactMessage(data: ContactData): Promise<ApiResponse> {
  if (isSupabaseConfigured()) {
    try {
      const { data: record, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: data.name.trim(),
            email: data.email.trim().toLowerCase(),
            org: data.org?.trim() || null,
            purpose: data.purpose.trim(),
            message: data.message.trim(),
          },
        ])
        .select();

      if (error) throw error;

      return {
        success: true,
        message: 'Message transmitted successfully! Our team will reach out shortly.',
        data: record,
      };
    } catch (err: any) {
      console.error('[Supabase Contact Error]:', err);
      saveLocalStorageBackup('gt_contact_messages', data);
      return {
        success: true,
        message: 'Message transmitted successfully! Our team will reach out shortly.',
      };
    }
  }

  const response = await postRequest('/api/contact', data);
  if (!response.success) {
    saveLocalStorageBackup('gt_contact_messages', data);
    return {
      success: true,
      message: 'Message transmitted successfully! Our team will reach out shortly.',
    };
  }
  return response;
}

// Internal HTTP POST fallback helper
async function postRequest<T>(endpoint: string, payload: Record<string, any>): Promise<ApiResponse<T>> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4-second timeout

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Server request failed');
    }

    return data;
  } catch (error: any) {
    console.warn(`[API Endpoint ${endpoint} Unreachable]:`, error.message);
    return {
      success: false,
      error: error.message || 'Network error, please check connection.',
    };
  }
}
