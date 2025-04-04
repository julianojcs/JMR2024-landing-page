import PricedItem from './PricedItem';

class Journey extends PricedItem {
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

    if (!category?.journey) {
      return null;
    }

    const { title, description, image, prices } = category.journey;
    return new Journey(title, description, image, prices);
  }
}

export default Journey;