document.addEventListener("DOMContentLoaded", async () => {
    const drinkList = document.getElementById("drinkList");

    try {
        // ✅ Fetch drink data from backend
        const response = await fetch("http://localhost:4000/drinks");
        const drinks = await response.json();

        // ✅ Dynamically add drinks to the page
        drinks.forEach(drink => {
            let listItem = document.createElement("li");
            listItem.textContent = `${drink.name} - ${drink.price}`;
            drinkList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching drinks:", error);
        drinkList.innerHTML = "<p>Failed to load drinks.</p>";
    }
});
