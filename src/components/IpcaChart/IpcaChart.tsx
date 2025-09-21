import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import type { ChartData } from '../../services/ibgeService';
import styles from './IpcaChart.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface IpcaChartProps {
  data: ChartData;
}

export function IpcaChart({ data }: IpcaChartProps) {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'Variação do IPCA por Grupo no Último Mês (%)' },
    },
    maintainAspectRatio: false,
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Variação %',
        data: data.values,
        backgroundColor: 'rgba(0, 51, 102, 0.6)',
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}