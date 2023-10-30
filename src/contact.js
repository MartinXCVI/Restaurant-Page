// module for contact page

const MakeUpContactPage = () => {
	const content = document.querySelector('#content');
	const pageContent = document.createElement('div');
	pageContent.classList.add('page-content');

	// Page's MAIN
	const main = document.createElement('main');
	main.id = 'principal';
	pageContent.appendChild(main);

	// Formulary
	const contactForm = document.createElement('form');
	contactForm.classList.add('contact-formu');
	main.appendChild(contactForm);

	const legendTitle = document.createElement('legend');
	legendTitle.classList.add('legend-title');
	legendTitle.textContent = 'Form title';
	contactForm.appendChild(legendTitle);


	// Adding all the page content to the container
	content.appendChild(pageContent)
}

export default MakeUpContactPage;