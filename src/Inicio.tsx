import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio.css';

const HomeLogin: React.FC = () => {
  const navigate = useNavigate();

  return (
    
    <div className="inicio-container">
      <div className="logo-title">
      </div>

      <div className="inicio-align">
      <h2 className="inicio-title">Cadastro</h2>
      </div>

      <div className="inicio-container">
        <div className="inicio">
          <h2>Pessoa</h2>
          <div className="inicio-text">
            <p>Pessoas interessadas em conhecer mais sobre o mundo cristão,
               participar de grupos de apoio e acolhimento ou encontrar igrejas próximas.
               Não têm a intenção de publicar conteúdo ou cadastrar células ou igrejas.</p>
          </div>
          <button onClick={() => navigate('/CadastroPessoa')}>Cadastre-se</button>
           <a className="inicio-link" href="/login">Já tem cadastro? Faça seu login</a>
        </div>
        

        <div className="inicio">
          <h2>Líder</h2>
          <div className="inicio-text">
            <p>Líderes cristãos, responsáveis por células, igrejas ou grupos de discipulado,
               que desejam compartilhar conteúdos, cadastrar suas comunidades e ajudar outros
               a se conectar com a fé.</p>
          </div>
          <button onClick={() => navigate('/CadastroLider')}>Cadastre-se</button>
           <a className="inicio-link" href="/login">Já tem cadastro? Faça seu login</a>
        </div>
      </div>
    </div>
  );
};

export default HomeLogin;
