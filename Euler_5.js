/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */


(function () {
    var num=20,
        smallest=1,
        found = false;

    while (found==false){
        for (var j=1;j<=num;j++){
            if(smallest%j !== 0){
                break;
            }
            if (j===num){
                found=true;
                console.log(smallest);
            }
        }
        smallest++;
    }
})();