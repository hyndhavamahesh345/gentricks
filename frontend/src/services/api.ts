/// <reference types="vite/client" />

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

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}

async function postRequest<T>(endpoint: string, payload: Record<string, any>): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Server request failed');
    }

    return data;
  } catch (error: any) {
    console.error(`[API Error ${endpoint}]:`, error);
    return {
      success: false,
      error: error.message || 'Network error, please check connection.',
    };
  }
}

export async function submitRegistration(data: RegistrationData): Promise<ApiResponse> {
  return postRequest('/api/register', data);
}

export async function submitBuilderProject(data: BuilderData): Promise<ApiResponse> {
  return postRequest('/api/builder', data);
}

export async function submitPartnerInquiry(data: PartnerData): Promise<ApiResponse> {
  return postRequest('/api/partner', data);
}
