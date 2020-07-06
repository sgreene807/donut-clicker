const donut = {
    "count": 0
}

const autoClicker = {
    "count": 0,
    "cost": 100,

}

const donutMultiplier = {
    "count": 0,
    "cost": 10
}

const createDonut = () => {
    if (donutMultiplier.count > 0) {
        donut.count += Math.pow(1.2, donutMultiplier.count);
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

        // updateAutoClickerCount();

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

// const removeDisabledButtons = () => {
//     const autoClickerButton = document.getElementById('auto-clickers__buy');
//     if (donut.count >= 100){
//        autoClickerButton.disabled = false;
//     }
    
//     const donutMultiplierButton = document.getElementById('donut-multipliers__buy');
//     if (donut.count >= 10){
//         donutMultiplierButton.disabled = false;
//     }
// }




