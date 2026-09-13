import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export type CommunityMember = {
  full_name: string;
  email: string;
  city: string;
  state: string;
  role: string;
  interests: string;
  consent: boolean;
};

export async function submitCommunityMember(member: CommunityMember) {
  if (supabase) {
    try {
      const { error } = await supabase.from('community_members').insert(member);
      if (!error) return;
      console.warn('Supabase submission warning, saving locally:', error.message);
    } catch (err) {
      console.warn('Supabase network error, saving locally:', err);
    }
  }

  // Graceful fallback for offline, preview, and client testing
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
