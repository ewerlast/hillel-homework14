function clock() {
    setInterval(function() {
        let a = new Date();
        console.log(a);
    }, 1000)
}


function dellClock() {
    setInterval(function() {
        console.clear();

    }, 999);
}
clock();
dellClock();

// *****************************************************


let body = document.querySelector('body');







function onClock() {
    setInterval(function() {
        let date = new Date();
        let wrapper = document.createElement('div');
        wrapper.className = "wrapper";

        body.appendChild(wrapper);
        let divHour = document.createElement('div');
        divHour.className = "hour";
        divHour.style.backgroundColor = "#0000CD";
        divHour.innerHTML = `${date.getHours()}`

        let divMinuts = document.createElement('div');
        divMinuts.className = "minute";
        divMinuts.style.backgroundColor = "#0000FF";
        divMinuts.innerHTML = `${date.getMinutes()}`;

        let divSeconds = document.createElement('div');
        divSeconds.className = "second";
        divSeconds.style.backgroundColor = "#4169E1";
        divSeconds.innerHTML = `${date.getSeconds()}`;

        wrapper.append(divHour, divMinuts, divSeconds);



    }, 1000)
}

function offClock() {
    setInterval(function() {
        let wrapper = document.querySelector('.wrapper')
        wrapper.remove();
    }, 999)
}
onClock();
offClock();