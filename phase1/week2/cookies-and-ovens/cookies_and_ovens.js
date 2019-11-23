// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
'use strict';

const KueCokelat = require('./kueCokelat');
const KueKacang = require('./kueKacang');
const KueKeju = require('./kueKeju');

class Oven {
    static bake(kueObject, waktuPanggang) {
        let i = 0;
        while (i <= waktuPanggang) {
            i += 5;
            kueObject.addWaktuPanggang(i);
            console.log(`Kue ${kueObject.name}, menit ke ${i} : ${kueObject.status}`);
        }
    }
}

Oven.bake(new KueCokelat(), 30);
Oven.bake(new KueKacang(), 25);
Oven.bake(new KueKeju(), 27);


