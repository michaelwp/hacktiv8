function generateDNA(num) {
    // your code here
    if (num < 2) {
        console.log('number must greater than 1');
        return
    }

    let limit = (num * 2) - 1;
    const res = [];

    for (let i = 0; i < num - 1; i++) {
        const subAtas = [];
        for (let j = 0; j < limit; j++) {
            if ((i === j) || ((i + j) === (limit - 1))) {
                subAtas.push("*");
            } else {
                subAtas.push(" ");
            }
        }
        res.push(subAtas);
    }

    for (let i = 0; i < num; i++) {
        const subTengah = [];
        for (let j = 0; j < limit; j++) {
            if (j === num-1) {
                subTengah.push("*");
            } else {
                subTengah.push(" ");
            }
        }
        res.push(subTengah);
    }

    for (let i = 0; i < num - 1; i++) {
        const subBawah = [];
        for (let j = 0; j < limit; j++) {
            if ((j+i) === (num - 2) || (j-i) === num) {
                subBawah.push("*");
            } else {
                subBawah.push(" ");
            }
        }
        res.push(subBawah);
    }

    j = 0;
    while (j < 2){
        for (let i = 0; i < res.length; i++) {
            console.log(res[i].join(" "));
        }
        j++;
    }

}

generateDNA(3);
/*
*   *
 * *
  *
  *
  *
 * *
*   *
*   *
 * *
  *
  *
  *
 * *
*   *
*/

generateDNA(5);
/*
*       *
 *     *
  *   *
   * *
    *
    *
    *
    *
    *
   * *
  *   *
 *     *
*       *
*       *
 *     *
  *   *
   * *
    *
    *
    *
    *
    *
   * *
  *   *
 *     *
*       *
*/
generateDNA(1);