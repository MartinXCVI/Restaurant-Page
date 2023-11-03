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
	const welcomeCard = document.createElement('section');
	welcomeCard.classList.add('welcome-card');
	main.appendChild(welcomeCard);

	const welcomeArticle = document.createElement('article')
	welcomeArticle.classList.add('welcome-article');

	const welcomeTitle = document.createElement('h2');
	welcomeTitle.textContent = 'Be VERY Welcome! 🥩';

	const welcomeSubtitle = document.createElement('h3');
	welcomeSubtitle.textContent = 'About us';

	const aboutUsFirstPara = document.createElement('p');
	aboutUsFirstPara.classList.add('about-paragraph');
	aboutUsFirstPara.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.';
	const aboutUsSecondPara = document.createElement('p');
	aboutUsSecondPara.classList.add('about-paragraph');
	aboutUsSecondPara.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.';
	
	const welcomeFigure = document.createElement('figure');
	welcomeFigure.classList.add('welcome-fig');
	const welcomeImage = document.createElement('img');
	welcomeImage.src = '../dist/img/intro-img.png';

	welcomeFigure.appendChild(welcomeImage);
	welcomeArticle.append(welcomeTitle, welcomeSubtitle, aboutUsFirstPara, aboutUsSecondPara);
	welcomeCard.append(welcomeArticle, welcomeFigure);

	// Adding all the page content to the container
	content.appendChild(pageContent)
}

export default makeUpMyPage;