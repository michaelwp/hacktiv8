'use strict';

const fs = require('fs');
// const options = fs.readFileSync('./cookies.txt', 'utf-8').split('\n');
const options = JSON.parse(fs.readFileSync('./ingredients.txt', 'utf-8'));

class Cookie {
    constructor(name, noSugar) {
        this.name = name;
        this.status = "mentah";
        this.ingredients = this.addIngredients();
        this.noSugar = noSugar;
    }

    addIngredients() {
        const ing = [];
        options[this.name].forEach((item, index) => {
            ing.push(new Ingredient(options[this.name][index]))
        });
        return ing;
    }
}

class PeanutButter extends Cookie {
    constructor() {
        super('peanut butter', 'Tuesday');
        this.peanut_count = 100;
    }
}

class ChocolateChip extends Cookie {
    constructor() {
        super('chocolate chip', 'Wednesday');
        this.choc_chip_count = 200;
    }
}

class ChocolateCheese extends Cookie {
    constructor() {
        super('chocolate cheese', 'Tuesday');
        this.choc_chees_count = 50;
    }
}

class ChocolateButter extends Cookie {
    constructor() {
        super('chocolate butter', 'Friday');
        this.choc_but_count = 150;
    }
}

class PeanutButterCrumbled extends PeanutButter {
    constructor() {
        super('peanut butter crumbled');
        this.choc_chip_crum = 75;
    }
}

class ChocolateChipCrumbled extends ChocolateChip {
    constructor() {
        super('chocolate chip crumbled');
        this.pea_but_crum = 125;
    }
}

class CookieFactory {
    static create(cookies) {
        const arrCookie = [];
        Object.keys(cookies).forEach((cookie) => {
            switch (cookie) {
                case "peanut butter":
                    arrCookie.push(new PeanutButter(cookie));
                    break;
                case "chocolate chip":
                    arrCookie.push(new ChocolateChip(cookie));
                    break;
                case "chocolate cheese":
                    arrCookie.push(new ChocolateCheese(cookie));
                    break;
                case "chocolate butter":
                    arrCookie.push(new ChocolateButter(cookie));
                    break;
                case "peanut butter crumbled":
                    arrCookie.push(new PeanutButterCrumbled(cookie));
                    break;
                case "chocolate chip crumbled":
                    arrCookie.push(new ChocolateChipCrumbled(cookie));
                    break;
            }
        });

        return arrCookie;
    }

    static cookieRecommendation(day, arrCookie) {
        const no_sugar = [];
        arrCookie.forEach((cookie) => {
            if (cookie.noSugar.toLowerCase() === day.toLowerCase()) {
                no_sugar.push(cookie);
            }
        });
        return no_sugar;
    }
}

class Ingredient {
    constructor(options) {
        this.name = options['name'];
        this.amount = options['amount'];
    }
}

let batch_of_cookies = CookieFactory.create(options);

batch_of_cookies.forEach((cookie) => {
    console.log(cookie);
});

let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batch_of_cookies);
console.log("sugar free cakes are :");
sugarFreeFoods.forEach((cookie) => {
    console.log(cookie);
});