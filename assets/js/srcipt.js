
let slidePosition = document.querySelector('.slidearea').value;
let menuPointers = document.querySelector('.banner').value;

//eventes
//add event pointer bunner
document.querySelector('.pointer1').addEventListener('click', () => {
    let slidePosition = document.querySelector('.banner');
    if (slidePosition !== -100 || slidePosition !== -200) {
        slidePosition.style.marginLeft = '0vw';

    }
});

document.querySelector('.pointer2').addEventListener('click', () => {
    let slidePosition = document.querySelector('.banner');
    if (slidePosition !== 0 || slidePosition !== -200) {
        slidePosition.style.marginLeft = '-100vw';
    }
});
document.querySelector('.pointer3').addEventListener('click', () => {
    let slidePosition = document.querySelector('.banner');
    if (slidePosition !== -200 && slidePosition !== 0) {
        slidePosition.style.marginLeft = '-200vw';
    }
});




//function menu
window.onload = function () {
    document.querySelector(".menu").addEventListener("click", function () {
        if (document.querySelector(".menu nav ").style.display == 'flex') {
            document.querySelector(".menu nav ").style.display = 'none';
        } else {
            document.querySelector(".menu nav ").style.display = 'flex';
        }
    });
}


