// Importações de dependências (React, useState, useEffect), CSS e componentes
import { useState, useEffect } from 'react'
import './components/App.css'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  const [data, setData] = useState({
    uniqueRoles: [],
    topSalaries: [],
    bottomSalaries: [],
    avgSalaries: [],
    highestSalariesPerRole: []
  });

  const [error, setError] = useState(null);

  // Função para gerar uma cor de flag baseada no texto do cargo
  const getRoleColor = (role) => {
    const colors = [
      'rgb(255 107 107 / 0.2)',  // #FF6B6B
      'rgb(78 205 196 / 0.2)',   // #4ECDC4
      'rgb(69 183 209 / 0.2)',   // #45B7D1
      'rgb(150 206 180 / 0.2)',  // #96CEB4
      'rgb(255 238 173 / 0.2)',  // #FFEEAD
      'rgb(212 165 165 / 0.2)',  // #D4A5A5
      'rgb(155 89 182 / 0.2)',   // #9B59B6
      'rgb(52 152 219 / 0.2)',   // #3498DB
      'rgb(230 126 34 / 0.2)',   // #E67E22
      'rgb(46 204 113 / 0.2)',   // #2ECC71
      'rgb(241 196 15 / 0.2)',   // #F1C40F
      'rgb(26 188 156 / 0.2)',   // #1ABC9C
      'rgb(231 76 60 / 0.2)',    // #E74C3C
      'rgb(52 73 94 / 0.2)',     // #34495E
      'rgb(22 160 133 / 0.2)'    // #16A085
    ];
    
    const index = role.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  useEffect(() => {
    // Função para buscar os dados do backend
    const fetchData = async () => {
      try {
        console.log('Tentando buscar dados de:', 'http://localhost:5000/api/analytics');
        const response = await fetch('http://localhost:5000/api/analytics');
        console.log('Resposta recebida:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log('Dados recebidos:', result);
        setData(result);
      } catch (error) {
        console.error('Erro detalhado:', error);
        setError(error.message.toLowerCase() === 'failed to fetch' ? 'Falha na busca :(' : error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="container">
        <Header />
        <main>
          <div className="card error">
            <h2>Ocorreu um erro:</h2>
            <p>{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="container">
      <Header />

      <main>
        <h1 className="page-title">Análise de Funcionários</h1>
        <div className="salary-comparison">
          <section className="card top-salaries">
            <h2>Top 5 Maiores Salários</h2>
            <table>
              <thead>
                <tr>
                  <th>Posição</th>
                  <th>Nome</th>
                  <th>Cargo</th>
                  <th>Salário</th>
                </tr>
              </thead>
              <tbody>
                {data.topSalaries.map((worker, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{worker.nome}</td>
                    <td>
                      <div className="role-flag" style={{ backgroundColor: getRoleColor(worker.cargo) }}>
                        {worker.cargo}
                      </div>
                    </td>
                    <td>R$ {worker.salario.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="card bottom-salaries">
            <h2>Top 5 Menores Salários</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Nome</th>
                  <th>Cargo</th>
                  <th>Salário</th>
                </tr>
              </thead>
              <tbody>
                {data.bottomSalaries.map((worker, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{worker.nome}</td>
                    <td>
                      <div className="role-flag" style={{ backgroundColor: getRoleColor(worker.cargo) }}>
                        {worker.cargo}
                      </div>
                    </td>
                    <td>R$ {worker.salario.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        <div className="roles-comparison">
          <section className="card unique-roles">
            <h2>Cargos Únicos</h2>
            <table>
              <thead>
                <tr>
                  <th>Total: {data.uniqueRoles.length}</th>
                  <th>Cargo</th>
                </tr>
              </thead>
              <tbody>
                {data.uniqueRoles.map((role, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="role-flag" style={{ backgroundColor: getRoleColor(role.cargo) }}>
                        {role.cargo}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="card avg-salaries">
            <h2>Média Salarial por Cargo</h2>
            <table>
              <thead>
                <tr>
                  <th>Cargo</th>
                  <th>Média Salarial</th>
                </tr>
              </thead>
              <tbody>
                {data.avgSalaries.map((role, index) => (
                  <tr key={index}>
                    <td>
                      <div className="role-flag" style={{ backgroundColor: getRoleColor(role.cargo) }}>
                        {role.cargo}
                      </div>
                    </td>
                    <td>R$ {role.media_salario.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="card highest-salaries">
            <h2>Maiores Salários por Cargo</h2>
            <table>
              <thead>
                <tr>
                  <th>Cargo</th>
                  <th>Nome</th>
                  <th>Salário</th>
                </tr>
              </thead>
              <tbody>
                {data.highestSalariesPerRole.map((worker, index) => (
                  <tr key={index}>
                    <td>
                      <div className="role-flag" style={{ backgroundColor: getRoleColor(worker.cargo) }}>
                        {worker.cargo}
                      </div>
                    </td>
                    <td>{worker.nome}</td>
                    <td>R$ {worker.salario.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
