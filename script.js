const gifElement = document.getElementById('sailor-cats');
const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');
const h1Element = document.querySelector('h1');

// const maxNoClicks = 4;
const maxYesClicks = 2;
let NoClicks = 0;
let YesClicks = 0;

// array of gif
const gifs = ['gifs/confused-luna.gif', 'gifs/rusure-luna.gif', 'gifs/sad-luna.gif', 'gifs/angry-luna.gif']
const btn_messages = ['you sure?', 'please pookie', 'you cant be serious', 'think again']

noButton.addEventListener('click', () => {

    if (NoClicks < btn_messages.length) {
        // Change the gif and button text
        gifElement.src = gifs[NoClicks]
        gifElement.style.width = '540px';
        gifElement.style.height = '405px';
        noButton.textContent = btn_messages[NoClicks]
        NoClicks++;
    }
    else if (NoClicks === btn_messages.length) {
        location.reload();
    }
});
yesButton.addEventListener('click', () => {
    YesClicks++;
    if (YesClicks == 1) {
        gifElement.src = 'gifs/giggly-luna.gif';
        gifElement.style.width = '542px';
        h1Element.textContent = 'reallllyy?';
        yesButton.textContent = 'yeaaaahh!';
        noButton.style.display = 'none';
        yesButton.style.textAlign = 'center';
    } else if (YesClicks == 2) {
        gifElement.src = 'gifs/together-luna.gif';
        gifElement.style.width = '540px';
        gifElement.style.marginTop = '15px';
        gifElement.style.height = '405px';
        h1Element.textContent = 'yay! BFF <3 ?';
        yesButton.textContent = 'pinky promise';
        noButton.style.display = 'none';
        yesButton.style.textAlign = 'center';
    }
    else { location.reload(); }
});