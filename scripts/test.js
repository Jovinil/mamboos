var arrBody = [
    {name: "T-shirt", price: 400},
    {name: "hoodie", price: 800},
    {name: "tank-top", price: 200}
]

var arrFoot = [
    {name: "shoes", price: 100},
    {name: "flip-flops", price: 200},
    {name: "sandals", price: 300},
    {name: "socks", price: 50}
];

var arrHead = [
    {name: "cap", price: 300},
    {name: "headband", price: 20},
    {name: "hairpin", price: 10},
    {name: "shampoo", price: 8},
    {name: "wig", price: 500}
];

var arrName = [
    arrBody, arrFoot, arrHead
];

var items = [];

var action;
var categ;

document.querySelector(".btn1").addEventListener("click", e => {
    action = 1;
    categ = arrName[0];
    test();

});

document.querySelector(".btn2").addEventListener("click", e => {
    action = 2;
    categ = arrName[1];
    test();
});

document.querySelector(".btn3").addEventListener("click", e => {
    action = 3;
    categ = arrName[2];
    test();
});

var itemSelection = document.querySelector(".item-section");
   
function test (){
    itemSelection.innerHTML = ``;
    items.length = 0;
    for (let i = 0; i < categ.length; i++) {

        var div = document.createElement("div");
        div.id = `hehe${i}`;
        itemSelection.appendChild(div);
      
        var itemName = categ[i].name;
        var itemPrice = categ[i].price;
      
        var iName = document.createElement("h2");
        var iPrice = document.createElement("p");
        var h2Generate = iName.innerText = `${itemName}`
        var pGenerate = iPrice.innerText = `${itemPrice}`

        
        var obj = { itemName, itemPrice };
        items.push(obj);
      
        document.getElementById(`hehe${i}`).append(h2Generate, pGenerate);
    } 
    var trying = JSON.stringify(items);

    var itemPreview = document.querySelector(".check");

    itemPreview.append(trying);
    console.log(trying);

};