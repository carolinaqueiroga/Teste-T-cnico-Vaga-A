/* Importação de bibliotecas e componentes (React e CSS) */
import React from 'react';
import './footer.css';

/* Bloco do footer da interface */
const Footer: React.FC = () => {
  /* Função para fazer um botão de rolar a página até o topo */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  /* Renderização do footer */
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        {/* Componentes na esquerda do footer (links de navegação externos) */}
        <div className="footer-left">
          <div className="footer-navigation">
            <a href="https://www.ford.com.br/#" target="_blank" rel="noopener noreferrer" className="footer-btn">Sobre Nós</a>
            <a href="https://www.ford.com.br/fale-conosco/" target="_blank" rel="noopener noreferrer" className="footer-btn">Contato Conosco</a>
          </div>
        </div>
        {/* Componentes na direita do footer (slogan, e copyright da Ford ebotão de voltar ao topo ) */}
        <div className="footer-right">
          <button 
            onClick={scrollToTop} 
            className="scroll-top-btn"
            aria-label="Voltar ao topo da página"
            aria-description="Clique para rolar suavemente até o início da página"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 15 16"
              role="img"
              aria-hidden="true"
            >
              <path d="M6.5 14.5C6.5 15.0523 6.94772 15.5 7.5 15.5C8.05228 15.5 8.5 15.0523 8.5 14.5H6.5ZM8.20711 0.792893C7.81658 0.402369 7.18342 0.402369 6.79289 0.792893L0.428932 7.15685C0.0384078 7.54738 0.0384078 8.18054 0.428932 8.57107C0.819457 8.96159 1.45262 8.96159 1.84315 8.57107L7.5 2.91421L13.1569 8.57107C13.5474 8.96159 14.1805 8.96159 14.5711 8.57107C14.9616 8.18054 14.9616 7.54738 14.5711 7.15685L8.20711 0.792893ZM7.5 14.5H8.5L8.5 1.5H7.5H6.5L6.5 14.5H7.5Z"/>
            </svg>
          </button>
          <h2 className="footer-slogan">Ford Ready for More</h2>
          <p className="footer-copyright">&copy; 2025 Ford. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

/* Exportação do footer */
export default Footer;
