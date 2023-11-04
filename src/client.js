import { createClient } from '@supabase/supabase-js'

const URL = 'https://oelhqubvequoxgurnzbw.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lbGhxdWJ2ZXF1b3hndXJuemJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNTg3MjMsImV4cCI6MjAxNDYzNDcyM30.Pg-F-Li1jnvA6RlCnLCe5Fs8k_jOP9z9QpXQhnOGWeo';


export const supabase = createClient(URL, API_KEY);
