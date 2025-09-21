import axios from 'axios';

const IPCA_API_URL = "https://apisidra.ibge.gov.br/values/t/1419/n1/all/v/63/p/last%201/c315/7169,7170,7445,7486,7558,7625,7660,7712,7766,7786/d/v63%202";
const NOTICIAS_API_URL_BASE = "https://servicodados.ibge.gov.br/api/v3/noticias/";


export interface ChartData {
  labels: string[];
  values: number[];
}

export interface Noticia {
  id: number;
  titulo: string;
  introducao: string;
  link: string;
}

export const fetchIpcaData = async (): Promise<ChartData> => {
  try {
    const response = await axios.get(IPCA_API_URL);
    
    if (response.data.length < 2) {
      throw new Error("Dados do IPCA não encontrados ou em formato inesperado.");
    }

    const rawData = response.data.slice(1);
    const labels = rawData.map((item: any) => item['D4N']);
    const values = rawData.map((item: any) => parseFloat(item['V']));

    return { labels, values };
  } catch (error) {
    throw new Error("Não foi possível carregar os dados de inflação.");
  }
};

export const fetchNoticias = async (pagina = 1, quantidade = 5): Promise<Noticia[]> => {
  try {
    const response = await axios.get(`${NOTICIAS_API_URL_BASE}?page=${pagina}&qtd=${quantidade}`);

    if (!response.data || !Array.isArray(response.data.items)) {
      throw new Error("Formato inesperado da API de notícias.");
    }

    return response.data.items.map((item: any) => ({
      id: item.id,
      titulo: item.titulo,
      introducao: item.introducao,
      link: item.link,
    }));
  } catch (error) {
    throw new Error("Não foi possível carregar as últimas notícias.");
  }
};