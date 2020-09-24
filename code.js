// Variables
const enter = document.querySelector(".bars-enter");
const visualContainer = document.querySelector(".visual-wrapper");
const visualWidth = visualContainer.clientWidth;
const visualHeight = visualContainer.clientHeight;

let bars = document.querySelector(".bars-amount");

// Events
enter.addEventListener("click", (e) => {
    e.preventDefault();

    deleteItem(visualContainer);

    for(let i = 0; i < bars.value; i++){
        let bar = document.createElement("div");
        bar.classList.add("bars");
        let barHeight = bar.style.height = createRandomNumber(visualHeight) + "px";
        bar.style.width = (visualWidth / bars.value) + "px";
        bar.setAttribute("value", barHeight);
        visualContainer.appendChild(bar);
    }
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