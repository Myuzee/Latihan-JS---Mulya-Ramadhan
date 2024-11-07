// JavaScript Electronics Store Management System

const ownerName = "David";
document.getElementById("owner").innerHTML = ownerName;

// Basic Variable Examples
var productName = "Samsung Galaxy S24";
var price = 12000000;
var fullInfo = productName + " - Rp." + price;
document.getElementById("productInfo").innerHTML = "Informasi Produk: " + fullInfo;

// Constants and Basic Math
const tax = 0.11; // PPN 11%
const basePrice = 12000000;
const totalPrice = basePrice + (basePrice * tax);
document.getElementById("priceCalc").innerHTML = "Harga setelah pajak: Rp." + totalPrice;

// String Concatenation with let
let brand = "Samsung ";
let series = "Galaxy";
let fullProduct = brand + series;
document.getElementById("brandName").innerHTML = "Merek: " + fullProduct;

// Shopping Cart Calculation
let phone1Price = 12000000;
let phone2Price = 8000000;
let laptop1Price = 15000000;

let smartphone = phone1Price;
let tablet = phone2Price;
let laptop = laptop1Price;
const totalBelanja = phone1Price + phone2Price + laptop1Price;

document.getElementById("smartphone").innerHTML = "Harga Smartphone: Rp. " + smartphone;
document.getElementById("tablet").innerHTML = "Harga Tablet: Rp. " + tablet;
document.getElementById("laptop").innerHTML = "Harga Laptop: Rp. " + laptop;
document.getElementById("totalBelanja").innerHTML = "Total Belanja: Rp. " + totalBelanja;

// Variable Declaration and Modification Examples
var stock = 50;
document.write("<p>Stok awal: " + stock + " unit</p>");

let available = 35;
document.write("<p>Produk tersedia: " + available + " unit</p>");

const maxCapacity = 100;
document.write("<p>Kapasitas maksimal: " + maxCapacity + " unit</p>");

stock = 45;
available = 30;

document.write("<p>Setelah update:</p>");
document.write("<p>Stok terbaru: " + stock + " unit</p>");
document.write("<p>Ketersediaan terbaru: " + available + " unit</p>");
document.write("<p>Kapasitas maksimal tetap: " + maxCapacity + " unit</p>");

// Alert Info
const storeInfo = "Selamat datang di Toko Elektronik " + ownerName + "\nStok tersedia: " + available + " unit";
alert(storeInfo);

// Product Category Function
function categorizeProduct(category, price) {
    if (!category || !price) {
        console.log("Mohon masukkan kategori dan harga produk.");
        return;
    }
    
    const categoryUpper = category.toUpperCase();
    const categories = {
        SMARTPHONE: `Kategori Smartphone: Rp.${price} (Diskon 5%)`,
        TABLET: `Kategori Tablet: Rp.${price} (Diskon 10%)`,
        LAPTOP: `Kategori Laptop: Rp.${price} (Diskon 15%)`,
        AKSESORIS: `Kategori Aksesoris: Rp.${price} (Diskon 20%)`,
        SMARTWATCH: `Kategori Smartwatch: Rp.${price} (Diskon 8%)`
    };

    if (categories[categoryUpper]) {
        console.log(categories[categoryUpper]);
    } else {
        console.log("Kategori tidak valid. Pilih: SMARTPHONE, TABLET, LAPTOP, AKSESORIS, SMARTWATCH");
    }
}

categorizeProduct('Smartphone', 12000000);

// Loop Example - Daily Sales Report
for (let i = 1; i <= 7; i++) {
    console.log(`Laporan Penjualan Hari ${i}`);
}

// Countdown to Store Closing
let minutesLeft = 30;
const closingTime = setInterval(() => {
    console.log(`Toko akan tutup dalam ${minutesLeft} menit`);
    minutesLeft--;
    if (minutesLeft < 0) {
        clearInterval(closingTime);
        console.log('Toko sudah tutup!');
    }
}, 60000);

// Array of Best Sellers
const bestSellers = ["iPhone 15 Pro", "Samsung S24 Ultra", "MacBook Pro", "iPad Air", "Galaxy Watch"];

for (let i = 0; i < bestSellers.length; i++) {
    console.log(`Best Seller #${i + 1}: ${bestSellers[i]}`);
}

// Product Price Calculator Function
function calculateProductPrice(basePrice, discount) {
    return basePrice - (basePrice * discount);
}

console.log(calculateProductPrice(12000000, 0.05));  // 5% discount
console.log(calculateProductPrice(15000000, 0.15)); // 15% discount
console.log(calculateProductPrice(8000000, 0.1));  // 10% discount

// Scope Example
let productSection = "Smartphone";
function changeSection() {
    let productSection = "Laptop";
    console.log(productSection);
}
changeSection();
console.log(productSection);

// Arrow Function Example
const calculateTotal = (price, quantity) => price * quantity;
console.log(calculateTotal(12000000, 2)); // Beli 2 smartphone
console.log(calculateTotal(8000000, 3));  // Beli 3 tablet