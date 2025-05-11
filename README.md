# Teste Técnico - Vaga A

Interface web para apresentação de pesquisas da tabela de funcionários do banco de dados de uma empresa fictícia. Desenvolvido com React, Flask e SQLite por Ana Carolina Queiroga Camboim.

## 🚀 Tecnologias Utilizadas

### Frontend
- React
- Vite
- SQLite (better-sqlite3)
- TypeScript

### Backend
- Flask
- SQLite (biblioteca padrão do Python)
- Flask-CORS

## 📋 Pré-requisitos

- Python 3.x
- Node.js 18.x ou superior
- npm 9.x ou superior
- VS Code (recomendado)
  - Extensão SQLite (recomendada para visualização do banco de dados)

## 🔧 Instalação

1. Clone o repositório
```bash
git clone [URL_DO_REPOSITÓRIO]
cd [NOME_DO_DIRETÓRIO]
```

2. Instale as dependências do backend
```bash
pip install -r requirements.txt
```

3. Instale as dependências do frontend
```bash
npm install
```

## 🚀 Executando o Projeto

### Backend
Você pode iniciar o backend de duas maneiras:

1. Usando o arquivo batch (Só funciona com Windows):
    - Dê um clique duplo no arquivo `start-server.bat`
    - O arquivo está no diretório db

2. Usando o terminal:
```bash
cd db
python app.py
```

### Frontend
Você pode iniciar o frontend de duas maneiras:

1. Usando o arquivo batch (Só funciona com Windows):
   - Dê um clique duplo no arquivo `start-frontend.bat`
   - O arquivo está no mesmo diretório do `package.json`

2. Usando o terminal:
```bash
npm run dev
```
OBS: Se está usando Linux ou MacOS mas quer executar esses batchs mesmo assim aqui tem um tutorial para cada: 

    - Para Linux: https://guidetux.com.br/comando-batch-no-linux/
    - Para MacOS: https://cleanmymac.com/blog/run-bat-files-mac

## 📦 Estrutura do Projeto

```
├── public/                    # Arquivos públicos
│   └── ford-favicon.jfif     # Favicon do projeto
│
├── src/                      # Código do frontend
│   ├── components/           # Componentes do React
│   │   ├── Settings.tsx     # Componente de configurações
│   │   ├── Settings.css     # Estilos do componente Settings
│   │   ├── footer.tsx       # Componente do rodapé
│   │   ├── footer.css       # Estilos do rodapé
│   │   ├── header.tsx       # Componente do cabeçalho
│   │   ├── header.css       # Estilos do cabeçalho
│   │   └── App.css          # Estilos globais da aplicação
│   │
│   ├── assets/              # Recursos estáticos (imagens, etc)
│   ├── types/               # Definições de tipos TypeScript
│   │   └── images.d.ts      # Tipos para importação de imagens
│   │
│   ├── App.jsx             # Componente principal da aplicação
│   ├── main.jsx            # Ponto de entrada do React
│   ├── index.css           # Estilos globais
│   └── vite-env.d.ts       # Configurações do ambiente Vite
│
├── src/db/                  # Backend e banco de dados
│   ├── server.py           # Servidor Flask
│   ├── database.py         # Configuração e operações do banco de dados
│   ├── statements.sql      # Queries SQL para criação do banco
│   ├── seed.py             # Script para popular o banco com os dados fornecidos
│   ├── test.py             # Testes do backend
│   ├── company.db          # DataBase SQLite
│   └── start-server.bat    # Script para iniciar o servidor (Windows)
│
├── public/                 # Arquivos públicos
├── index.html             # Página HTML principal
├── requirements.txt       # Instalações necessárias para rodar a aplicação
└── start-frontend.bat    # Script para iniciar o frontend (Windows)

```

## 👩‍🏫​ Explicando a estrutura do Banco de Dados

- statements.sql:
    - É o arquivo que define a estrutura do banco de dados. Contém o comando CREATE TABLE que cria a tabela workers com as colunas:
        - id: Identificador único (auto-incrementado);
        - nome: Nome do funcionário;
        - cargo: Cargo do funcionário
        - salario: Salário (com 2 casas decimais)
        - data_admissao: Data de admissão
    - Também contém todos os INSERT com os dados dos funcionários

