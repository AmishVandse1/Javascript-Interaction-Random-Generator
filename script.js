var button = document.getElementById("Button");
var output = document.getElementById("output_text");
var input = document.getElementById("Input");

button.addEventListener("click", function(){
    var user_input_text = input.value;
    generate(user_input_text);
    restyle();
});

function generate(input_text){
    const breakfast_meal = [
        "Scrambled eggs with toast",
        "Pancakes with maple syrup",
        "Greek yogurt with granola and fruit",
        "Oatmeal with berries and honey",
        "Avocado toast with poached eggs"
    ];

    const lunch_meal = [
        "Grilled chicken Caesar salad",
        "Vegetable stir-fry with tofu",
        "Turkey sandwich with avocado and sprouts",
        "Caprese salad with fresh mozzarella and tomatoes",
        "Salad with roasted vegetables"
    ];

    const dinner_meal = [
        "Spaghetti Bolognese",
        "Grilled salmon with roasted vegetables",
        "Vegetable curry with rice",
        "Steak with mashed potatoes",
        "Baked chicken with steamed broccoli"
    ];

    var randomIndex;

    if (input_text.toLowerCase() === "breakfast"){
        randomIndex = breakfast_meal[Math.floor(Math.random() * breakfast_meal.length)];
    }
    else if (input_text.toLowerCase() === "lunch"){
        randomIndex = lunch_meal[Math.floor(Math.random() * lunch_meal.length)];
    }
    else if (input_text.toLowerCase() === "dinner"){
        randomIndex = dinner_meal[Math.floor(Math.random() * dinner_meal.length)];
    }
    else {
        output.innerText = "Invalid meal type!";
        return;
    }

    output.innerText = "The meal you should eat is: " + randomIndex;
}

function restyle() {
    var br = Math.random() * 255;
    var bg = Math.random() * 255;
    var bb = Math.random() * 255;
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    var background_color = "rgb(" +br+","+bg+","+bb+")";
    var new_color = "rgb(" +r+","+g+","+b+")";
    output.style.background = background_color;
    output.style.color = new_color;
    output.style.fontSize = "50px";
    output.style.fontFamily = "Arial, Helvetica, sans-serif"
    
}
