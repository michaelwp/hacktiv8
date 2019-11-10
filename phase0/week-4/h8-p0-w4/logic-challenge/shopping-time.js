function shoppingTime(memberId, money) {
    // you can only write your code here!

    // set items object
    var items = {
        "Sepatu Stacattu": 1500000,
        "Baju Zoro": 500000,
        "Baju H&N": 250000,
        "Sweater Uniklooh": 175000,
        "Casing Handphone": 50000
    };

    // define variable needed
    var belanja = {};
    var listPurchased = [];

    // switch case of memberId
    switch (memberId) {
        case '':
            return "Mohon maaf, toko X hanya berlaku untuk member saja";
        case undefined:
            return "Mohon maaf, toko X hanya berlaku untuk member saja";
        case 0:
            return "Mohon maaf, toko X hanya berlaku untuk member saja";
        default:
            belanja.memberId = memberId;
    }

    // set money to belanja object
    belanja.money = money;

    // looping for checking if money enough to buy item and push it to listPurchased if yes
    // then decrement money by item price (value)
    for (var i in items) {
        if (items[i] <= money) {
            listPurchased.push(i);
            money -= items[i];
        }
    }

    // set listPurchased and changeMoney(remaining money) to belanja object
    belanja.listPurchased = listPurchased;
    belanja.changeMoney = money;

    // if listPurchased is empty then set the return message
    if (listPurchased.length <= 0) {
        return "Mohon maaf, uang tidak cukup";
    }

    // displaying the belanja object
    return belanja;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja