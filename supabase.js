// La forma correcta de importar Supabase usando un Módulo ES para CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'; // CORREGIDO: Se ajustó la ruta del módulo

// Claves de conexión (Mantienes tus claves, solo se ajustó la importación)
const supabaseUrl = 'https://alkzivgbqbdhvyvswfnr.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsa3ppdmdicWJkaHZ5dnN3Zm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NjEyMzAsImV4cCI6MjA3NTAzNzIzMH0.fKYu6vmXEFZA-K-H3h2JTjTK3ZDPqrny1psihtl5I1M';

export const supabase = createClient(supabaseUrl, supabaseKey);
