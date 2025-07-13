import { default as staticData } from '../data/index.js';

/**
 * Serviço para gerenciar acesso a dados, fornecendo uma interface única
 * independentemente da fonte de dados (API ou dados estáticos)
 */
class DataService {
  constructor() {
    this.dataSource = process.env.NEXT_PUBLIC_DATA_SOURCE || 'static'; // 'api' ou 'static'
    this.apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';
  }

  /**
   * Constrói uma URL completa para a API
   * @param {string} path - Caminho da API (sem a barra inicial)
   * @returns {string} URL completa para a API
   */
  buildApiUrl(path) {
    // Garantir que temos uma URL completa para o fetch
    const baseUrl = this.apiBaseUrl.startsWith('http')
      ? this.apiBaseUrl
      : typeof window !== 'undefined'
        ? `${window.location.origin}${this.apiBaseUrl.startsWith('/') ? '' : '/'}${this.apiBaseUrl}`
        : `http://localhost:3000${this.apiBaseUrl.startsWith('/') ? '' : '/'}${this.apiBaseUrl}`;

    // Garantir que não há barras duplicadas na junção
    const formattedPath = path.startsWith('/') ? path.substring(1) : path;
    return `${baseUrl}${baseUrl.endsWith('/') ? '' : '/'}${formattedPath}`;
  }

