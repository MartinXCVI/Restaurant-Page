// restaurant

const makeUpMyPage = () => {
  const content = document.querySelector('#content');
	const pageContent = document.createElement('div');
	pageContent.classList.add('page-content');

	// Page's HEADER
	const header = document.createElement('header');
	header.classList.add('header');
	pageContent.appendChild(header);

	const headline = document.createElement('h1');
	headline.textContent = 'La Parrillada';

	const navigation = document.createElement('nav');
	const navMenu = document.createElement('ul');

	const homeOption = document.createElement('li');
	homeOption.textContent = 'Home';
	const menuOption = document.createElement('li');
	menuOption.textContent = 'Menu';
	const contactOption = document.createElement('li')
	contactOption.textContent = 'Contact';
	
	header.appendChild(headline)
	header.appendChild(navigation).appendChild(navMenu).append(homeOption, menuOption, contactOption)

	// Page's MAIN
	const main = document.createElement('main');
	main.id = 'principal';
	pageContent.appendChild(main);

	// Home's 'Welcome Card'
	const welcomeCard = document.createElement('article');
	welcomeCard.classList.add('welcome-card');
	main.appendChild(welcomeCard);

	const welcomeTitle = document.createElement('h2');
	welcomeTitle.textContent = 'Be very welcome!';

	const welcomeSubtitle = document.createElement('h3');
	welcomeSubtitle.textContent = 'Feel free to do your order...';

	const welcomeFigure = document.createElement('figure');
	welcomeFigure.classList.add('welcome-fig');
	const welcomeImage = document.createElement('img');
	welcomeImage.src = '../dist/img/welcome-img.jpg'

	welcomeFigure.appendChild(welcomeImage);
	welcomeCard.append(welcomeTitle, welcomeFigure, welcomeSubtitle)

	// Footer 

	const footer = document.createElement('footer');
	footer.id = 'footer';
	pageContent.appendChild(footer);

	const developerSignature = document.createElement('span');
	developerSignature.classList.add('developer-signature');
	footer.appendChild(developerSignature)

	const signature = document.createElement('p');
	signature.classList.add('signature');
	signature.textContent = `Developed by ` ;
	const myGithub = document.createElement('a');
	myGithub.classList.add('my-github');
	myGithub.href = 'https://github.com/MartinXCVI';
	myGithub.target = '_blank';
	myGithub.textContent = 'MartinXCVI';

	developerSignature.append(signature, myGithub);

	// Adding all the page content to the container
	content.appendChild(pageContent)
}

export default makeUpMyPage;