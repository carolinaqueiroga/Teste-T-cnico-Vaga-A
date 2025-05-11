/* Importações (React, useState, CSS) */
import React, { useState } from 'react';
import './Settings.css';

/* Interface que define as props do componente */
interface SettingsProps {
  isOpen: boolean;      // Controla a visibilidade do modal
  onClose: () => void;  // Função para fechar o modal
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }) => {
  // Controle do tamanho da fonte
  const [fontSize, setFontSize] = useState(16);

  /* Função para aumentar o tamanho da fonte */
  const increaseFontSize = () => {
    if (fontSize < 22) {
      setFontSize(fontSize + 1);
      document.documentElement.style.fontSize = `${fontSize + 1}px`;
    }
  };

  /* Função para diminuir o tamanho da fonte */
  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 1);
      document.documentElement.style.fontSize = `${fontSize - 1}px`;
    }
  };

  // Se o modal não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  return (
    /* Renderização do modal */
    <div 
      className="settings-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-title"
      aria-describedby="settings-description"
    >
      {/* Container principal do modal */}
      <div className="settings-content">
        {/* Header do modal (título e botão de voltar) */}
        <div className="settings-header">
          <h2 id="settings-title" className="settings-title">Configurações e Acessibilidade</h2>
          <button 
            className="close-button"
            onClick={onClose}
            aria-label="Voltar para a página principal"
          >
            Voltar
          </button>
        </div>
        
        {/* Seção de controle de tamanho de fonte */}
        <div className="settings-section">
          <h3 id="font-size-label">Tamanho da Fonte</h3>
          <div 
            className="font-size-controls"
            role="group"
            aria-labelledby="font-size-label"
          >
            {/* Botão para diminuir o tamanho da fonte */}
            <button 
              onClick={decreaseFontSize}
              disabled={fontSize <= 12}
              aria-label="Diminuir tamanho da fonte"
              aria-valuemin={12}
              aria-valuemax={22}
              aria-valuenow={fontSize}
            >
              A-
            </button>
            {/* Indicador do tamanho atual da fonte */}
            <span aria-live="polite">
              {fontSize}px
            </span>
            {/* Botão para aumentar o tamanho da fonte */}
            <button 
              onClick={increaseFontSize}
              disabled={fontSize >= 22}
              aria-label="Aumentar tamanho da fonte"
              aria-valuemin={12}
              aria-valuemax={22}
              aria-valuenow={fontSize}
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Exportação do modal */
export default Settings; 