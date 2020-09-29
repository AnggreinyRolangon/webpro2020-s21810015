/*
    Arrow function
*/

// function ucapkanSalam(){
//    return "Selamat Pagi";
//};

// fungsi dengan parameter
// const operasiPenjumlahan = (bilangan1, bilangan2) => {
//    const hasil =  bilangan1 + bilangan2;
//    return hasil;
//  };
  
//  console.log(operasiPenjumlahan(3, 4)); // Output: 7
  
  // fungsi yang tidak memiliki parameter
//  const namaJenisBurung = () => {
//    const burung = ["beo", "merpati", "pipit"];
//    return burung[Math.floor(Math.random()*(burung.length))];
//  }
  
//  console.log(namaJenisBurung()); // Output: beo (hasil random)


// Implicit return value
//function panggilan(nama) {
//    return `Hay ${nama}`;
// }
 
// console.log(panggilan('anggreiny)); // Output: Hay anggreiny

 //cara singkat
 const panggilan = (nama) => `Hay ${nama}`;

console.log(panggilan('anggreiny')); // Output: Hay anggreiny