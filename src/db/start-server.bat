:: Desativa a exibição dos comandos no console
@echo offs

:: Adiciona o diretório dos scripts Python ao PATH do sistema
set PATH=%PATH%;C:\Users\Carolina\AppData\Roaming\Python\Python312\Scripts

:: Muda para o diretório onde o script está localizado
cd %~dp0

:: Executa o servidor (Flask)
python server.py 

:: OBS: Fiz esse bat só pra agilizar na hora de startar o backend. Só digitar o python server.py no terminal também funciona