//Modals
const editProfileModal = document.querySelector('.popup_type_edit-profile');
const addCardModal = document.querySelector('.popup_type_add-card');
const imageModal = document.querySelector('.popup_type_image');
//Forms
const editProfileForm = editProfileModal.querySelector('.popup__form');
const addCardForm = addCardModal.querySelector('.popup__form');
//Init Buttons
const openAddCardModalButton = document.querySelector('.profile__add');
const openEditProfileModalButton = document.querySelector('.profile__edit');
//Close Modal Buttons
const editProfileModalCloseButton = editProfileModal.querySelector('.popup__close');
const addCardModalCloseButton = addCardModal.querySelector('.popup__close');
const imageModalClose = imageModal.querySelector('.popup__close');
//Submit Buttons
const editProfileModalSaveButton = editProfileModal.querySelector('.popup__submit');
const addImageModalSubmit = addCardModal.querySelector('.popup__submit');
//Current Name & Job
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
//Edit Form Data
const nameInput = editProfileForm.querySelector('.popup__text_name');
const jobInput = editProfileForm.querySelector('.popup__text_job');
//"Add image" Form Data
const placeInput = addCardModal.querySelector('.popup__text_place');
const urlInput = addCardModal.querySelector('.popup__text_url');

const cardTemplate = document.querySelector('.template-card').content.querySelector('.photos__item');
const photosContainer = document.querySelector('.photos__container');

const imageModalDescription = imageModal.querySelector('.popup__description');
const imageModalImg = imageModal.querySelector('.popup__image');

imageModalClose.addEventListener('click', () => {
	toggleModalWindow(imageModal);
});

const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];

function createCard(data) {
	const cardElement = cardTemplate.cloneNode(true);
	const cardImage = cardElement.querySelector('.photos__image');
	const cardTitle = cardElement.querySelector('.photos__title');
	const cardLikeButton = cardElement.querySelector('.photos__like');
	const cardDeleteButton = cardElement.querySelector('.photos__delete');

	cardLikeButton.addEventListener('click', (evt) => {
		evt.target.classList.toggle('photos__like_selected');
	});

	cardDeleteButton.addEventListener('click', (evt) => {
		evt.target.closest('.photos__item').remove();
	});

	cardImage.addEventListener('click', (evt) => {
		toggleModalWindow(imageModal);
		imageModalImg.src = evt.target.src;
		imageModalDescription.textContent = evt.target.parentElement.querySelector('.photos__title').textContent;
	});

	cardTitle.textContent = data.name;
	cardImage.src = data.link;
	return cardElement;
}

function renderCard(data) {
	photosContainer.prepend(createCard(data));
}

initialCards.forEach((data) => {
	renderCard(data);
});

// Any modal Toggle
function toggleModalWindow(modalWindow) {
	modalWindow.classList.toggle('popup_opened');
}

//Toggle Edit Modal
function toggleEditModalWindow() {
	if (!editProfileModal.classList.contains('popup_opened')) {
		nameInput.value = profileName.textContent;
		jobInput.value = profileJob.textContent;
	}
	toggleModalWindow(editProfileModal);
}

//Submit - Edit modal
function formSubmitHandler(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileJob.textContent = jobInput.value;
	toggleModalWindow(editProfileModal);
}

function addCardSubmitHandler(evt) {
	evt.preventDefault();

	renderCard({
		name: placeInput.value,
		link: urlInput.value
	});
	toggleModalWindow(addCardModal);
}

editProfileForm.addEventListener('submit', formSubmitHandler);
addCardForm.addEventListener('submit', addCardSubmitHandler);

openAddCardModalButton.addEventListener('click', () => {
	toggleModalWindow(addCardModal);
});

addCardModalCloseButton.addEventListener('click', () => {
	toggleModalWindow(addCardModal);
});

openEditProfileModalButton.addEventListener('click', () => {
	toggleEditModalWindow();
});

editProfileModalCloseButton.addEventListener('click', () => {
	toggleModalWindow(editProfileModal);
});
