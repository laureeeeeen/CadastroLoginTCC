import React from 'react';
import './CadastroPessoa.css'; 

const CadastroPessoa: React.FC = () => {
  return (

    <div className='bla'>
    <div className="cadastroP-box">
      <h1 className="cadastroP-title">Participante</h1>

      <form>
        <label htmlFor="nome">Nome Completo:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome completo"
        />

        <label htmlFor="idade">Idade:</label>
        <input
          type="number"
          min={1}
          max={120}
          id="idade"
          name="idade"
          placeholder="Digite sua idade"
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
        />

        <label htmlFor="usuario">Usuário:</label>
        <input
          type="text"
          id="usuario"
          name="usuario"
          placeholder="Escolha um nome de usuário"
        />

        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          placeholder="Digite uma senha segura"
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
    </div>
  );
};

export default CadastroPessoa;
