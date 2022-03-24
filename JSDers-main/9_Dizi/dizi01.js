//diziler birden çok değişkene ihtiyaç duyulduğu zamanlarda kullanılır
//örneğin, bir sınıftaki öğrenci notları
//
var ogrenciNot = 55;
//Birden çok elemandan oluşan bir dizi
var notlar = [55, 60, 70, 100]

//Dizi elemanlarına ulaşmak
//dizi elemanlarına indeks numaraları ile ulaşılır
//indeks numaraları 0'dan başlar
//örneğin 
//notlar[0] -> 55
//notlar[2] -> 70
//notlar[7] -> hata
//notlar[3] -> 100
console.log("0. İndeksteki elemanın değeri: " + notlar[0]);
console.log("**************");
//dizinin uzunluğu
let uzunluk = notlar.length;
console.log("notlar listesinin uzunluğu: " + uzunluk);

//listenin son elemanını siler
notlar.pop()
//listedeki boş elemanı güncelleme
notlar[3] = 80;

for(let i = 0; i< uzunluk;i++) {
    console.log(notlar[i]);
}

//
console.log("****************");
//yeni eleman ekleme
notlar.push(100)
notlar.push(95)
notlar.push(80)
notlar.push(75)

for(let i = 0; i< notlar.length;i++) {
    console.log(notlar[i]);
}

//belirli indekse sahip elemana ulaşma
console.log("****************");
let indeks = notlar.indexOf(55)
console.log(indeks);
//ayırıcı ekleyerek string'e çevirme
var x = notlar.join("-")
console.log(typeof(x));
console.log(x);
//stringden diziye çevirme
var notlar2 = x.split('-');
//iki diziyi birleştirme
var a = [2,4,6,8]
var b = [1,3,5,7]
var ab = a.concat(b)
console.log(ab);
//Sıralama
ab.sort();
console.log(ab);



