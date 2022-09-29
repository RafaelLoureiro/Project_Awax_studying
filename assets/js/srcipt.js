
let slidePosition = document.querySelector('.banner').value;


//eventes
//add event pointer bunner
document.querySelector('.pointer1').addEventListener('click', () => {
    let slidePosition = document.querySelector('.slidearea');
    if (slidePosition === -200 || slidePosition !== -400) {
        slidePosition.style.marginLeft = '0vw';
    }
});

document.querySelector('.pointer2').addEventListener('click', () => {
    let slidePosition = document.querySelector('.slidearea');
    if (slidePosition !== 0 || slidePosition !== -400) {
        slidePosition.style.marginLeft = '-85vw';
    }
});
document.querySelector('.pointer3').addEventListener('click', () => {
    let slidePosition = document.querySelector('.slidearea');
    if (slidePosition !== 0 || slidePosition !== -200) {
        slidePosition.style.marginLeft = '-400vw';
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


