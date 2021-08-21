// Changing Memory cost 
const button1 = document.getElementById('button-8GB');
button1.addEventListener('click', function() {
    memoryCost.innerText = '0';
    totalPrice();
});

const button2 = document.getElementById('button-16GB');
button2.addEventListener('click', function() {
    memoryCost.innerText = '180';
    totalPrice();
});

const memoryCost = document.getElementById('memory_cost');



// Changing Storage Cost
const button3 = document.getElementById('button-256GB');
button3.addEventListener('click', function() {
    storageCost.innerText = '0';
    totalPrice();

});

const button4 = document.getElementById('button-512GB');
button4.addEventListener('click', function() {
    storageCost.innerText = '100';
    totalPrice();
});

const button5 = document.getElementById('button-1TB');
button5.addEventListener('click', function() {
    storageCost.innerText = '180';
    totalPrice();
});

const storageCost = document.getElementById('storage_cost');


// Changing Delivery Cost
const button6 = document.getElementById('delivery_free');
button6.addEventListener('click', function() {
    deliveryCost.innerText = '0';
    totalPrice();

});

const button7 = document.getElementById('delivery_charge');
button7.addEventListener('click', function() {
    deliveryCost.innerText = '20';
    totalPrice();

});

const deliveryCost = document.getElementById('delivery_cost');



// Total Price
function totalPrice() {
    const bestPrice1 = document.getElementById('best_price');
    const price = bestPrice1.innerText;
    const bestprice = Number(price);
    const memoryPrice = Number(memoryCost.innerText);
    const storagePrice = Number(storageCost.innerText);
    const deliveryPrice = Number(deliveryCost.innerText);
    const TotalPrice = bestprice + memoryPrice + storagePrice + deliveryPrice;
    total.innerText = TotalPrice;
    totalAmmount.innerText = TotalPrice;

}

const total = document.getElementById('total_price');
const totalAmmount = document.getElementById('totalrate');



// promocode use 
document.getElementById('promo_apply').addEventListener('click', function() {

    const promoApply = document.getElementById('promo_apply');
    const promoCode = document.getElementById('promo_code');
    const applyPromo = promoCode.value;

    const finalTotal = document.getElementById('totalrate');
    const finalTotalText = finalTotal.innerText;

    if (applyPromo == 'stevekaku') {
        newTotal = finalTotalText - (finalTotalText * 20) / 100;
        promoApply.disabled = true;
    }
    finalTotal.innerText = newTotal;
    promoCode.value = '';
})