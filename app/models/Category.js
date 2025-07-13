import { Journey, Course, Workshop, DayUse } from './index';

class Category {
  constructor(id, title, description = null, image = null) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.member = [];
    this.places = null;
    this.receipt = {
      enabled: false,
      title: null
    };
    this.journey = null;
    this.courses = []; // Garantir que é inicializado como array vazio
    this.workshops = [];
    this.dayUse = null;
  }

  setImage(image) {
    this.image = image;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setMember(member) {
    this.member = [...member];
    return this;
  }

  setPlaces(places) {
    this.places = parseInt(places, 10) || 0;
    return this;
  }

  setReceipt(enabled = false, title = null) {
    this.receipt = {
      enabled: Boolean(enabled),
      title
    };
    return this;
  }

  setJourney(journey) {
    this.journey = journey;
    return this;
  }

  addCourse(course) {
    if (!this.courses) this.courses = [];
    this.courses.push(course);
        return this;
    }

  setCourses(courses = []) {
    this.courses = Array.isArray(courses) ? [...courses] : [];
    return this;
  }

  addWorkshop(workshop) {
    if (!this.workshops) this.workshops = [];
    this.workshops.push(workshop);
    return this;
  }

  setWorkshops(workshops = []) {
    this.workshops = Array.isArray(workshops) ? [...workshops] : [];
    return this;
    }

  setDayUse(dayUse) {
    if (!dayUse) {
      this.dayUse = null;
      return this;
    }

    // Se dayUse já for uma instância da classe DayUse
    if (dayUse instanceof DayUse) {
      this.dayUse = dayUse;
      return this;
    }

    // Caso contrário, criar uma nova instância assegurando que image seja passado
    this.dayUse = new DayUse(
      dayUse.title,
      dayUse.description,
      dayUse.image,  // Certifique-se de que este campo existe no objeto dayUse
      dayUse.prices
    );

    return this;
  }

  static fromEventData(categoryData) {
    if (!categoryData) {
      return null;
    }

    const category = new Category(
      categoryData.id,
      categoryData.title,
      categoryData.description,
      categoryData.image
    );

    category
      .setImage(categoryData.image)
      .setDescription(categoryData.description)
      .setMember(categoryData.member || [])
      .setPlaces(categoryData.places)
      .setReceipt(
        categoryData.receipt?.enabled,
        categoryData.receipt?.title
      );

    if (categoryData.journey) {
      category.setJourney(new Journey(
        categoryData.journey.title,
        categoryData.journey.description,
        categoryData.journey.image,
        categoryData.journey.prices
      ));
    }

    if (categoryData.courses) {
      // Se já for um array
      if (Array.isArray(categoryData.courses)) {
        category.setCourses(categoryData.courses.map(courseData =>
          new Course(
            courseData.title,
            courseData.description,
            courseData.image,
            courseData.prices
          )
        ));
      }
      // Se for um objeto único
      else if (typeof categoryData.courses === 'object') {
        category.setCourses([new Course(
          categoryData.courses.title,
          categoryData.courses.description,
          categoryData.courses.image,
          categoryData.courses.prices
        )]);
      }
    }

    if (Array.isArray(categoryData.workshops)) {
      const workshopObjects = categoryData.workshops.map(workshopData =>
        new Workshop(
          workshopData.title,
          workshopData.description,
          workshopData.image,
          workshopData.prices
        )
      );
      category.setWorkshops(workshopObjects);
    } else if (categoryData.workshop) {
      category.addWorkshop(new Workshop(
        categoryData.workshop.title,
        categoryData.workshop.description,
        categoryData.workshop.image,
        categoryData.workshop.prices
      ));
    }

    if (categoryData.dayUse) {
      category.setDayUse(new DayUse(
        categoryData.dayUse.title,
        categoryData.dayUse.description,
        categoryData.dayUse.image, // Explicitamente passando a imagem
        categoryData.dayUse.prices
      ));
    }

    return category;
  }

  static fromEventDataList(eventData) {
    if (!eventData?.registrationForm?.categories) {
      return [];
    }

    return eventData.registrationForm.categories
      .map(categoryData => Category.fromEventData(categoryData))
      .filter(category => category !== null);
  }

  hasAvailablePlaces() {
    return this.places > 0;
  }

  isMemberOnly() {
    return this.member?.length > 0;
  }

  hasReceipt() {
    return this.receipt?.enabled === true;
  }

  hasCourses() {
    return Array.isArray(this.courses) && this.courses.length > 0;
  }

  hasWorkshops() {
    return Array.isArray(this.workshops) && this.workshops.length > 0;
  }
}

export default Category;