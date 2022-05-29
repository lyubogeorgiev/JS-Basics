function substitute(input){
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

    let f1 = 0;
    let f2 = 0;
    let s1 = 0;
    let s2 = 0;

    let substituteCount = 0;

    for (let i = k; i <= 8; i++) {

        for (let j = 9; j >= l ; j--) {

            for (let o = m; o <= 8; o++) {

                for (let p = 9; p >= n ; p--) {
                    f1 = i;
                    f2 = j;
                    s1 = o;
                    s2 = p;

                    if ((f1 % 2 === 0 && f2 % 2 !== 0)
                            && (s1 % 2 === 0 && s2 % 2 !== 0)){
                        if (f1 !== s1 || f2 !== s2){
                            console.log(`${f1}${f2} - ${s1}${s2}`);
                            substituteCount++;
                        } else {
                            console.log("Cannot change the same player.");
                        }

                        if (substituteCount >= 6){
                            return;
                        }
                    }
                }
            }
        }
    }
}

substitute(["6",
    "7",
    "5",
    "6"]);