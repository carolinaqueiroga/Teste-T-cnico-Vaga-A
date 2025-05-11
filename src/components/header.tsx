/* Importação de dependências e componentes (React, logo, endereço para a página de configs) */
import React, { useState, useEffect } from 'react';
import './header.css';
import Logo from '../assets/ford-logo.png'
import Settings from './Settings';

/* Renderização do header */
const Header: React.FC = () => {
  /* Hook para abrir/fechar o modal de configurações e acessibilidade */
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 320);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <header>
      <div className="header-content">
        {/* Logo da Ford */}
        <img 
          src={Logo} 
          alt="Logo da Ford" 
          className="logo" 
          role="img"
          aria-label="Logo da Ford"
        />
        {/* Botão para abrir o modal de configurações e acessibilidade */}
        <button 
          className="settings-button"
          onClick={() => setIsSettingsOpen(true)}
          aria-label="Abrir configurações e acessibilidade"
          aria-expanded={isSettingsOpen}
          aria-controls="settings-modal"
          aria-haspopup="dialog"
        >
          {isSmallScreen ? (
            <>
              Configurações<br />
              e Acessibilidade
            </>
          ) : (
            "Configurações e Acessibilidade"
          )}
        </button>
        {/* Título de boas-vindas */}
        <h1 className="Greeting">
          {isSmallScreen ? (
            <>
              Bem<br />
              Vindo!
            </>
          ) : (
            "Bem Vindo!"
          )}
        </h1>
      </div>
      {/* Área de acesso ao modal usando o Hook */}
      <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </header>
  );
};

/* Exportação do header */
export default Header;
