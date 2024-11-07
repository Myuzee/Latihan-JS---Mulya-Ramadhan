// Variabel untuk menu makanan
var makanan = "Nasi Goreng, Mie Goreng, Sate Ayam";
let minuman = "Es Teh, Es Jeruk, Es Kopi";
const dessert = "Pudding, Es Krim, Fruit Parfait";

// Menampilkan menu
document.getElementById("demoMakanan").innerHTML = "Menu Makanan: " + makanan;
document.getElementById("demoMinuman").innerHTML = "Menu Minuman: " + minuman;
document.getElementById("demoDessert").innerHTML = "Menu Dessert: " + dessert;

// Harga menu spesial
let hargaMainCourse = 75000;
let hargaSideDish = 25000;
let totalHarga = hargaMainCourse + hargaSideDish;

// Menampilkan harga
document.getElementById("mainCourse").innerHTML = "Main Course: Rp " + hargaMainCourse;
document.getElementById("sideDish").innerHTML = "Side Dish: Rp " + hargaSideDish;
document.getElementById("total").innerHTML = "Total: Rp " + totalHarga;

// Nama restoran
document.getElementById("restoName").innerHTML = "Selera Nusantara";