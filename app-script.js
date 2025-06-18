<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
    const drinks = [
        { name: "Whiskey", price: "₹500" },
        { name: "Beer", price: "₹200" },
        { name: "Vodka", price: "₹600" }
    ];

    const drinkList = document.getElementById("drinkList");

    drinks.forEach(drink => {
        let listItem = document.createElement("li");
        listItem.textContent = `${drink.name} - ${drink.price}`;
        drinkList.appendChild(listItem);
    });
});
=======
document.addEventListener("DOMContentLoaded", () => {
    const drinks = [
        { name: "Whiskey", price: "₹500" },
        { name: "Beer", price: "₹200" },
        { name: "Vodka", price: "₹600" }
    ];

    const drinkList = document.getElementById("drinkList");

    drinks.forEach(drink => {
        let listItem = document.createElement("li");
        listItem.textContent = `${drink.name} - ${drink.price}`;
        drinkList.appendChild(listItem);
    });
});
>>>>>>> 2ed378d472804bd19fbe1ac8bcabb8667a8ceb10
