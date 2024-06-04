const sum = document.getElementById("sum")
const perc = document.getElementById("perc")
const inf = document.getElementById("inf")

function cal() {
        inf.innerHTML = sum.value - perc.value;
}
