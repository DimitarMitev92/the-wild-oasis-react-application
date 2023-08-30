import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ipqeagqfasntimkulbpr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwcWVhZ3FmYXNudGlta3VsYnByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyOTg0NzYsImV4cCI6MjAwODg3NDQ3Nn0.eAvQexigNxjSxZOE-v4qwteLNOoF0fjgNo8mpBFJiI8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
