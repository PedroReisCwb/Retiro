-- =========================================================
-- BANCO DE DADOS GRATUITO SUPABASE - RETIRO DE CASAIS PWA
-- =========================================================
-- Como usar:
-- 1. Crie uma conta gratuita em https://supabase.com
-- 2. Crie um novo projeto (ex: "retiro-casais")
-- 3. Acesse "SQL Editor" no menu lateral esquerdo
-- 4. Cole o script abaixo e clique em "RUN"
-- 5. Vá em Project Settings > API e copie a Project URL e a anon/public API Key
-- 6. Cole no aplicativo na opção Nuvem & Sincronização
-- =========================================================

-- Criação da tabela principal de estado do retiro
CREATE TABLE IF NOT EXISTS public.retreat_state (
    id TEXT PRIMARY KEY,
    payload JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.retreat_state ENABLE ROW LEVEL SECURITY;

-- Política de leitura pública (permite que qualquer um com a chave anônima leia)
CREATE POLICY "Permitir leitura pública" ON public.retreat_state
    FOR SELECT USING (true);

-- Política de inserção e atualização pública (permite salvar alterações)
CREATE POLICY "Permitir inserção e atualização pública" ON public.retreat_state
    FOR ALL USING (true) WITH CHECK (true);

-- Notificação em tempo real (Realtime)
ALTER PUBLICATION supabase_realtime ADD TABLE public.retreat_state;
