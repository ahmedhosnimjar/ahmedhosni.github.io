function check(correct) {
    const result = document.getElementById("result");

    if (correct) {
        result.innerText = "Correct!";
        result.style.color = "green";
    } else {
        result.innerText = "Wrong!";
        result.style.color = "red";
    }
}

function toggleNight() {
    document.body.classList.toggle("night");
}

function toggleReading() {
    document.body.classList.toggle("reading");
}
