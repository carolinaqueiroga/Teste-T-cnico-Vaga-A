# Importações (Flask, CORS, banco de dados)
from flask import Flask, jsonify
from flask_cors import CORS
from database import Database

# Inicialização da aplicação Flask
app = Flask(__name__)
# Configuração do CORS para permitir requisições de qualquer origem
CORS(app, resources={r"/*": {"origins": "*"}})

# Rota principal (verifica se a API está funcionando)
@app.route('/')
def home():
    return jsonify({"message": "API está funcionando!"})

# Rota de analytics (retorna dados estatísticos dos funcionários)
@app.route('/api/analytics')
def get_analytics():
    # Instancia o banco de dados
    db = Database()
    
    # Retorna um JSON com diferentes análises:
    # - Cargos únicos
    # - Top 5 maiores salários
    # - Top 5 menores salários
    # - Média salarial por cargo
    # - Maior salário por cargo
    return jsonify({
        'uniqueRoles': db.get_unique_roles(),
        'topSalaries': db.get_top_salaries(desc=True),
        'bottomSalaries': db.get_top_salaries(desc=False),
        'avgSalaries': db.get_avg_salary_per_role(),
        'highestSalariesPerRole': db.get_highest_salary_per_role()
    })

# Inicia o servidor quando o arquivo é executado diretamente
if __name__ == '__main__':
    # Executa o servidor em modo debug na porta 5000
    # host='0.0.0.0' permite acesso de qualquer IP
    app.run(debug=True, port=5000, host='0.0.0.0') 