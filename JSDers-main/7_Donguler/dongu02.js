//for döngüsü
//Döngü kullanmadaki amaç;
//aynı görevi tekrarlamak
//belirli bir listeye eleman eklemek
//listeden eleman okumak

// for(başlangıç;karşılaştırma;değişim) {

// }

for(let i = 5;i< 10;i+=3) {
    console.log(i);
}

//5, 8
//5, 7, 9
//5, 6, 7, 8, 9

dizi = ["A","B","C"] //indeks numarası;
//sıfırdan başlar
//dizi[0] -> "A"
//dizi[1] -> "B"
//dizi[2] -> "C"
for(let i = 0;i< 3;i++) {
    console.log(dizi[i]);
}

var i = 5;
var j = i++;
var z = ++i;
console.log(i);
console.log(j);
console.log(z);

i++;
i+= 2;
i+=3;

