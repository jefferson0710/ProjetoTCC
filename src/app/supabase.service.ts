import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://<sua-supabase-url>.supabase.co';
const supabaseKey = '<sua-chave-anonima>';

export const supabase = createClient(supabaseUrl, supabaseKey);
