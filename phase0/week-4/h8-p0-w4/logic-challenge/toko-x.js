function countProfit(shoppers) {
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];

    // you can only write your code here!

    // check if shoppers is empty and then return empty array
    if (shoppers.length <= 0) {
        return [];
    }

    // set object variable for accomodating final result item
    const itemBuyed = [];

    // looping list barang
    for (var i = 0; i < listBarang.length; i++) {
        // define variable needed
        const buyedDetail = {};
        const buyer = [];
        let totalProfit = 0;

        // set item product title to buyedDetail object
        buyedDetail.product = listBarang[i][0];

        // looping shoppers
        for (var s = 0; s < shoppers.length; s++) {

            // check if shoopers product and amount demand is available in list barang
            if (
                shoppers[s].product === listBarang[i][0] &&
                shoppers[s].amount <= listBarang[i][2]
            ) {
                // if available push the shoopers name to buyer list,
                // decrementing the list barang amount by shoppers amount
                // then count the total profit.
                buyer.push(shoppers[s].name);
                listBarang[i][2] -= shoppers[s].amount;
                totalProfit += (listBarang[i][1] * shoppers[s].amount);
            }
        }

        // set buyedDetail object item
        buyedDetail.shoppers = buyer;
        buyedDetail.leftOver = listBarang[i][2];
        buyedDetail.totalProfit = totalProfit;

        // push buyedDetail object to itemBuyed list
        itemBuyed.push(buyedDetail);
    }

    // displaying the itemBuyed as final result
    return itemBuyed;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]