function clock() {
    setInterval(function () {
        let a = new Date();
        console.log(a);
    }, 1000)
}


function dellClock() {
    setInterval(function () {
        console.clear();

    }, 999);
}
clock();
dellClock();

// *****************************************************


let body = document.querySelector('body');

let wrapper = document.createElement('div');
wrapper.className = "wrapper";
body.appendChild(wrapper);

let divHour = document.createElement('div');
divHour.className = "hour";
divHour.style.backgroundColor = "#0000CD";

let divMinuts = document.createElement('div');
divMinuts.className = "minute";
divMinuts.style.backgroundColor = "#0000FF";

let divSeconds = document.createElement('div');
divSeconds.className = "second";
divSeconds.style.backgroundColor = "#4169E1";

wrapper.append(divHour, divMinuts, divSeconds);






function onClock() {
    setInterval(function () {
        let date = new Date();

        divHour.innerHTML = `${date.getHours()}`

        divMinuts.innerHTML = `${date.getMinutes()}`;

        divSeconds.innerHTML = `${date.getSeconds()}`;

    }, 1000)
}


onClock();
