function intToRoman(num: number): string {
    const romans: Record<string, number> = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    };
    let result = '';
    for (let roman in romans) {
        let count = num / romans[roman];
        if(count>0){
            result+= roman.repeat(count);
            num = num % romans[roman];
        }
    }
    return result;
};