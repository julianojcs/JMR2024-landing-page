import PricedItem from './PricedItem';

class DayUse extends PricedItem {
    constructor(title, description = null, date = null, prices = []) {
        super(title, description);
        this.date = date;
        this.setPrices(prices);
    }

    static fromCategory(categoryId, eventData) {
        if (!categoryId || !eventData?.registrationForm?.categories) {
            return null;
        }

        const category = eventData.registrationForm.categories.find(
            category => category.id === categoryId
        );

        if (!category?.dayUse) {
            return null;
        }

        const { title, description, date, prices } = category.dayUse;
        return new DayUse(title, description, date, prices);
    }
}

export default DayUse;