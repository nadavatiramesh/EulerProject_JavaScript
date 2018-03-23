var tot=[0,1];
var num=0;
var i=0;

while (tot[0]+tot[1]<4000000){
    i=tot[0]+tot[1];
    tot[0]=tot[1];
    tot[1]=i

    if (i%2 === 0){
        num += i;
    }
}

console.log(num);