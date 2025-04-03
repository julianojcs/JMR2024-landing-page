class PricedItem {
    constructor(title, description = null) {
        this.title = title;
        this.description = description;
        this.prices = [];
    }

    setPrices(prices) {
        this.prices = Array.isArray(prices) ? prices : [prices];
        return this;
    }

    getCurrentPrice() {
        if (!this.prices || this.prices.length === 0) return null;

        const now = new Date();
        const currentPrice = this.prices.find(price => {
            const [day, month, year] = price.bestBefore.split('/');
            const deadline = new Date(year, month - 1, day);
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