import { useState, useEffect } from 'react';
import { DataCard } from '../../components/DataCard/DataCard';
import { IpcaChart } from '../../components/IpcaChart/IpcaChart';
import { fetchIpcaData, fetchNoticias } from '../../services/ibgeService';
import type { ChartData, Noticia } from '../../services/ibgeService';
import styles from './Dashboard.module.css';

const QUANTIDADE_POR_PAGINA = 5;

export function Dashboard() {
  const [ipcaData, setIpcaData] = useState<ChartData | null>(null);
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [carregandoMais, setCarregandoMais] = useState(false);
  
  const [loadingInicial, setLoadingInicial] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoadingInicial(true);
        const [ipcaResult, noticiasResult] = await Promise.all([
          fetchIpcaData(),
          fetchNoticias(1, QUANTIDADE_POR_PAGINA), 
        ]);
        
        setIpcaData(ipcaResult);
        setNoticias(noticiasResult);
        setPaginaAtual(1);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Ocorreu um erro inesperado.");
      } finally {
        setLoadingInicial(false);
      }
    };

    loadInitialData();
  }, []);

  const handleCarregarMais = async () => {
    setCarregandoMais(true);
    try {
      const proximaPagina = paginaAtual + 1;
      const novasNoticias = await fetchNoticias(proximaPagina, QUANTIDADE_POR_PAGINA);

      setNoticias(noticiasAnteriores => [...noticiasAnteriores, ...novasNoticias]);
      setPaginaAtual(proximaPagina);
    } catch (err) {
    } finally {
      setCarregandoMais(false);
    }
  };

  if (loadingInicial) {
    return <div className={styles.message}>Carregando dados do IBGE...</div>;
  }

  if (error) {
    return <div className={`${styles.message} ${styles.error}`}>Erro: {error}</div>;
  }

  return (
    <div className={styles.dashboard}>
      <DataCard title="Mural de Inflação (IPCA)">
        {ipcaData ? <IpcaChart data={ipcaData} /> : <p>Dados não disponíveis.</p>}
      </DataCard>

      <DataCard title="Últimas Notícias do IBGE">
        <div className={styles.noticiasContainer}>
          {noticias.map(noticia => (
            <div key={noticia.id} className={styles.noticiaItem}>
              <a href={noticia.link} target="_blank" rel="noopener noreferrer" className={styles.noticiaTitulo}>
                {noticia.titulo}
              </a>
              <p className={styles.noticiaIntroducao}>{noticia.introducao}</p>
            </div>
          ))}
        </div>
        
        <button 
          className={styles.loadMoreButton} 
          onClick={handleCarregarMais} 
          disabled={carregandoMais}
        >
          {carregandoMais ? 'Carregando...' : 'Carregar Mais Notícias'}
        </button>
      </DataCard>
    </div>
  );
}