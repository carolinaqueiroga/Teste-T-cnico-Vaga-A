# Importações (SQLite, sistema de arquivos)
import sqlite3
import os
import shutil

# Função para popular o banco de dados
def seed_database():
    # Copia os dados do database.db existente
    current_dir = os.path.dirname(os.path.abspath(__file__))
    source_db = os.path.join(current_dir, 'database.db')
    target_db = os.path.join(current_dir, 'database.db')

    try:
        # Verifica se o arquivo existe
        if not os.path.exists(source_db):
            print(f"Arquivo {source_db} não encontrado!")
            return

        # Verifica os dados da tabela
        conn = sqlite3.connect(source_db)
        conn.row_factory = sqlite3.Row
        result = conn.execute('SELECT COUNT(*) as total FROM workers').fetchone()
        print(f"Total de registros no banco: {result['total']}")
        conn.close()
        
    except Exception as e:
        print(f"Erro ao acessar o banco de dados: {str(e)}") # Exceção de erro

# Executa a função principal
if __name__ == '__main__':
    seed_database() 