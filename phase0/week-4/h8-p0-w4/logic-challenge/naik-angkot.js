function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    // set arr result
    const result = [];

    // set price
    const harga = 2000;

    // mapping arrPenumpang
    arrPenumpang.forEach(penumpangGroup => {
        // set detailObj object
        const detailObj = {};
        // looping penumpangGroup
        for (var i = 0; i < penumpangGroup.length; i++) {
            // set detailObj
            detailObj.penumpang = penumpangGroup[0];
            detailObj.naikDari = penumpangGroup[1];
            detailObj.tujuan = penumpangGroup[2];
            //set paid price (price multiply by the number of the difference
            // of index of destination subtract by the index of origin )
            detailObj.bayar = harga * (rute.indexOf(detailObj.tujuan) - rute.indexOf(detailObj.naikDari));
        }
        // push detailObj to result
        result.push(detailObj);
    });

    // displaying result
    return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]