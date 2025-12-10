import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Estas constantes ahora leen las claves que configuraste en Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Si alguna variable de entorno no se encuentra, usamos las que pegaste originalmente como respaldo
// Esto te garantiza que, si algo sale mal con Vercel, el sitio aún funcione
const finalSupabaseUrl =
    supabaseUrl || 'https://alkzivgbqbdhvyvswfnr.supabase.co';
const finalSupabaseKey =
    supabaseKey ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsa3ppdmdicWJkaHZ5dnN3Zm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NjEyMzAsImV4cCI6MjA3NTAzNzIzMH0.fKYu6vmXEFZA-K-H3h2JTjTK3ZDPqrny1psihtl5I1M';

export const supabase = createClient(finalSupabaseUrl, finalSupabaseKey);
