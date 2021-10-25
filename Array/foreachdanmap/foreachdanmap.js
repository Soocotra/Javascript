//forEach
let nama = ['Muhammad', 'Riziq', 'Ramadhan'];

nama.forEach(function(e, i){
    console.log('Mahasiswa ke-' + i + ' adalah: ' + e);
})

//MAP

let angka = [1,2,3,4,5,6,7,8,9];

let angka2 = angka.map(function(e){
    return e*2 ;
})
console.log(angka2);