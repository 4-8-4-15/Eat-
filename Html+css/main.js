document.addEventListener("DOMContentLoaded", function () {
    const newOrderBtn = document.getElementById("newOrderBtn");
    const orderForm = document.getElementById("orderForm");
    const addOrderBtn = document.getElementById("addOrder");
    const ordersList = document.getElementById("ordersList");
    const balanceElem = document.getElementById("balance");
    
    newOrderBtn.addEventListener("click", function () {
        orderForm.style.display = "block";
    });
    
    addOrderBtn.addEventListener("click", function () {
        const address = document.getElementById("address").value;
        const item1Count = parseInt(document.getElementById("item1").value);
        const item2Count = parseInt(document.getElementById("item2").value);
        
        if (!address.trim()) {
            alert("Введите адрес доставки");
            return;
        }
        
        const totalPrice = (item1Count * 253 + item2Count * 142) ;
        const bonus = Math.floor(totalPrice * 0.1);
        
        const orderDiv = document.createElement("div");
        orderDiv.classList.add("order");
        orderDiv.innerHTML = `Заказ на <strong>${address}</strong> - ${totalPrice} ₽ (+${bonus} Б)`;
        ordersList.appendChild(orderDiv);
        
        balanceElem.textContent = parseInt(balanceElem.textContent) + bonus;
        
        orderForm.style.display = "none";
    });
});
