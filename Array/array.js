//Array Method
let arr = ['Muhammad','Riziq','Ramadhan'];
//Join

console.log('Method Join = ' + arr.join());
//Length
console.log('Mengetahui panjang array dengan Length pada Array');
for (let i = 0; i <=arr.length; i++){
    console.log(arr[i]);
}   console.log("\n")

//Push and Pop
console.log('Menghapus array terakhir Pop: ');
arr.pop();
console.log(arr.join());
console.log('\nMenambah Array dengan Push: ');
arr.push('Al Arafah');
console.log(arr.join());

//Unshift dan shift
console.log('\nMenambah dan mengurangi anggota pertama array: ');
arr.shift();
console.log(arr.join());
arr.unshift('Muhammad');
console.log(arr.join() + "\n");

//Splice
//Splice (IndexAwal, MauDiHapusBerapa, elemenBaru1, elemenbaru2, ....)
arr.splice( 1, 2, 'Raul', 'Pradana' );
console.log(arr.join()) + "\n";

//Slice
//Slicec(awal(akan terbawa),akhir(tidak terbawa))

let arr2 = arr.slice(1,3);
console.log(arr2.join());