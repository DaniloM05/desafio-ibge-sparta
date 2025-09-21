import { DataCard } from '../../components/DataCard/DataCard';
import styles from './Sobre.module.css';

export function Sobre() {
  return (
    <div className={styles.SobreContainer}>
      <DataCard title="Sobre o Projeto">
        <p>
          Esta aplicação foi desenvolvida como parte do Desafio de Visualização de Dados do IBGE proposto pela Sparta.
        </p>
        <p>
          O objetivo é consumir e apresentar dados de diferentes endpoints do IBGE, seguindo um layout pré-definido e utilizando tecnologias modernas de front-end.
        </p>
        <strong>Tecnologias utilizadas:</strong>
        <ul>
          <li>React com Vite</li>
          <li>TypeScript</li>
          <li>React Router DOM para roteamento</li>
          <li>Axios para chamadas API</li>
          <li>Chart.js para visualização de dados</li>
          <li>CSS Modules para estilização</li>
        </ul>
      </DataCard>
    </div>
  );
}