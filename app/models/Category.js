import { Journey, Course, Workshop, DayUse } from './index';

class Category {
    constructor(id, title, description = null) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.image = null;
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
        this.dayUse = dayUse;
        return this;
    }

    static fromEventData(categoryData) {
        if (!categoryData) {
            return null;
        }

        const category = new Category(
            categoryData.id,
            categoryData.title,
            categoryData.description
        );

        category
            .setImage(categoryData.image)
          .setMember(categoryData.member || [])
            .setPlaces(categoryData.places)
            .setReceipt(
                categoryData.receipt?.enabled,
              categoryData.receipt?.title
            );

        if (categoryData.journey) {
            category.setJourney(new Journey(
                categoryData.journey.title,
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
              courseData.prices
            )
          ));
        }
        // Se for um objeto único
        else if (typeof categoryData.courses === 'object') {
          category.setCourses([new Course(
            categoryData.courses.title,
            categoryData.courses.description,
            categoryData.courses.prices
          )]);
        }
        }

      if (Array.isArray(categoryData.workshops)) {
        const workshopObjects = categoryData.workshops.map(workshopData =>
          new Workshop(
            workshopData.title,
            workshopData.description,
            workshopData.prices
          )
        );
        category.setWorkshops(workshopObjects);
      } else if (categoryData.workshop) {
        category.addWorkshop(new Workshop(
                categoryData.workshop.title,
                categoryData.workshop.description,
          categoryData.workshop.prices
            ));
        }

        if (categoryData.dayUse) {
            category.setDayUse(new DayUse(
                categoryData.dayUse.title,
                categoryData.dayUse.description,
                categoryData.dayUse.date,
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