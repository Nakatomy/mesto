let popup = document.querySelector('.popup');
let close = popup.querySelector('.popup__close');
let save = popup.querySelector('.popup__save');
let edit = document.querySelector('.profile__edit');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__text_name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__text_job'); // Воспользуйтесь инструментом .querySelector()


function togglePopup() {
    popup.classList.toggle('popup_opened');
    if (popup.classList.contains('popup_opened')) {
        nameInput.value = profileName.textContent;
        jobInput.value = profileJob.textContent;
    }
}

// Находим форму в DOM

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM

    // let nameInput = formElement.querySelector('popup__text_name');// Воспользуйтесь инструментом .querySelector()
    // let jobInput = formElement.querySelector('popup__text_job');// Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    togglePopup();
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
close.addEventListener('click', togglePopup);
edit.addEventListener('click', togglePopup);