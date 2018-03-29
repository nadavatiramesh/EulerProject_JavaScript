/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers. */

palNums=[];

function palRead(number){
    for (var i=10; i<99; i++){
        i++;
        for (var j=10; j<99; j++){
            j++;
            if (number == (i * j)){
                palNums.push(i);
            }
        }
    }
    return palNums;
}

console.log(palRead(9009));