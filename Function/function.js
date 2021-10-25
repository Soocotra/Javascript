function jumlahvol2kubus(a,b) {
	var vol1 = a * a * a;
	var vol2 = b * b * b;
	var total= vol1 + vol2;
	return total;
}
a = prompt("Masukkan rusuk kubus 1: ");
b = prompt("Masukka rusuk kubus 2 : ");
alert(jumlahvol2kubus(a,b));