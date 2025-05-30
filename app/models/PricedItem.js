class PricedItem {
  constructor(title, description = null, image = null) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.prices = [];
  }

  setPrices(prices) {
    this.prices = Array.isArray(prices) ? prices : [prices];
    return this;
  }

  getCurrentPrice() {
    if (!this.prices || this.prices.length === 0) return null;

    // Obter data atual e zerar a hora
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const currentPrice = this.prices.find(price => {
      // Parse da data no formato dia/mês/ano
      const [day, month, year] = price.bestBefore.split('/');
      // Mês em JavaScript é 0-indexed (jan=0, dez=11)
      const deadline = new Date(year, month - 1, day);
      // Zerar as horas para garantir comparação apenas de datas
      deadline.setHours(0, 0, 0, 0);

      return now <= deadline;
    }) || this.prices[this.prices.length - 1];

    return {
      ...currentPrice,
      value: this.formatPrice(currentPrice.value)
    };
  }

  formatPrice(value) {
    if (!value) return 'R$ 0,00';
    const number = parseFloat(value.replace(/[^\d,]/g, '').replace(',', '.'));
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number);
  }

  getAllPrices() {
    return [...this.prices];
  }

  getPriceByDate(bestBefore) {
    return this.prices.find(price => price.bestBefore === bestBefore);
  }
}

export default PricedItem;