// module for contact page

const MakeUpContactPage = () => {
	const content = document.querySelector('#content');
	const pageContent = document.createElement('div');
	pageContent.classList.add('page-content');

	// Page's MAIN
	const main = document.createElement('main');
	main.id = 'principal';
	pageContent.appendChild(main);

	// Contact Container

	const contactTitle = document.createElement('h2');
	contactTitle.classList.add('contact-title');
	contactTitle.textContent = 'Contact Us';
	main.appendChild(contactTitle);

	const contactContainer = document.createElement('section');
	contactContainer.classList.add('contact-container');
	main.appendChild(contactContainer);

	//-----Phone div

	const phoneDiv = document.createElement('div');
	phoneDiv.classList.add('contact-div', 'phone-div');
	contactContainer.appendChild(phoneDiv);

	// Phone figure, img
	
	const phoneFig = document.createElement('figure');
	phoneFig.classList.add('contact-logo-fig')
	phoneDiv.appendChild(phoneFig);
	const phoneIcon = document.createElement('img');
	phoneIcon.classList.add('contact-icon-img');
	phoneFig.appendChild(phoneIcon);
	phoneIcon.src = '../dist/icons/phone-call.png';

	// Phone info

	const phoneNumber = document.createElement('p');
	phoneNumber.textContent = 'Telephone: 123 - 456 - 7890';
	phoneNumber.classList.add('contact-para');
	phoneDiv.appendChild(phoneNumber);

	//-----Address div

	const addressDiv = document.createElement('div');
	addressDiv.classList.add('contact-div', 'address-div');
	contactContainer.appendChild(addressDiv);

	// Address figure, img

	const addressFig = document.createElement('figure');
	addressFig.classList.add('contact-logo-fig')
	addressDiv.appendChild(addressFig);
	const addressIcon = document.createElement('img');
	addressIcon.classList.add('contact-icon-img');
	addressFig.appendChild(addressIcon);
	addressIcon.src = '../dist/icons/map-marker.png';

	// Address info

	const streetAddress = document.createElement('p');
	streetAddress.classList.add('address-para');
	streetAddress.textContent = 'Av. Something, 123';
	const cityLocation = document.createElement('p');
	cityLocation.classList.add('address-para');
	cityLocation.textContent = 'City Name, State/Province Name';
	addressDiv.append(streetAddress, cityLocation);

	//-----Instagram div

	const instagramDiv = document.createElement('div');
	instagramDiv.classList.add('contact-div', 'instagram-div');
	contactContainer.appendChild(instagramDiv);

	// Instagram figure, img

	const instagramFig = document.createElement('figure');
	instagramFig.classList.add('contact-logo-fig');
	instagramDiv.appendChild(instagramFig);
	const instagramIcon = document.createElement('img');
	instagramIcon.classList.add('contact-icon-img');
	instagramFig.appendChild(instagramIcon);
	instagramIcon.src = '../dist/icons/instagram.png';

	// Instagram info

	const ourInstagram = document.createElement('p');
	ourInstagram.textContent = '@restaurant_username';
	ourInstagram.classList.add('contact-para');
	instagramDiv.appendChild(ourInstagram);

	//-----Email div

	const emailDiv = document.createElement('div');
	emailDiv.classList.add('contact-div', 'email-div');
	contactContainer.appendChild(emailDiv);

	// Email figure, img

	const emailFig = document.createElement('figure');
	emailFig.classList.add('contact-logo-fig');
	emailDiv.appendChild(emailFig);
	const emailIcon = document.createElement('img');
	emailIcon.classList.add('contact-icon-img');
	emailFig.appendChild(emailIcon);
	emailIcon.src = '../dist/icons/email.png';

	// Email info

	const ourEmail = document.createElement('p');
	ourEmail.textContent = 'ouremailaddress@somedomain.com';
	ourEmail.classList.add('contact-para');
	emailDiv.appendChild(ourEmail);

	// Adding all the page content to the container
	content.appendChild(pageContent)
}

export default MakeUpContactPage;