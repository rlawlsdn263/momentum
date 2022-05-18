const greetingsForm = document.getElementById('greetingsForm');
const greetingsName = document.getElementById('greetingsName');


//Write your name here!
function handleToDoName(e) {
    // e.preventDeault();
    const userName = greetingsName.value;
    localStorage.setItem('userName', userName);
    // const span = createElement('span');
    // span.innerText = `Good morning, ${userName}.`;
}

const savedUserName = localStorage.getItem('userName');

if(savedUserName) {
    greetingsName.classList.add('hidden');
    const greetings = document.createElement('span');
    greetingsForm.append(greetings);
    greetings.innerText = `Good morning, ${savedUserName}`;
}

greetingsForm.addEventListener('submit', handleToDoName);