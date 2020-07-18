let popup = document.querySelector('.popup');
let close = popup.querySelector('.popup__close');
let save = popup.querySelector('.popup__save');
let edit = document.querySelector('.profile__edit');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__text_name');
let jobInput = formElement.querySelector('.popup__text_job');

function togglePopup() {
    popup.classList.toggle('popup_opened');
    if (popup.classList.contains('popup_opened')) {
        nameInput.value = profileName.textContent;
        jobInput.value = profileJob.textContent;
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
close.addEventListener('click', togglePopup);
edit.addEventListener('click', togglePopup);