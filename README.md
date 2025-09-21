# Desafio Sparta: Visualização de Dados do IBGE

Aplicação web desenvolvida como parte do desafio técnico da Sparta. O objetivo é consumir e apresentar dados de diferentes endpoints da API pública do IBGE, seguindo um layout pré-definido e demonstrando o uso de tecnologias modernas de front-end.

---

## ✨ Features

* **Visualização de Dados:** Gráfico de barras interativo exibindo a variação mensal do IPCA por grupos, consumido diretamente da API SIDRA do IBGE.
* **Feed de Notícias Dinâmico:** Exibição das últimas notícias publicadas pelo IBGE, com título, introdução e link para a matéria completa.
* **Paginação "Carregar Mais":** Funcionalidade para carregar mais notícias de forma assíncrona, sem recarregar a página.
* **Roteamento SPA:** Sistema de rotas client-side utilizando `react-router-dom` para navegação entre as páginas "Home" e "Sobre" sem refresh.
* **Layout Fiel:** Interface construída para ser fiel ao layout proposto no desafio, com sidebar de navegação e header dinâmico que reflete a rota atual.

---

## 🚀 Tecnologias Utilizadas

* **Frontend:** [React](https://react.dev/) (com [Vite](https://vitejs.dev/))
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Roteamento:** [React Router DOM](https://reactrouter.com/)
* **Chamadas API:** [Axios](https://axios-http.com/)
* **Gráficos:** [Chart.js](https://www.chartjs.org/) com [react-chartjs-2](https://react-chartjs-2.js.org/)
* **Estilização:** CSS Modules
* **Ícones:** Google Material Symbols

---


## ⚙️ Como Rodar Localmente

Siga os passos abaixo para executar o projeto em sua máquina.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/en) (versão 18 ou superior)
* [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

```bash
# 1. Clone o repositório
git clone [https://github.com/DaniloM05/desafio-ibge-sparta.git](https://github.com/DaniloM05/desafio-ibge-sparta.git)

# 2. Navegue até a pasta do projeto
cd desafio-ibge-sparta

# 3. Instale as dependências do projeto
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```
Após executar `npm run dev`, a aplicação estará disponível em `http://localhost:5173`.

---

## 🧠 Decisões Técnicas Principais

Durante o desenvolvimento, algumas decisões de arquitetura foram tomadas para garantir um código limpo, manutenível e escalável:

1.  **Camada de Serviço (Service Layer):** Toda a lógica de comunicação com as APIs externas do IBGE foi abstraída para uma camada de serviço (`src/services/ibgeService.ts`). Isso desacopla a busca e tratamento de dados dos componentes de UI, seguindo o princípio de separação de conceitos.

2.  **Estilização com CSS Modules:** Optei por usar CSS Modules para a estilização. Isso garante que os estilos de cada componente sejam escopados localmente, evitando conflitos de classes em escala global e tornando os componentes verdadeiramente autocontidos.

3.  **Gerenciamento de Estado Local:** Para a complexidade deste desafio, o uso dos hooks nativos do React (`useState`, `useEffect`) foi suficiente para gerenciar o estado dos dados, carregamento (loading) e erros, evitando a necessidade de bibliotecas de gerenciamento de estado mais complexas.

4.  **Componentização:** A interface foi dividida em componentes reutilizáveis e de propósito único (ex: `DataCard`, `Sidebar`, `IpcaChart`), o que facilita a manutenção e a legibilidade do código.
