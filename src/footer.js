// All pages footer

const createFooter = () => {

	const content = document.querySelector('#content');
	const pageContent = document.querySelector('.page-content')

	// footer
	const footer = document.createElement('footer');
	footer.id = 'footer';
	pageContent.appendChild(footer);

	//developer signature
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

	const githubIcon = document.createElement('img');
	githubIcon.src = '../dist/icons/github.png';
	githubIcon.classList.add('github-icon');


	developerSignature.append(signature, myGithub);
	myGithub.appendChild(githubIcon)

	// Icons attribute

	const iconsAttributeSpan = document.createElement('span');
	iconsAttributeSpan.classList.add('icons-attribute-span');
	const iconsAttributePara = document.createElement('p');
	iconsAttributePara.classList.add('icons-attribute-span');
	iconsAttributePara.textContent = 'UIcons by' + ' ';
	const iconsAttributeLink = document.createElement('a');
	iconsAttributeLink.classList.add('icons-attribute-link');
	iconsAttributeLink.href = 'https://www.flaticon.com/uicons';
	iconsAttributeLink.target = '_blank';
	iconsAttributeLink.textContent = 'Flaticon';

	footer.appendChild(iconsAttributeSpan);
	iconsAttributePara.appendChild(iconsAttributeLink);
	iconsAttributeSpan.appendChild(iconsAttributePara);

}

export default createFooter;