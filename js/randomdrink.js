const drinkFiles = {
    drinks: 'drinks/drink.json'
};

document.getElementById('submitBtn').addEventListener('click', () => {
    const drinkSelect = document.getElementById('drinkSelect');
    const selectedDrinkCategory = drinkSelect.value;
    const result_drink = document.getElementById('result_drink');

    if (selectedDrinkCategory === "nodrink") {
        result_drink.textContent = "";
        return; 
    }
    else if (selectedDrinkCategory === "Select Drink") {
        result_drink.textContent = "";
        return; 
    }
    else if (selectedDrinkCategory === "drink") {
    // 选择了饮料时，加载对应的 JSON 数据
    fetch(drinkFiles.drinks)
        .then(response => response.json())
        .then(drinkOption => {
            const randomDrink = drinkOption[Math.floor(Math.random() * drinkOption.length)];
            result_drink.textContent = `${randomDrink}`;
        })
        .catch(error => {
            console.log('加载饮料选项失败:', error);
            result_drink.textContent = "加载饮料选项失败，请重试。";
        });
    }
});

