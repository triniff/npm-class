var suma = 0;
for (var i = 2; i < process.argv.length; i++) {
	suma += (+process.argv[i]);
}
console.log(suma);