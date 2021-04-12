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
// clock();
// dellClock();

// *****************************************************


let body = document.querySelector('body');

let wrapper = document.createElement('div');
wrapper.className = "wrapper";

body.appendChild(wrapper);

let one = document.createElement('div');
one.className = "hour";
one.style.backgroundColor = "#0000CD";

let two = document.createElement('div');
two.className = "minute";
two.style.backgroundColor = "#0000FF";


let three = document.createElement('div');
three.className = "second";
three.style.backgroundColor = "#4169E1";

wrapper.append(one, two, three);


function onClock() {
    let d = new Date().toISOString();
    let a = d.split('T');
    let h = a[1].split('.');
    let y = h[0].split(':')
    return y;

}




function run(first, second, all) {
    setInterval(function() {
        first.innerHTML = `${onClock()[0]}`;
        second.innerHTML = `${onClock()[1]}`;
        all.innerHTML = `${onClock()[2]}`;
    }, 1000)
}
run(one, two, three);