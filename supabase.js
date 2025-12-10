import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://alkzivgbqbdhvyvswfnr.supabase.co'; // <--- TU URL PEGADA
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsa3ppdmdicWJkaHZ5dnN3Zm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NjEyMzAsImV4cCI6MjA3NTAzNzIzMH0.fKYu6vmXEFZA-K-H3h2JTjTK3ZDPqrny1psihtl5I1M'; // <--- TU CLAVE PEGADA

export const supabase = createClient(supabaseUrl, supabaseKey);
