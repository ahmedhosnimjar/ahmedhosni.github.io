function answer(correct) {
    const result = document.getElementById("result");

    if (correct) {
        result.innerText = "Correct!";
        result.style.color = "lightgreen";
    } else {
        result.innerText = "Wrong answer";
        result.style.color = "red";
    }
}
