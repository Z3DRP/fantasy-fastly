const zModal = document.querySelector('.modal');
const profileBtn = document.querySelector('.fp');
const closeBtn = document.querySelector('.close');
const learnMoreBtns = document.querySelectorAll('.c-btn');

profileBtn.onclick = () => {
    zModal.style.display = 'block';
}

for (let btn of learnMoreBtns) {
    btn.onclick = (event) => {
        let cardBtnIdentifier = event.currentTarget.dataset.cardId;
        let selectedCard = document.querySelector(`.${cardBtnIdentifier}`);
        selectedCard.classList.toggle('shake');
    }

    btn.onblur = (event) => {
        event.currentTarget.classList.toggle('shake');
    }
}

closeBtn.onclick = () => {
    zModal.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target === zModal) {
        zModal.style.display = 'none';
    }
}