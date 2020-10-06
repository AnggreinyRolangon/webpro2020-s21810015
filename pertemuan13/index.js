//let animal = [ "dog", "rabbit", "bee"];

//let animal1 = animal[0];
//let animal2 = animal[1];
//let animal3 = animal[2];

//let animal = [ "dog", "rabbit", "bee"];

//Destrukturasi Objek
//let [animal1, animal2, animal3] = animal;
//console.log(animal1);
//console.log(animal2);
//console.log(animal3);

//let [nama, ,alamat, ,pemdidikan] = ["Angge", "K", "Ratahan", "pendidikan", "Kuliah"];
//let [nama, umur, alamat, pendidikan] = ["Angge", "20", "Ratahan", "Kuliah"];
//let a = 20;
//let b = 21;

//let temp = a;
//a = b;
//b = temp;
//console.log(nama);
//console.log(umur);
//console.log(alamat);
//console.log(pendidikan);

//let people ={
  //  nama: "Angge",
   // umur: 20,
   // MasihBerkuliah: true,
// };

//let nama = people.nama;
//let umur = people.umur;
//let MasihBerkuliah = people.MasihBerkuliah

//Destrukturasi Objek
//let {nama, umur, MasihBerkuliah} = people;

//console.log(nama);
//console.log(umur);
//console.log(MasihBerkuliah);

let karyawan ={
    umur : "25",
    nama: ["Queenly", "Shanty", "Revan"],
    bonus: {
        penjualan: "tingkat 1",
        pendapatan: "tingkat 2",
    }
};

let {
    bonus: {penjualan}
} = karyawan;
console.log(penjualan);
