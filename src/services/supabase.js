import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project details
const SUPABASE_URL = 'https://ieelidfhgmdcycuchwwf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllZWxpZGZoZ21kY3ljdWNod3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NzM3NDcsImV4cCI6MjA2MTE0OTc0N30.nnhR4X1Sxr8WgxT5QXlMavVSR4Itj_EWAsAgqBUa4kE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);