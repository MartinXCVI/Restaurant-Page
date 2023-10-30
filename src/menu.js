// Module for menu page

const MakeUpMenuPage = () => {
  const content = document.querySelector('#content')
	const pageContent = document.createElement('div')
	pageContent.classList.add('page-content');

	//Menu
	const menuHeading = document.createElement('h2');
	menuHeading.textContent = 'Our Menu';
	pageContent.appendChild(menuHeading)



	// Adding all the page content to the container
	content.appendChild(pageContent);

}
export default MakeUpMenuPage;