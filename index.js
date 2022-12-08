

const monthEl = document.querySelector(".date h1"); //creation const monthEl qui recup date h1
const fullDateEl = document.querySelector(".date p"); //creation de fullDateEl qui recup date.p
const daysEl = document.querySelector(".days"); //creation de daysEl qui recup days

const monthInx = new Date ().getMonth(); // creation de const monthInx qui recupere newdate

const lastDays = new Date (new Date().getFullYear(),monthInx + 1 ,0).getDate();//creation de const qui recupere new date.get full year
const firstDays = new Date (new Date().getFullYear(),monthInx ,1 ).getDay()-1;



const months = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
];


monthEl.innerHTML = months[monthInx]; // le mois en gros H1
fullDateEl.innerHTML = new Date().toDateString(); // la date complete en dessous du mois

let days ="";

for (let i = firstDays; i > 0; i--){
    days +=`<div class="empty"></div>`;
}

for (let i = 1; i <= lastDays; i++){
    if( i === new Date().getDate()){
        days +=`<div class= "today">${i}</div>`;
    }else{
        days +=`<div>${i}</div>`;
    }
    
}

daysEl.innerHTML = days;



