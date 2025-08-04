const timeContainer = document.getElementById('real-time')
const date = new Date();

const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
};

const formattedDate = date.toLocaleDateString('en-GB', options);
console.log(formattedDate);
timeContainer.innerText = formattedDate