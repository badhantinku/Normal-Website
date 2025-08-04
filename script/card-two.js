document.getElementById('card-two').addEventListener('click', function (event) {
    event.preventDefault();
    const plusPoint = document.getElementById('plusPoint').innerText;
    const convertedPlusPoit = parseFloat(plusPoint)
    const sum = convertedPlusPoit + 1;
    document.getElementById('plusPoint').innerText = sum;
})
document.getElementById('card-two').addEventListener('click', function (event) {
    event.preventDefault();
    const spend = document.getElementById('spend').innerText;
    const convertedSpend = parseFloat(spend)
    const sum = convertedSpend - 1;
    document.getElementById('spend').innerText = sum;
})