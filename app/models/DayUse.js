import PricedItem from './PricedItem';

class DayUse extends PricedItem {
  constructor(title, description = null, image = null, prices = []) {
    super(title, description);
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

    if (!category?.dayUse) {
      return null;
    }

    const { title, description, image, prices } = category.dayUse;
    return new DayUse(title, description, image, prices);
  }
}

export default DayUse;