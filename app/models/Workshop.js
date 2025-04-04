import PricedItem from './PricedItem';

class Workshop extends PricedItem {
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

    if (!category?.workshop) {
      return null;
    }

    const { title, description, image, prices } = category.workshop;
    return new Workshop(title, description, image, prices);
  }
}

export default Workshop;