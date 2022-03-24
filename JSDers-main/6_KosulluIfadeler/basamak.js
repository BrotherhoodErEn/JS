var sayi = 235;
//Math.random() //0.152652215 * 1000 - Math.round()
// console.log(sayi);
birler_basamagi = sayi % 10;//5
// console.log(birler_basamagi);
sayi = (sayi - birler_basamagi) / 10;//23
// console.log(sayi);
onlar_basamagi = sayi % 10;//3
// console.log(onlar_basamagi);
yuzler_basamagi = (sayi - onlar_basamagi) / 10;//2
// console.log(yuzler_basamagi);
ters_sayi = birler_basamagi * 100 + onlar_basamagi * 10 + yuzler_basamagi;
// console.log(ters_sayi);//532

if(sayi % 2 == 0) {
    //bu işlem
}
else {
    //
}










var s = "345";
var r = "";
for(let i = s.length - 1;i>=0;i--) {
    r+=s[i];
}
console.log(r);
