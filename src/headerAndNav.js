import makeUpMyPage from "./restaurant";
import MakeUpContactPage from "./contact";
import MakeUpMenuPage from "./menu";
import createFooter from "./footer";

// All pages header and nav 

// Page's HEADER

const createHeaderWithNav = () => {
	const content = document.querySelector('#content');

	const header = document.createElement('header');
	header.classList.add('header');
	content.appendChild(header);

	const headline = document.createElement('h1');
	headline.textContent = 'La Parrillada';

	const navigation = document.createElement('nav');
	const navMenu = document.createElement('ul');

	const homeOption = document.createElement('li');
	homeOption.textContent = 'Home';
	homeOption.id = 'home-button';

	const menuOption = document.createElement('li');
	menuOption.textContent = 'Menu';
	menuOption.id = 'menu-button';

	const contactOption = document.createElement('li')
	contactOption.textContent = 'Contact';
	contactOption.id = 'contact-button';

	// appending child elements
	header.appendChild(headline)
	header.appendChild(navigation).appendChild(navMenu).append(homeOption, menuOption, contactOption)

	// event listeners
	homeOption.addEventListener('click', () => {
		clearMainContent();
		makeUpMyPage();
		createFooter();
	});

	menuOption.addEventListener('click', () => {
		clearMainContent();
		MakeUpMenuPage();
		createFooter();
	});

	contactOption.addEventListener('click', () => {
		clearMainContent();
		MakeUpContactPage();
		createFooter();
	});

};

function clearMainContent() {

	const content = document.querySelector('#content');
	const pageContent = document.querySelector('.page-content');
	if (pageContent) {
		content.removeChild(pageContent);
	}

}

export default createHeaderWithNav;