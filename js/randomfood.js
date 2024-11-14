// 定义每个类别对应的JSON文件路径
const foodFiles = {
    stapleFood: 'foods/staple_food.json',
    desserts: 'foods/desserts.json'
};

document.getElementById('submitBtn').addEventListener('click', () => {
    const foodSelect = document.getElementById('foodSelect');
    const selectedCategory = foodSelect.value;
    const result = document.getElementById('result');

    // 如果用户未选择类别，随机选择一个类别
    let chosenCategory;
    if (selectedCategory === "Select Food") {
        const categories = Object.keys(foodFiles);
        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    } else {
        chosenCategory = selectedCategory;
    }

    // 加载对应类别的JSON文件
    fetch(foodFiles[chosenCategory])
        .then(response => response.json())
        .then(foodOptions => {
            // 随机选择一个食物
            const randomFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];
            result.textContent = `${randomFood}`;
        })
        .catch(error => {
            console.log('加载 JSON 失败:', error);
            result.textContent = "加载食物选项失败，请重试。";
        });
});