- database.py:
    - É o arquivo principal que gerencia a conexão com o banco de dados. Ele usa a biblioteca SQLite do Python para conectar ao banco e executa o arquivo statements.sql para criar a estrutura e inserir os dados.
    - Ele exporta várias funções para consultar o banco:
        - get_all_workers(): Retorna todos os funcionários
        - get_worker_by_id(): Busca um funcionário pelo ID
        - get_workers_by_cargo(): Busca funcionários por cargo
        - get_salario_medio_por_cargo(): Calcula a média salarial por cargo
        - get_workers_por_faixa_salarial(): Busca funcionários por faixa salarial
        - get_workers_por_data_admissao(): Busca funcionários por período de admissão

- server.py:
    - Implementa o servidor Flask que expõe as APIs REST
    - Define as rotas para acessar as funções do database.py
    - Gerencia as requisições HTTP e respostas JSON

- seed.py:
    - Script para popular o banco de dados com dados iniciais
    - Pode ser usado para resetar o banco com os dados fornecidos se necessário

- test.py:
    - É um arquivo de teste que demonstra como usar as funções do database.py. Ele testa todas as funções de consulta.

- company.db:
    - É o arquivo do banco de dados SQLite. Ele é criado automaticamente quando o database.py é executado.
    - Ele é um arquivo binário que contém a estrutura e os dados dos funcionários
    - O fluxo de funcionamento é:
        - database.py lê o statements.sql
        - Cria/atualiza o company.db
        - As funções em database.py permitem consultar os dados
        - test.py demonstra como usar essas funções

## 🔍 Funcionalidades do Back-End

### Listagem de funcionários

### Exibição de consultas para apresentar:
  - Quantos cargos únicos existem e quais são eles
  - Os top 5 maiores salários
  - Os top 5 menores salários
  - A média salarial por cargo
  - Funcionários com os maiores salários por cargo

## 🔍 Funcionalidades do Front-End

### Interface do Usuário
  - Design responsivo que se adapta a diferentes tamanhos de tela
  - Layout minimalista e intuitivo
  - Paleta de cores emblemática
  - Apresentação visual dos cargos organizados por cores

### Configurações e Acessibilidade
  - Uso da fonte Lexend em toda a aplicação, que foi desenvolvida especialmente para facilitar a leitura de usuários disléxicos e gerar conforto visual para quem a lê.
- Utilização de ARIA Labels em todos os elementos visuais da aplicação que não consistem em puro texto, com o intuito de facilitar o uso de programas de leitura por voz para pessoas legalmente cegas/não alfabetizadas.
  - Configuração de tamanho de fonte nativa para facilitar a navegação na interface para pessoas com deficiências visuais. Isso garante uma responsividade de tela consistente até com personalizações adicionais.
  - Composição de paleta de cores que segue as Diretrizes de Acessibilidade para Conteúdo Web (WCAG). Isso significa que pessoas com dautonismo serão capazes de distinguir o contraste de todos os blocos visuais da aplicação.

## 📝 Notas
  - O SQLite já vem incluído no Python, não é necessário instalar separadamente
  - A extensão SQLite do VS Code é recomendada para melhor visualização e gerenciamento do banco de dados
  - Os arquivos do cache e do company.db não são renderizados para editor de texto

## ​🎀​ Observações Adicionais
- Eu fiz a interface sem ajuda de frameworks de UIUX. Meu design é autoral e passou por várias atualizações durante o processo.
- Construí as telas com o auxílio do Figma
- Aqui estão fotos de duas delas:
  ![image](https://github.com/user-attachments/assets/dbf5abb5-4013-4ba4-8893-add54c9db9aa)
  ![image](https://github.com/user-attachments/assets/3e286ee3-24c4-4c40-85f5-32e712d34fb1)

- Por fim, agradeço imensamente pela oportunidade de participar da etada desse processo seletivo.
- Uma frase que levei muito em consideração durante essa semana:

## “A user interface is like a joke. If you have to explain it, it’s not that good.” - Martin LeBlanc, CXO da Freepik e fundador do Iconfinder



