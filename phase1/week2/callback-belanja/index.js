'use strict';

const beli = require('./beli');
const uang = 100000;
const objItem = {
    item: 'sayur',
    harga: 10000,
    waktu: 500
};

beli(uang, objItem, function (kembalian) {
    beli(kembalian, objItem, function (kembalian) {
        beli(kembalian, objItem, function (kembalian) {
            beli(kembalian, objItem, function (kembalian) {
                beli(kembalian, objItem, function (kembalian) {
                    console.log(`sisa uang ${kembalian} cape deh !!`);
                });
            });
        });
    });
});