  /**
   * Executa uma solicitação fetch com tratamento de erros
   * @param {string} url - URL completa para a solicitação
   * @param {Object} options - Opções para fetch (método, headers, etc)
   * @returns {Promise<Object>} Dados da resposta ou null em caso de erro
   */
  async fetchWithErrorHandling(url, options = {}) {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Erro ao realizar fetch para ${url}:`, error);
      return null;
    }
  }

  /**
   * Obtém o ano ativo atual do evento
   * @returns {Promise<string>} Ano atual do evento
   */
  async getCurrentYear() {
    if (this.dataSource === 'static') {
      // Retorna o primeiro ano disponível nos dados estáticos
      return Object.keys(staticData)[0];
    } else {
      const url = this.buildApiUrl('event');
      const data = await this.fetchWithErrorHandling(url);
      return data?.success ? data.data.year : null;
    }
  }

  /**
   * Obtém informações básicas do evento para um ano específico
   * @param {string} year - Ano do evento
   * @returns {Promise<Object>} Dados do evento
   */
  async getEventData(year) {
    if (this.dataSource === 'static') {
      return staticData[year] || null;
    } else {
      const url = this.buildApiUrl(`${year}/event`);
      const data = await this.fetchWithErrorHandling(url);
      return data?.success ? data.data : null;
    }
  }

  /**
   * Obtém dados de introdução para um ano específico
   * @param {string} year - Ano do evento
   * @returns {Promise<Object>} Dados de introdução
   */
  async getIntroductionData(year) {
    if (!year) {
      year = await this.getCurrentYear();
    }

    if (this.dataSource === 'static') {
      const eventData = staticData[year];
      return eventData?.introduction || null;
    } else {
      const url = this.buildApiUrl(`${year}/introduction`);
      const data = await this.fetchWithErrorHandling(url);
      return data?.success ? data.data : null;
    }
  }

  /**
   * Obtém informações básicas do Banner para um ano específico
   * @param {string} year - Ano do Banner
   * @returns {Promise<Object>} Dados do Banner
   */
  async getBannerData(year) {
    if (!year) {
      year = await this.getCurrentYear();
    }

    if (this.dataSource === 'static') {
      const eventData = staticData[year];
      return eventData?.banner || null;
    } else {
      const url = this.buildApiUrl(`${year}/banners/latest`);
      const data = await this.fetchWithErrorHandling(url);
      return data?.success ? data.data : null;
    }
  }

  /**
   * Obtém informações sobre o modal ativo para um determinado ano
   * @param {string} year - Ano do evento
   * @returns {Promise<Object>} Dados do modal ativo
   */
  async getModalData(year) {
    if (!year) {
      year = await this.getCurrentYear();
    }

    if (this.dataSource === 'static') {
      const eventData = staticData[year];
      return eventData?.modal?.[0] || null; // Assume que o primeiro modal é o ativo
    } else {
      const url = this.buildApiUrl(`${year}/modals/latest`);
      const data = await this.fetchWithErrorHandling(url);
      return data?.success ? data.data : null;
    }
  }

  /**
   * Obtém informações sobre a agência de viagens ativa para um determinado ano
   * @param {string} year - Ano do evento
   * @returns {Promise<Object>} Dados da agência de viagens ativa
   */
  async getTravelAgencyData(year) {
    if (!year) {
      year = await this.getCurrentYear();
    }

    if (this.dataSource === 'static') {
      const eventData = staticData[year];
      // Retorna a agência de viagens apenas se estiver ativa
      return (eventData?.travelAgency && eventData.travelAgency.active) ? eventData.travelAgency : null;
    } else {
      const url = this.buildApiUrl(`${year}/travelagency`);
      const data = await this.fetchWithErrorHandling(url);
      return data?.success ? data.data : null;
    }
  }

  /**
   * Obtém informações sobre as sociedades associadas ao evento
   * @param {string} year - Ano do evento
   * @returns {Promise<Array>} Lista de sociedades
   */
  async getSocietiesData(year) {
    if (!year) {
      year = await this.getCurrentYear();
    }

    if (this.dataSource === 'static') {
      const eventData = staticData[year];
      return eventData?.societies || [];
    } else {
      const url = this.buildApiUrl(`${year}/societies`);
      const data = await this.fetchWithErrorHandling(url);
      return data?.success ? data.data : [];
    }
  }

  /**
   * Obtém informações sobre as tabelas de preços para um determinado ano
   * @param {string} year - Ano do evento
   * @returns {Promise<Object>} Dados das tabelas de preços
   */
  async getPriceTablesData(year) {
    if (!year) {
      year = await this.getCurrentYear();
    }

    if (this.dataSource === 'static') {
      const eventData = staticData[year];
      return eventData?.priceTables || null;
    } else {
      const url = this.buildApiUrl(`${year}/pricetables`);
      const data = await this.fetchWithErrorHandling(url);
      return data?.success ? data.data : null;
    }
  }

  /**
   * Obtém informações sobre os eventos programados para um determinado ano
   * @param {string} year - Ano do evento
   * @returns {Promise<Object>} Dados dos eventos programados
   */
  async getEventsData() {
    if (this.dataSource === 'static') {
      const eventData = staticData;
      return eventData?.events || null;
    } else {
      const url = this.buildApiUrl('events');
      const data = await this.fetchWithErrorHandling(url);
      return data?.success
        ? {
            ...data.data,
            count: data.data.length,
          }
        : null;
    }
  }

  /**
   * Obtém informações sobre as comissões para um determinado ano
   * @param {string} year - Ano do evento
   * @returns {Promise<Array>} Lista de comissões
   */
  async getComissionsData(year) {
    if (!year) {
      year = await this.getCurrentYear();
    }

    if (this.dataSource === 'static') {
      const eventData = staticData[year];
      return eventData?.comissions || [];
    } else {
      const url = this.buildApiUrl(`${year}/comissions`);
      const data = await this.fetchWithErrorHandling(url);
      return data?.success ? data.data : [];
    }
  }

  /**
   * Obtém informações sobre os patrocinadores para um determinado ano
   * @param {string} year - Ano do evento
   * @returns {Promise<Object>} Dados de patrocínio
   */
  async getSponsorshipData(year) {
    if (!year) {
      year = await this.getCurrentYear();
    }

    if (this.dataSource === 'static') {
      const eventData = staticData[year];
      return eventData?.sponsorShip || null;
    } else {
      const url = this.buildApiUrl(`${year}/sponsorship`);
      const data = await this.fetchWithErrorHandling(url);
      return data?.success ? data.data : null;
    }
  }

  /**
   * Verifica se um CPF está associado a uma determinada sociedade
   * @param {string} cpf - CPF a ser verificado
   * @param {string} society - Sigla da sociedade (ex: 'SRMG', 'SOGIMIG', 'SAMMG')
   * @returns {Promise<boolean>} Verdadeiro se o CPF estiver associado à sociedade
   */
  async verifyMembership(cpf, society) {
    if (!cpf || !society) return false;

    if (this.dataSource === 'static') {
      const currentYear = await this.getCurrentYear();
      const societies = staticData[currentYear]?.societies || [];

      const foundSociety = societies.find(s => s.shortName === society);
      if (!foundSociety || !foundSociety.affiliated) return false;

      return foundSociety.affiliated.some(member => member.cpf === cpf);
    } else {
      const url = this.buildApiUrl('membership/verify');
      const data = await this.fetchWithErrorHandling(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cpf, society }),
      });

      return data?.success
        ? {
            isMember: data.isMember
          }
        : {
            errorMessage: data?.message || 'Erro ao verificar associação'
          };
    }
  }
}

// Exporta uma única instância do serviço para ser utilizada em toda a aplicação
export default new DataService();