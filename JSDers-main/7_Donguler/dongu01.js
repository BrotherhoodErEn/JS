// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// // for(başlangıç;koşul;değişim) {

// // }

// for(let i = 2; i <= 10; i+=2) {
//     console.log(i);
// }
// //1 - 10 arası rakamları toplamak istiyoruz
// var toplam = 0;
// var ortalama = 0;
// for(let i = 1; i <= 10; i++) {
//     toplam += i;
// }
// console.log(toplam);
// ortalama = toplam / 10;
// console.log(ortalama)

// //dizi elemanları
// isimler = ["Olgun","Eray","Eren","Engin","Tuğba","Melek","Süleyman","Berat","Hale","Sevde","Büşra","Mehmet"]

// for(let j = 0; j < 12; j++) {
//     console.log(isimler[j]);
// }


// for(let a = 12; a >= 5; a--) {
//     console.log(a);
// }




// for (let k = 2,j = 3; k < 5 || j < 12; k++, j+=3) {
//     console.log(k, j);
// }

//10 - 20 [10,20] küpünden kendisinin farkını ekranda yazdır
for(let i = 10; i <= 20 ; i++) {
    console.log(Math.pow(i, 3) - i);
}

//15 tane rastgele sayının toplamı
var toplam = 0;
for (let k = 1;k<=15;k++) {
    let sayi  = Math.round(Math.random() * 10);
    console.log(k + ". sayı ->" + sayi);
    toplam += sayi;
}

console.log("+_______");
console.log(toplam);

//3-)1 - 1000 arasındaki palindromik sayıları ekrana yazdınırız
//22 33 44 55 66 77 88 99 101 202 1001