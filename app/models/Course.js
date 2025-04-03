import PricedItem from './PricedItem';

class Course extends PricedItem {
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

        if (!category?.course) {
            return null;
        }

        const { title, description, prices } = category.course;
        return new Course(title, description, prices);
    }
}

export default Course;