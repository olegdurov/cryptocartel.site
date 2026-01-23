import { createClient } from '@supabase/supabase-js';

// Используем заглушки для демо-режима, если переменные окружения не установлены
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';

// Логируем предупреждение если используются заглушки
if (!import.meta.env.VITE_SUPABASE_URL) {
  console.warn('⚠️ Supabase URL не настроен. Используется демо-режим. Для продакшена установите VITE_SUPABASE_URL и VITE_SUPABASE_ANON_KEY в .env файле.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);