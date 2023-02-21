// Use this code in sources tab of brower and run

function takeShower() {
    return "Showering";
}
function eatBreakfast() {
    let meal = cookFood();
    return `Eating ${meal}`;
}
function cookFood() {
    let items = ['Oatmeal', 'Eggs', 'Protein'];
    return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log('Ok ready to go to work!');
}
wakeUp();