// Changing Memory cost 
const button1 = document.getElementById("button-8GB");
button1.addEventListener("click", function() {
    memoryCost.innerText = "0";
    totalPrice();
});

const button2 = document.getElementById("button-16GB");
button2.addEventListener("click", function() {
    memoryCost.innerText = "180";
    totalPrice();
});

const memoryCost = document.getElementById("memoryCost");



// Changing Storage Cost
const button3 = document.getElementById("button-256GB");
button3.addEventListener("click", function() {
    storageCost.innerText = "0";
    totalPrice();
});

const button4 = document.getElementById("button-512GB");
button4.addEventListener("click", function() {
    storageCost.innerText = "100";
    totalPrice();
});

const button5 = document.getElementById("button-1TB");
button5.addEventListener("click", function() {
    storageCost.innerText = "180";
    totalPrice();
});

const storageCost = document.getElementById("storageCost");


// Changing Delivery Cost
const button6 = document.getElementById("deliveryFree");
button6.addEventListener("click", function() {
    deliveryCost.innerText = "0";
    totalPrice();
});

const button7 = document.getElementById("deliveryCharge");
button7.addEventListener("click", function() {
    deliveryCost.innerText = "20";
    totalPrice();
});

const deliveryCost = document.getElementById("deliveryCost");



// Total Price
function totalPrice() {
    const bestPrice1 = document.getElementById('bestPrice');
    const price = bestPrice1.innerText;
    const bestprice = Number(price);
    const memoryPrice = Number(memoryCost.innerText);
    const storagePrice = Number(storageCost.innerText);
    const deliveryPrice = Number(deliveryCost.innerText);
    const Total = bestprice + memoryPrice + storagePrice + deliveryPrice;
    total.innerText = Total;
}

const total = document.getElementById("total");