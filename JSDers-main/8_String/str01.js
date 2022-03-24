//string ifadeler ve metotları
var ders1 = "Bilişim"; //string bir ifade
var ders2 = "Teknolojileri";
//birden çok karakterden oluşurlar
//sınırları yoktur
console.log(typeof(ders1));
//string ifadelerin birleştirilmesi
console.log(ders1 + " " + ders2);
var sayi = "5";
console.log(Number(sayi));
//string for loop
for(let i =5;i<ders1.length;i++) {
    console.log(ders1[i]); //iterasyon
}
//string metotları
//string ifadenin uzunluğu
let uzunluk = ders1.length;
console.log(uzunluk);
//kesmek
let slc01 = ders1.slice(2,7);
console.log(slc01);
//string birleştirme
var ders = ders1 + " " + ders2;
console.log(ders);
var sonuc = ders.split(' ');
console.log(sonuc); //dizi 
console.log(sonuc.length);
console.log(sonuc[0]);
console.log(sonuc[1]);

//string ifadeyi belirli bir karaktere göre bölerek dizi elde etme
var film = "Esaretin*Bedeli*2";
console.log(film.split('*'));

//büyük küçük harf değişimi
var isim = "Eren ";
isim = isim.toLowerCase();
console.log(isim);
isim = isim.toUpperCase();
console.log(isim);

//string ifadenin başından veya sonunda boşlukları silme
var isim2 = "    süleyman           ";
isim2 = isim2.trim();
console.log(isim2);

//string ifade içindeki bir karakteri değiştirme
isim2 = isim2.replace("a","");
isim2 = isim2.replace("ü","");
isim2 = isim2.replace("e","");
console.log(isim2);

var alfabe = "aeıioöuü";
var char = alfabe.charAt(0);
var char = alfabe.charAt(alfabe.length - 1);
console.log(char);