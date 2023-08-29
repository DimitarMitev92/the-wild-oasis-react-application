import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ipqeagqfasntimkulbpr.supabase.co'; // eslint-disable-next-line no-unused-vars
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwcWVhZ3FmYXNudGlta3VsYnByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyOTg0NzYsImV4cCI6MjAwODg3NDQ3Nn0.eAvQexigNxjSxZOE-v4qwteLNOoF0fjgNo8mpBFJiI8'; // eslint-disable-next-line no-unused-vars
const supabase = createClient(supabaseUrl, supabaseKey); // eslint-disable-next-line no-unused-vars

export default supabase;