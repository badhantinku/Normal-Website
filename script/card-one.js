// document.getElementById('card-one').addEventListener('click', function (event) {
//     event.preventDefault();
//     alert("Board Updated Successfully")
//     const plusPoint = document.getElementById('plusPoint').innerText;
//     const convertedPlusPoint = parseFloat(plusPoint)
//     const sum = convertedPlusPoint + 1;
//     document.getElementById('plusPoint').innerText = sum;
// })
// document.getElementById('card-one').addEventListener('click', function (event) {
//     event.preventDefault();
//     const spend = document.getElementById('spend').innerText;
//     const convertedSpend = parseFloat(spend)
//     const sum = convertedSpend - 1;
//     document.getElementById('spend').innerText = sum;
// })

// document.getElementById('card-one').addEventListener('click', function () {
//     document.getElementById('submit-one').style.display = 'none';
//     document.getElementById('submit-one').style.preventDefault= 'block';
// })
// Handle card click
document.getElementById('card-one').addEventListener('click', function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");

    // plusPoint +1
    const plusPoint = parseFloat(document.getElementById('plusPoint').innerText);
    document.getElementById('plusPoint').innerText = plusPoint + 1;

    // spend -1
    const spend = parseFloat(document.getElementById('spend').innerText);
    document.getElementById('spend').innerText = spend - 1;

    // Hide old submit-one
    document.getElementById('submit-one').style.display = 'none';

    // ✅ Get title of this card dynamically
    const cardTitle = this.closest('.card').querySelector('.card-title').innerText;

    // Add new activity dynamically
    const activityContainer = document.getElementById('activity-container');
    const newActivity = document.createElement('div');
    newActivity.className = "bg-white rounded-xl p-5 w-[400px] mx-auto my-5";
    newActivity.innerHTML = `<h3>✅ Task Completed: ${cardTitle}</h3>`;
    activityContainer.appendChild(newActivity);
});