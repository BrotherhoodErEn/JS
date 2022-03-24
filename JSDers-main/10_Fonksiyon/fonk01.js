var sayi1 = 5;
var sayi2 = 10;

//fonksiyonun tanımlanması
//parametresiz dönüş tipi olan
function Toplama() {
    return sayi1 + sayi2;//
}
//var toplam = Toplama();
//fonksiyonun çağırılması
//Toplama()
//console.log(sayi1 + sayi2);
console.log(Toplama());
//dönüş tipi olmayan parametresiz fonksiyon: void
function Yazdir() {
    console.log("Sayı1: " + sayi1);
}
//dönüş tipi olmayan parametreli fonksiyon: void
Yazdir();
//parametreli
function topla(s1, s2) {
    return s1 * s2;
}
console.log(topla(3,5));