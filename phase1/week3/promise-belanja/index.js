const beli = require('./beli');
const barang = [
    {
        item: 'sayur',
        harga: 2000,
        waktu: 500
    },
    {
        item: 'buah',
        harga: 3000,
        waktu: 500
    },
    {
        item: 'bawang',
        harga: 2500,
        waktu: 500
    },
    {
        item: 'nangka',
        harga: 5000,
        waktu: 500
    },
    {
        item: 'kol',
        harga: 1500,
        waktu: 500
    },
];

const modal = 10000;

beli(modal, barang[0]).then(kembalian => {
    return beli(kembalian, barang[1])
}).then(kembalian => {
    return beli(kembalian, barang[2])
}).then(kembalian => {
    return beli(kembalian, barang[3])
}).then(kembalian => {
    return beli(kembalian, barang[4])
}).catch(err => {
    console.log(err);
});
