// Declaração de módulo para arquivos .png
// OBS: Não é algo necessário para o funcionamento do projeto. Apenas incluí porque estava dando erro de importação da logo que eu adicionei
declare module '*.png' {
  const src: string;
  export default src;
} 