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
        this.course = null;
        this.workshop = null;
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

    setCourse(course) {
        this.course = course;
        return this;
    }

    setWorkshop(workshop) {
        this.workshop = workshop;
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
            .setMember(categoryData.member)
            .setPlaces(categoryData.places)
            .setReceipt(
                categoryData.receipt?.enabled,
                categoryData.receipt?.title,
                categoryData.receipt?.description
            );

        if (categoryData.journey) {
            category.setJourney(new Journey(
                categoryData.journey.title,
                categoryData.journey.image,
                categoryData.journey.prices
            ));
        }

        if (categoryData.course) {
            category.setCourse(new Course(
                categoryData.course.title,
                categoryData.course.description,
                categoryData.course.price
            ));
        }

        if (categoryData.workshop) {
            category.setWorkshop(new Workshop(
                categoryData.workshop.title,
                categoryData.workshop.description,
                categoryData.workshop.price
            ));
        }

        if (categoryData.dayUse) {
            category.setDayUse(new DayUse(
                categoryData.dayUse.title,
                categoryData.dayUse.description,
                categoryData.dayUse.date,
                categoryData.dayUse.price
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
        return !!this.member;
    }

    hasReceipt() {
        return this.receipt.enabled;
    }
}

export default Category;