import PricedItem from './PricedItem';

class Journey extends PricedItem {
    constructor(title, image = null, prices = []) {
        super(title);
        this.image = image;
        this.setPrices(prices);
    }

    static fromCategory(categoryId, eventData) {
        if (!categoryId || !eventData?.registrationForm?.categories) {
            return null;
        }

        const category = eventData.registrationForm.categories.find(
            category => category.id === categoryId
        );

        if (!category?.journey) {
            return null;
        }

        const { title, image, prices } = category.journey;
        return new Journey(title, image, prices);
    }
}

export default Journey;