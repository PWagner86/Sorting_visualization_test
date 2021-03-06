// Variables
const enter = document.querySelector(".bars-enter");
const bubble = document.querySelector(".bubble-btn");

const visualContainer = document.querySelector(".visual-wrapper");
const visualWidth = visualContainer.clientWidth;
const visualHeight = visualContainer.clientHeight;

let bars = document.querySelector(".bars-amount");

let barTotal = [];

// Events
enter.addEventListener("click", (e) => {
    e.preventDefault();

    deleteItem(visualContainer);

    barTotal.splice(0, barTotal.length);

    for(let i = 0; i < bars.value; i++){
        
        let bar = document.createElement("div");
        bar.classList.add("bars");
        let barVal = createRandomNumber(visualHeight);
        bar.style.height = barVal + "px";
        bar.style.width = (visualWidth / bars.value) + "px";
        bar.setAttribute("value", barVal);
        visualContainer.appendChild(bar);
       
        console.log(bar.clientHeight);

        barTotal.push(bar);

        console.log(barTotal);
    
    }
});

bubble.addEventListener("click", (e) => {
    e.preventDefault();
    
    bubbleSort();
});

// Functions
function createRandomNumber(max){
    return Math.floor(Math.random() * (Math.floor(max) + 1));
};

function deleteItem(container){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

// Bubble Sort Algorythmus
function bubbleSort(){
    for(let i = 0; i < barTotal.length; i++){
        for(let j = 0; j < barTotal.length - i - 1; j++){
            let a = barTotal[j].clientHeight;
            let b = barTotal[j + 1].clientHeight;
            if(a > b){
                swap(barTotal, j, j + 1);
            }
        }
    }
    deleteItem(visualContainer);

    barTotal.forEach(item => {
        visualContainer.appendChild(item);
    })
}

function swap(array, a, b){
    let temp = array[a];

    array[a] = array[b];
    array[b] = temp;
}


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
