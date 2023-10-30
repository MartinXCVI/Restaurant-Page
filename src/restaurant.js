// restaurant

const makeUpMyPage = () => {
  const content = document.querySelector('#content');
	const pageContent = document.createElement('div');
	pageContent.classList.add('page-content');

	// Page's MAIN
	const main = document.createElement('main');
	main.id = 'principal';
	pageContent.appendChild(main);

	// Home's 'Welcome Card'
	const welcomeCard = document.createElement('article');
	welcomeCard.classList.add('welcome-card');
	main.appendChild(welcomeCard);

	const welcomeTitle = document.createElement('h2');
	welcomeTitle.textContent = 'Be VERY Welcome! 🥩';

	const welcomeSubtitle = document.createElement('h3');
	welcomeSubtitle.textContent = 'The true place to feast'

	const welcomeFigure = document.createElement('figure');
	welcomeFigure.classList.add('welcome-fig');
	const welcomeImage = document.createElement('img');
	welcomeImage.src = '../dist/img/welcome-img.jpg'

	welcomeFigure.appendChild(welcomeImage);
	welcomeCard.append(welcomeTitle, welcomeFigure, welcomeSubtitle)

	// Adding all the page content to the container
	content.appendChild(pageContent)
}

export default makeUpMyPage;