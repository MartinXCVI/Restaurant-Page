// module for contact page

const MakeUpContactPage = () => {
	const content = document.querySelector('#content');
	const pageContent = document.createElement('div');
	pageContent.classList.add('page-content');

	// Formulary
	const contactForm = document.createElement('form');
	contactForm.classList.add('contact-formu');
	pageContent.appendChild(contactForm);

	const legendTitle = document.createElement('legend');
	legendTitle.classList.add('legend-title');
	legendTitle.textContent = 'Form title';
	contactForm.appendChild(legendTitle);


	// Adding all the page content to the container
	content.appendChild(pageContent)
}

export default MakeUpContactPage;