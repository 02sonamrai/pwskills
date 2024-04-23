let counter = 0;
function decrement() {
    var decremetBtn = document.getElementById("decrementBtn");
    if (counter > 0) {

        counter = counter - 1;
        document.getElementById("disp_value").innerHTML = counter;
    } else {
        alert("negetaive value not allowed");
    }
}
function increment() {
    var decrementBtn = document.getElementById("decrementBtn");
    if (counter < 10) {

        counter = counter + 1;
        document.getElementById("disp_value").innerHTML = counter;
    }
    else {
        alert("10+ value are not allowed");
    }
}

function reset() {
    counter = 0;
    document.getElementById("disp_value").innerHTML = counter;

}