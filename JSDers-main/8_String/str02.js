//girilen bir metindeki her bir kelimenin ortalama karakter sayısını
//bulunuz

var hitabe = "Ey! Türk gençliği! Birinci vazifen Türk istiklalini, Türk cumhuriyetini, ilelebet muhafaza ve müdafaa etmektir.";
hitabe = hitabe.replace("!", "");
hitabe = hitabe.replace(",", "");
hitabe = hitabe.replace(".", "");
var hitabeKelime = hitabe.split(" ");
console.log(hitabeKelime.length);
console.log(hitabeKelime[0]);
var toplam = 0;
for(let k = 0; k< hitabeKelime.length;k++ ) {
    toplam += hitabeKelime[k].length;
}
var ortalama = toplam / hitabeKelime.length;
console.log(ortalama);


//Kullanıcının girdiği bir karakterler