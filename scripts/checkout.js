var arrHead = [
    {name: "Wig", price: 50, img: "images/wig.jfif"},
    {name: "Cap", price: 250, img: "images/cap.jfif"},
    {name: "Hair Pin", price: 20, img: "images/hairpin.jfif"},
    {name: "Headband", price: 30, img: "images/headband.jfif"}
];

var arrBody = [
    {name: "T-shirt", price: 400},
    {name: "Tank Top", price: 100},
    {name: "Hoodie", price: 800}
];

var arrFoot = [
    {name: "Shoes", price: 1000},
    {name: "Sandal", price: 150},
];

var arrCategory = [arrHead, arrBody, arrFoot];

var action;
var categ;

var categ1 = document.querySelector(".categ1");
var categ2 = document.querySelector(".categ2");
var categ3 = document.querySelector(".categ3");

categ1.addEventListener("click", () => {
    action = 0;
    categ = arrCategory[action];
    displayItem();
    addAtOnce();
});
categ2.addEventListener("click", () => {
    action = 1;
    categ = arrCategory[action];
    displayItem();
    addAtOnce();
});
categ3.addEventListener("click", () => {
    action = 2;
    categ = arrCategory[action];
    displayItem();
    addAtOnce();
});

var itemSelection = document.querySelector(".itemSelectionSpanJs");

function displayItem(){
    itemSelection.innerHTML = ``;

    for(let i = 0; i < categ.length; i++){
        var div = document.createElement("div");
        div.id = `item${i}`;
        itemSelection.append(div);

        var itemName = categ[i].name;
        var itemPrice = categ[i].price;
        var itemImg = categ[i].img;
        
        var img = document.createElement("img");
        img.src = `${itemImg}`
        img.id = `image`;

        var h1 = document.createElement("h1");
        h1.textContent = `${itemName}`;

        var p = document.createElement("p");
        p.textContent = `\u{20B1}${itemPrice.toFixed(2)}`;

        var h = document.createElement("p");
        h.textContent = "HEHE"

        var input = document.createElement("input");
        input.setAttribute("type", "number");
        input.id = `input${i}`;

        var btn = document.createElement("button");
        btn.textContent = `Order`;
        btn.classList.add("btn");
        
        var itemDiv = document.getElementById(`item${i}`);
        itemDiv.append(img);
        itemDiv.append(h1, p);
        itemDiv.append(input);
        itemDiv.append(btn);
    };
    var generateHiddenDiv = document.createElement("div");
        generateHiddenDiv.id = `hidden`;

    if(categ.length % 2 != 0){
        itemSelection.append(generateHiddenDiv); 
    }else if(categ.length == 2){
        itemSelection.append(generateHiddenDiv);
        itemSelection.append(generateHiddenDiv.cloneNode(true));
    }

};

var overallPriceArr = [];
var priceArr = [];

function addAtOnce() {
    var buttons = document.querySelectorAll(".btn");
    var selectSpan = document.querySelector(".innerItemOutputjs");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            handleButtonClick(index);
            
        });
    });

    function handleButtonClick(index) {
        var inputQuantity = document.getElementById(`input${index}`).value;
        document.getElementById(`input${index}`).value = ``;

        if(inputQuantity <= 0){

        }else {
            var sumPrice = (categ[index].price * inputQuantity);
            overallPriceArr.push(sumPrice);
    
            var generateSpan = createSpan(index, inputQuantity, sumPrice);
            selectSpan.appendChild(generateSpan);
    
            priceArr.length = 0;

            finalPrice();
        }
    }

    function createSpan(index, quantity, totalPrice) {
        var generateSpan = document.createElement("span");
        generateSpan.id = `span${index}`;

        var itemSelectedText = document.createElement("p");
        itemSelectedText.textContent = `${categ[index].name} * ${quantity} = \u{20B1}${totalPrice.toFixed(2)}`;

        var xMark = document.createElement("p");
        xMark.textContent = `\u{2A09}`;
        xMark.classList.add("remove-btn");

        xMark.addEventListener("click", () => {
            generateSpan.remove();
            var toRemove = overallPriceArr.indexOf(totalPrice)
            overallPriceArr.splice(toRemove, 1);
            finalPrice();
        })

        generateSpan.append(itemSelectedText, xMark);

        return generateSpan;
    }

    function finalPrice(){
        var price = document.createElement("p");
        var sumOfAll = 0;

        for(let i = 0; i < overallPriceArr.length; i++){
            sumOfAll = sumOfAll + overallPriceArr[i];
        }

        price.textContent = `Total Price: ${sumOfAll}`;
        
        var pricingOutput = document.querySelector(".pricejs");
        pricingOutput.innerHTML = ``;
        pricingOutput.append(price);
    }
}
