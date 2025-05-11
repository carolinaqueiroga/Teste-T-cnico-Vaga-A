@echo off
:: Desativa a exibição dos comandos no terminal durante a execução

cd "%~dp0"
:: Muda para o diretório onde o arquivo .bat está localizado

npm run dev 
:: Executa o script 'dev' definido no package.json, que inicia o servidor de desenvolvimento do Vite 

:: OBS: Fiz esse bat só pra agilizar na hora de startar o front. Só digitar o npm run dev no terminal também funciona