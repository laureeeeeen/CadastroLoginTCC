import React, { useState } from 'react';
import './Login.css';
import { useAuth } from '@/contexts/AuthContext'; // ajuste o caminho se for diferente
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate(); // para redirecionar após login
  const [erro, setErro] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(email, senha);
      navigate('/'); // redireciona para página principal após login
    } catch (err: any) {
      console.error(err);
      setErro('Falha ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div className='container-principal'>
      <div className="login-page">
        <h1 className="login-title">Login</h1>

        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <label htmlFor="usuario">Email:</label>
            <input
              type="email"
              id="usuario"
              name="usuario"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>

            {erro && <p style={{ color: 'red' }}>{erro}</p>}

            <a className="cadastro-link" href="/register">
              Ainda não tem uma conta? Cadastre-se
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
