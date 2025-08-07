const buttons = document.getElementsByClassName('disable-btn')
const activityContainer = document.getElementById('currentTime')
// const date = new Date();

// const options = {
//     weekday: 'short',
//     day: '2-digit',
//     month: 'short',
//     year: 'numeric'
// };

// const formattedDate = date.toLocaleDateString('en-GB', options);
console.log(formattedDate);
for (let button of buttons) {
    button.addEventListener("click", handleButtonClick)
}
function handleButtonClick(event) {
    console.log(event.target);
    event.target.setAttribute("disabled", true)
    const p =document.createElement('p')
    p.innerText.formattedDate
    activityContainer.append(p)
}