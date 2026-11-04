function clickButton() {
    const input = document.getElementById("num").value;

    if (input.trim() === "") {
        document.getElementById("result").innerText = "Please Enter Number";
        return;
    }

    const num = Math.abs(Number(input));

    if (!Number.isInteger(num)) {
        document.getElementById("result").innerText = "Please Enter an Integer";
        return;
    }

    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit;
        temp = Math.floor(temp / 10);
    }

    document.getElementById("result").innerText = `Sum of Digits = ${sum}`;

    document.getElementById("num").value = "";
}
