const donut = {
    "count": 102
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
    donut.count += 1
}

// const getDonutCount = () => {
//     return donut.count; 
// }

// const getDonutMultiplierCount = () => {
//     return donutMultiplier.count;
// }

// const getAutoClickerCount = () => {
//     return autoClicker.count;
// }

const purchaseAutoClicker = (donut, autoClicker) => {
    if (donut.count < autoClicker.cost) {
        return;
    } else {
        document.querySelector(".donuts__created").innerHTML = donut.count - autoClicker.cost;
        donut.count -= autoClicker.cost;
        document.querySelector(".auto-clickers__created").innerHTML = autoClicker.count += 1;
        
        autoClicker.cost += (autoClicker.cost * .10);

        updateAutoClickerCount();

        setInterval(activateAutoClicker, 1000);
        
    }
    // 1. Donuts created has to be >= 100
    // 2. More than one auto clicker can be purchased
    // 3. Cost for auto clicker should increase by 10%



    // while (donut.count >= autoClicker.cost) {

    //     document.querySelector(".donuts__created").innerHTML = donut.count - autoClicker.cost;
    //     document.querySelector(".auto-clickers__created").innerHTML = autoClicker.count += 1;
        
    //     let number = donut.count - autoClicker.cost;

    //     function activateAutoClicker() {
    //         for (let i = 0; i < 1; i++) {
    //         document.querySelector(".donuts__created").innerHTML = number += 1
        
    //         }
    //     }

    //     setInterval(activateAutoClicker, 1000);
    //     autoClicker.cost += (autoClicker.cost * .10);

    // }

}

const activateAutoClicker = () => {
    donut.count = document.querySelector(".donuts__created").innerHTML++;
}

const purchaseDonutMultiplier = () => {

    while (donut.count >= donutMultiplier.cost) {

            document.querySelector(".donut-multipliers__created").innerHTML = donut.count - donutMultiplier.cost;
            donutMultiplier.count += 1;
            donut.count = Math.pow(1.2, donutMultiplier.count)


        }

        donutMultiplier.cost += (donutMultiplier.cost * .10);
    }


const activateAutoClickersEvent = () => {
    autoClicker.count += donutMultiplier.count;
    donut.count += autoClicker.count;
}

const updateDonutCount = () => {
    const donutCount = document.querySelector(".donuts__created");
    donutCount.innerText = donut.count;
}

const updateAutoClickerCount = () => {
    const autoClickerCount = document.querySelector(".auto-clickers__created");
    autoClicker.innerText = autoClicker.count;
}

const updateDonutMultiplierCount = () => {
    const donutMultiplierCount = document.querySelector(".donut-multipliers__created");
    donutMultiplier.innerText = donutMultiplier.count;
}

const donutClick = document.querySelector(".donuts__maker");
donutClick.addEventListener("click", () => {
    event.preventDefault();
    createDonut();
    updateDonutCount();
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
    updateDonutCount();
    updateDonutMultiplierCount();
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




