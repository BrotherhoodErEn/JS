//String Metotları
//karakter dizileri üzerinde düzenleme yapmamızı sağlar
var kelime = "Bilişim Teknolojileri Dersi";
//karakter dizileri, 0. indeksten başlar
//karakter dizilerinin uzunluğu
var uzunluk = kelime.length; // 7 

//kelime değişkeninin 0. indeksteki elemanını verir
let birinciHarf = kelime.charAt(0);
let ikinciHarf = kelime.charAt(1);
let sonHarf = kelime.charAt(uzunluk - 1);
console.log(birinciHarf);

//döngü içerisinde kullanılabilir
for(let i = 0;i<uzunluk;i++) 
    console.log(kelime[i]);
    //console.log(kelime.charAt(i));

//karakter dizisi içerisindeki elemanın indeks numarasını verir
let indeks = kelime.indexOf("i");
console.log(indeks);

//split: karakter dizisini belirli bir karaktere göre parçalamayı sağlar
var kelimeler = kelime.split(" ");
console.log(kelimeler[0]);
console.log(kelimeler[1]);
console.log(kelimeler[2]);

//replace: değiştirme
var harfler = "Abcde";
console.log(harfler);
harfler = harfler.replace("A", "a");
console.log(harfler);

//slice: kesme
var ders = "Bilişim";
var yeniDers = ders.slice(0,5);
console.log(yeniDers);

//tolowercase: küçük harf
//toupercase: büyük harf
var isim = "OlGun";
isim = isim.toUpperCase();
console.log(isim);
isim = isim.toLowerCase();
console.log(isim);
