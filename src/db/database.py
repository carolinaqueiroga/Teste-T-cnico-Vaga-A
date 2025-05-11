# Importações (SQLite, sistema de arquivos)
import sqlite3
import os

# Classe para gerenciar o banco de dados
class Database:
    def __init__(self):
        # Configurar o caminho do banco de dados
        current_dir = os.path.dirname(os.path.abspath(__file__))
        self.db_path = os.path.join(current_dir, 'company.db')
        
        # Cria/conecta ao banco de dados
        self.conn = sqlite3.connect(self.db_path)
        self.conn.row_factory = sqlite3.Row
        
        # Configurar para modo texto
        self.conn.text_factory = str
        
        # Lê e executa o arquivo SQL
        sql_path = os.path.join(current_dir, 'statements.sql')
        with open(sql_path, 'r', encoding='utf-8') as file:
            sql = file.read()
            
            # Separa as declarações
            statements = sql.split(';')
            
            try:
                for statement in statements:
                    if statement.strip():  # Ignora linhas vazias
                        self.conn.execute(statement)
                        self.conn.commit()
                    
            except sqlite3.OperationalError as e:
                print(f"Erro ao executar SQL: {str(e)}")

    def get_all_workers(self):
        # Retorna todos os funcionários
        result = self.conn.execute('SELECT * FROM workers')
        return [dict(row) for row in result.fetchall()]

    def get_unique_roles(self):
        # Retorna todos os cargos únicos
        result = self.conn.execute('SELECT DISTINCT cargo FROM workers ORDER BY cargo')
        return [dict(row) for row in result.fetchall()]

    def get_top_salaries(self, limit=5, desc=True):
        # Retorna os top 5 maiores ou menores salários
        order = 'DESC' if desc else 'ASC'
        result = self.conn.execute(f'''
            SELECT nome, cargo, salario
            FROM workers
            ORDER BY salario {order}
            LIMIT ?
        ''', (limit,))
        return [dict(row) for row in result.fetchall()]

    def get_avg_salary_per_role(self):
        # Calcula a média salarial por cargo
        result = self.conn.execute('''
            SELECT cargo, 
                AVG(salario) as media_salario,
                COUNT(*) as total_workers
            FROM workers
            GROUP BY cargo
            ORDER BY media_salario DESC
        ''')
        return [dict(row) for row in result.fetchall()]

    def get_highest_salary_per_role(self):
        # Retorna os funcionários com maiores salários por cargo
        result = self.conn.execute('''
            WITH RankedSalaries AS (
                SELECT nome, cargo, salario,
                    ROW_NUMBER() OVER (PARTITION BY cargo ORDER BY salario DESC) as rank
                FROM workers
            )
            SELECT nome, cargo, salario
            FROM RankedSalaries
            WHERE rank = 1
            ORDER BY salario DESC
        ''')
        return [dict(row) for row in result.fetchall()]

    def __del__(self):
        # Fecha a conexão com o banco de dados quando o objeto é destruído
        self.conn.close()