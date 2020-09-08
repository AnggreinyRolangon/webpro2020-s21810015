/*
Object
*/

const mahasiswa1 = ["john", "Joe", 31, true];

conta mhs1 = {
    namaDepan: 'john',
    namaBelakang: 'Joe',
    umur: 31,
    sudahlulus: true,
    alamat : {
        jalan: "jln. siswa",
        kecamatan: "ratahan",
        kabupaten: "mitra",
    },
    IPsemester: [3.05, 3.25, 3.0, 3,4];
    hitungIPK: funtction (){
        let total = 0;
        this.IPsemester.forEach(function (el){
        total = total + el;
    });
    this.IPKkumulatif = total / 4;
},
};
delete mhs1.namaBlekang;
console.log(mhs1);

//2. Kata Kunci new
// const mhs2 = new Object();
// mhs2.namaDepan = "john";
// mhs2.nama Belakang = "Smith";

// mengakses properti objek
//1. dot notation
//console.log(mhs1.umur);
// bracket notation
//console.log(mhs1["namaBelakang"]);

// console.log(mhs1.alamat.jalan);
// console.log(mhs1.IPsemester[2]);
// mhs1.hitungIPK();
//console.log(mhs1);

