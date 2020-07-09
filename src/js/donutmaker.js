const donut = {
    "count": 0
}

const autoClicker = {
    "count": 0,
    "cost": 100,

}

const donutMultiplier = {
    "count": 0,
    "cost": 10,
    "clickValue": 0
}

const createDonut = () => {
    if (donutMultiplier.count > 0) {
        donut.count += Math.pow(1.2, donutMultiplier.count);
        donutMultiplier.clickValue = Math.pow(1.2, donutMultiplier.count);
        document.querySelector(".donut-multipliers__value").innerHTML = donutMultiplier.clickValue;
        document.querySelector(".donuts__created").innerHTML = donut.count;
    } else {
        donut.count += 1
        document.querySelector(".donuts__created").innerHTML = donut.count;
    }
}


const purchaseAutoClicker = (donut, autoClicker) => {
    if (donut.count < autoClicker.cost) {
        return;
    } else {
        document.querySelector(".donuts__created").innerHTML = donut.count - autoClicker.cost;
        donut.count -= autoClicker.cost;
        document.querySelector(".auto-clickers__created").innerHTML = autoClicker.count += 1;
        
        autoClicker.cost += (autoClicker.cost * .10);
        document.querySelector(".auto-clickers__cost").innerHTML = autoClicker.cost;
        setInterval(createDonut, 1000);
        
    }

}

const purchaseDonutMultiplier = () => {

    if(donut.count < donutMultiplier.cost) {
        return;
    } else {

        document.querySelector(".donuts__created").innerHTML = donut.count - donutMultiplier.cost;
        donut.count -= donutMultiplier.cost;
        document.querySelector(".donut-multipliers__created").innerHTML = donutMultiplier.count += 1;
        donutMultiplier.cost += (donutMultiplier.cost * .10);
        document.querySelector(".donut-multipliers__cost").innerHTML = donutMultiplier.cost;
        console.log(donutMultiplier.count);
    }
}

const activateAutoClickersEvent = () => {
    autoClicker.count += donutMultiplier.count;
    donut.count += autoClicker.count;
}

const donutClick = document.querySelector(".donuts__maker");
donutClick.addEventListener("click", () => {
    event.preventDefault();
    createDonut();
})

const autoClickerClick = document.querySelector(".auto-clickers__buy");
autoClickerClick.addEventListener("click", () => {
    event.preventDefault();
    purchaseAutoClicker(donut,autoClicker);
})

const donutMultiplierClick = document.querySelector(".donut-multipliers__buy");
    donutMultiplierClick.addEventListener("click", () => {
    event.preventDefault();
    purchaseDonutMultiplier();
})

let autoClickerButton = document.querySelector(".auto-clickers__buy");
autoClickerButton.disabled = true;
if (donut.count >= autoClicker.cost){
    autoClickerButton.disabled = false;
}


let donutMultButton = document.querySelector(".donut-multipliers__buy");
donutMultButton.disabled = true;
if (donut.count >= donutMultiplier.cost){
    donutMultButton.disabled = false;
}









