document.getElementById('card-one').addEventListener('click', function (event) {
    event.preventDefault();
    alert("Board Updated Successfully")
    const plusPoint = document.getElementById('plusPoint').innerText;
    const convertedPlusPoint = parseFloat(plusPoint)
    const sum = convertedPlusPoint + 1;
    document.getElementById('plusPoint').innerText = sum;
})
document.getElementById('card-one').addEventListener('click', function (event) {
    event.preventDefault();
    const spend = document.getElementById('spend').innerText;
    const convertedSpend = parseFloat(spend)
    const sum = convertedSpend - 1;
    document.getElementById('spend').innerText = sum;
})

document.getElementById('card-one').addEventListener('click', function () {
    document.getElementById('submit-one').style.display = 'none';
    document.getElementById('submit-one').style.preventDefault= 'block';
})