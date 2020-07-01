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
    donut.count += 1
}

const getDonutCount = () => {
    return donut.count; 
}

const getDonutMultiplierCount = () => {
    return donutMultiplier.count;
}

const getAutoClickerCount = () => {
    return autoClicker.count;
}

const purchaseAutoClicker = () => {
    while (autoClicker.count >= 0){
        if (donut.count >= autoClicker.cost){
        donut.count - autoClicker.cost;
        autoClicker.cost += (autoClicker.cost * .10)
        autoClicker.count++;
        }
    }
}

const purchaseDonutMultiplier = () => {
    while (donutMultiplier.count >= 0){
        if (donut.count >= donutMultiplier.cost){
            donut.count - donutMultiplier.cost;
            donutMultiplier.cost += (donutMultiplier.cost * .10);
            donutMultiplier.count++;
            autoClicker.count = Math.pow(1.2, donutMultiplier.count)
        }
    }
}


const activateAutoClickersEvent = () => {
    autoClicker.count += donutMultiplier.count;
    donut.count += autoClicker.count;
}


