//Destructing
//-------------

// Memecah item atau property pada array atau object ke dalam variabel yang berbeda 
//1. Array 

//const colors = ["merah", "kuning", "hijau"];

//let satu = colors[0];
//let dua = colors[1];
//let tiga = colors[2];

//console.log(satu, dua, tiga);
 
//let[satu, dua, tiga, empat ="biru"] = colors;
//console.log(satu, dua, tida, empat);

//2. Object 

//const user = {
//    name: "John",
//    gender: "male",
//    age: 33,
//};
//let {name, gander, age} = user;

//console.log(name,gander,age);

//let {name, gander, age, born= "Manado"} = user;

//console {name,age}= user;
//console.log(name;)

//let {name; nama, age;umur} = user;
//console.log(nama,umur);

//const display = ({name, age}) => {
//    console.log('Nama saya adalag ${name}. Umuer saya adalah ${age}');
//};

//3. Array Object 

//consr users = [

//    { id: 1, name: "John"},
//    { id: 2, name: "Jane"},
//    { id: 3, name: "Bob"},
//];

//let [user1,user2,user3] = users;
//console.log(user1,user2,user3);
//let [
//    [{id: idUser1, name: nameUser1}],
//    [{id: idUser2, name: nameUser2}],
//     [{id: idUser3, name: nameUser3}],
// ] = users;
//consoe.log(idUser1, nameUser1);

//4. Kombinasi dengan Rest Operator

// const colors = ["merah", "kuning", "hijau", "biru"];

// let[satu, ...lainnya] = colors;

// console.log(satu);
// console.log(lainnya);