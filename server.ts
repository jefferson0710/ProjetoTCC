import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

// Configurações do Supabase
const supabaseUrl: string = 'https://cyyftngwapviavqonglg.supabase.co'; // Substitua com sua URL do Supabase
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5eWZ0bmd3YXB2aWF2cW9uZ2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MDY0OTIsImV4cCI6MjAzNjA4MjQ5Mn0.vJRgTkqkT6APcaoF7o_3Z0Um2djLz47cc2nIUDUqrVM'; // Substitua com sua chave pública do Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Inicializando o app Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota para salvar dados de anamnese
app.post('/api/Usuários', async (req: Request, res: Response) => {
  const {
    nomeCompleto, idade, dataNascimento, telefone,
    email, crefito, cidade, estadoCivil, cpf
  } = req.body;

  try {
    const { data, error } = await supabase
      .from('usuários')  // Substitua pelo nome da sua tabela no Supabase
      .insert([{
        nomeCompleto,
        idade,
        dataNascimento,
        telefone,
        email,
        crefito,
        cidade,
        estadoCivil,
        cpf
      }]);

    if (error) throw error;

    res.status(201).json({ message: 'Dados de anamnese salvos com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar os dados.' });
  }
});

