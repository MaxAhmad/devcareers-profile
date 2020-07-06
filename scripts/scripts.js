const bgSwitch = document.getElementById('checkbox');
let bg = document.getElementById('photoBg');
let blank = document.querySelector('.green');
document.querySelector('.lightMode').style.display = 'none';

bgSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');

    if (bg.className !== 'toggled') {
        bg.style.background ='#000';
        bg.className = 'toggled';
        document.querySelector('.lightMode').style.display = 'block';
        document.querySelector('.darkMode').style.display = 'none';
        blank.style.background = '#000'
    }
    else {
        bg.style.background = "#05B993 url(https://devcareer.io/images/bg.svg)";
        bg.className = '';
        document.querySelector('.darkMode').style.display = 'block';
        document.querySelector('.lightMode').style.display = 'none';
        blank.style.background = '#05B993'
    }
});





