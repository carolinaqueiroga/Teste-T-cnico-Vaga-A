# Importações (banco de dados)
from database import Database

# Função para testar o banco de dados
def test_database():
    # Testa todas as consultas do banco de dados
    db = Database()
    
    print("\n=== Análise dos Funcionários ===\n")
    
    # Teste 1: Cargos únicos
    print("1. Quantos e quais são os cargos únicos?")
    roles = db.get_unique_roles()
    print(f"   Total de cargos: {len(roles)}")
    print("   Cargos disponíveis:")
    for role in roles:
        print(f"   - {role['cargo']}")
    
    # Teste 2: Top 5 maiores salários
    print("\n2. Top 5 maiores salários:")
    top_salaries = db.get_top_salaries(desc=True)
    for worker in top_salaries:
        print(f"   - {worker['nome']} ({worker['cargo']})")
        print(f"     Salário: R$ {worker['salario']:,.2f}")
    
    # Teste 3: Top 5 menores salários
    print("\n3. Top 5 menores salários:")
    bottom_salaries = db.get_top_salaries(desc=False)
    for worker in bottom_salaries:
        print(f"   - {worker['nome']} ({worker['cargo']})")
        print(f"     Salário: R$ {worker['salario']:,.2f}")
    
    # Teste 4: Média salarial por cargo
    print("\n4. Média salarial por cargo:")
    avg_salaries = db.get_avg_salary_per_role()
    for role in avg_salaries:
        print(f"   - {role['cargo']}:")
        print(f"     Média: R$ {role['media_salario']:,.2f}")
        print(f"     Total de funcionários: {role['total_workers']}")
    
    # Teste 5: Maiores salários por cargo
    print("\n5. Funcionários com maiores salários por cargo:")
    highest_salaries = db.get_highest_salary_per_role()
    for worker in highest_salaries:
        print(f"   - {worker['cargo']}:")
        print(f"     {worker['nome']}: R$ {worker['salario']:,.2f}")

# Executa a função principal
if __name__ == '__main__':
    test_database() 