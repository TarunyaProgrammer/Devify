
// menu
let menuBtn = document.getElementById('menu');
let menuCanvas = document.getElementById('menuCanvas')

menuBtn.addEventListener('click', function () {
    menuCanvas.classList.toggle("slide");
});

//header
let header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    if (this.scrollY > 100) {
        header.classList.add('headerMove')
    }
    else {
        header.classList.remove('headerMove')
    }
})




//Clear console
setInterval(() => {
    console.clear()
    console.log("Welcome Users");
}, 10000);

// search function
let inp = document.getElementById('searchInp');
function search() {
    if (event.keyCode == 13) {
        v = inp.value;
        if (v.length > 0) {
            window.open(`https://gaana.com/search/${inp.value}`, '_blank');
            setTimeout(() => {
                inp.value = '';
            }, 1000);
        }
    }
}

// search playlist function
let inpP = document.getElementById('searchInpP');
function searchP() {
    if (event.keyCode == 13) {
        w = inpP.value;
        if (w.length > 0) {
            window.open(`https://open.spotify.com/search/${w}`, '_blank');
            setTimeout(() => {
                inpP.value = '';
            }, 1000);
        }
    }
}


// Network Connection
setInterval(function () {
    var ifConnected = window.navigator.onLine;
    if (ifConnected) { }
    else {
        alert('Check Your Internet! Connection not available');
    }
}, 10 * 1000);