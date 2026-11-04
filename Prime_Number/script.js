function clickButton() {
    const input = document.getElementById("num").value;

    const num = Number(input);
    let isPrime = true;

    if (input.trim() === "") {
        document.getElementById("result").innerText = "Please Enter Number";
        return;
    }

    if (num <= 1 || !Number.isInteger(num)) {
        document.getElementById("result").innerText = "Please Enter an Integer Greater Than 1";
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.getElementById("result").innerText = `${num} is a Prime Number`;
    } else {
        document.getElementById("result").innerText = `${num} is Not a Prime Number`;
    }
    document.getElementById("num").value="";
}