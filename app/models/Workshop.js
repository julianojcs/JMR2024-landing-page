import PricedItem from './PricedItem';

class Workshop extends PricedItem {
    constructor(title, description = null, prices = []) {
        super(title, description);
        this.setPrices(prices);
    }

    static fromCategory(categoryId, eventData) {
        if (!categoryId || !eventData?.registrationForm?.categories) {
            return null;
        }

        const category = eventData.registrationForm.categories.find(
            category => category.id === categoryId
        );

        if (!category?.workshop) {
            return null;
        }

        const { title, description, prices } = category.workshop;
        return new Workshop(title, description, prices);
    }
}

export default Workshop;