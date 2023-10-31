// Module for menu page

const MakeUpMenuPage = () => {
  const content = document.querySelector('#content')
	const pageContent = document.createElement('div')
	pageContent.classList.add('page-content');

	// Page's MAIN
	const main = document.createElement('main');
	main.id = 'principal';
	pageContent.appendChild(main);

	// Menu container

	const menuContainer = document.createElement('section');
	menuContainer.classList.add('menu-container');
	main.appendChild(menuContainer);

	const menuHeading = document.createElement('h2');
	menuHeading.classList.add('menu-heading')
	menuHeading.textContent = 'Our Dishes';
	menuContainer.appendChild(menuHeading);

	//----- DISHES
	
	const dishesArticle = document.createElement('article');
	dishesArticle.classList.add('dishes-article');
	menuContainer.appendChild(dishesArticle);

	// Choripan Card
	const choripanCard = document.createElement('div');
	choripanCard.classList.add('dish-card', 'choripan-card');
	dishesArticle.appendChild(choripanCard);

	const choripanTitle = document.createElement('h4');
	choripanTitle.classList.add('dish-title')
	choripanTitle.textContent = 'Choripan';
	const choripanFigure = document.createElement('figure');
	choripanFigure.classList.add('dish-fig', 'choripan-fig')
	const choripanImage = document.createElement('img');
	choripanImage.src = '../dist/img/menu-img/choripan.jpg';
	choripanImage.alt = 'choripan dish';
	choripanImage.classList.add('dish-img', 'choripan-img');
	choripanFigure.appendChild(choripanImage);
	const choripanPrice = document.createElement('p');
	choripanPrice.textContent = 'Pricing: $5.00';
	const choripanDescription = document.createElement('p');
	choripanDescription.textContent = 'Description: Argentine sandwich of chorizo. Includes spicy sauce "chimichurri" and veggies.';
	const choripanBtn = document.createElement('button');
	choripanBtn.classList.add('dish-btn', 'choripan-btn');
	choripanBtn.textContent = 'Delivery!';

	choripanCard.append(choripanTitle, choripanFigure, choripanPrice, choripanDescription, choripanBtn);

	// Churrasco with salad Card

	const churrascoCard = document.createElement('div');
	churrascoCard.classList.add('dish-card', 'churrasco-card');
	dishesArticle.appendChild(churrascoCard);

	const churrascoTitle = document.createElement('h4');
	churrascoTitle.classList.add('dish-title')
	churrascoTitle.textContent = 'Churrasco';
	const churrascoFigure = document.createElement('figure');
	churrascoFigure.classList.add('dish-fig', 'churrasco-fig')
	const churrascoImage = document.createElement('img');
	churrascoImage.src = '../dist/img/menu-img/churrasco-with-salad.jpg';
	churrascoImage.alt = 'churrasco with salad dish';
	churrascoImage.classList.add('dish-img', 'churrasco-img');
	churrascoFigure.appendChild(churrascoImage);
	const churrascoPrice = document.createElement('p');
	churrascoPrice.textContent = 'Pricing: $25.00';
	const churrascoDescription = document.createElement('p');
	churrascoDescription.textContent = 'Description: Churrasco cut from Argentina. Fresh salad on the side for a softer experience.';
	const churrascoBtn = document.createElement('button');
	churrascoBtn.classList.add('dish-btn', 'churrasco-btn');
	churrascoBtn.textContent = 'Delivery!';

	churrascoCard.append(churrascoTitle, churrascoFigure, churrascoPrice, churrascoDescription, churrascoBtn);

	// Empanadas Card

	const empanadasCard = document.createElement('div');
	empanadasCard.classList.add('dish-card', 'empanadas-card');
	dishesArticle.appendChild(empanadasCard);

	const empanadasTitle = document.createElement('h4');
	empanadasTitle.classList.add('dish-title')
	empanadasTitle.textContent = 'Empanadas';
	const empanadasFigure = document.createElement('figure');
	empanadasFigure.classList.add('dish-fig', 'empanadas-fig')
	const empanadasImage = document.createElement('img');
	empanadasImage.src = '../dist/img/menu-img/empanadas.jpng.jpg';
	empanadasImage.alt = 'argentine empanadas';
	empanadasImage.classList.add('dish-img', 'empanadas-img');
	empanadasFigure.appendChild(empanadasImage);
	const empanadasPrice = document.createElement('p');
	empanadasPrice.textContent = 'Pricing: $2.00 (for each)';
	const empanadasDescription = document.createElement('p');
	empanadasDescription.textContent = 'Description: Argentine Empanadas. Varieties at your disposal: Meat, chicken, vegetables or cheese.';
	const empanadasBtn = document.createElement('button');
	empanadasBtn.classList.add('dish-btn', 'empanadas-btn');
	empanadasBtn.textContent = 'Delivery!';

	empanadasCard.append(empanadasTitle, empanadasFigure, empanadasPrice, empanadasDescription, empanadasBtn);

	// Grilled mollejas Card

	const mollejasCard = document.createElement('div');
	mollejasCard.classList.add('dish-card', 'mollejas-card');
	dishesArticle.appendChild(mollejasCard);

	const mollejasTitle = document.createElement('h4');
	mollejasTitle.classList.add('dish-title')
	mollejasTitle.textContent = 'Grilled Mollejas';
	const mollejasFigure = document.createElement('figure');
	mollejasFigure.classList.add('dish-fig', 'mollejas-fig')
	const mollejasImage = document.createElement('img');
	mollejasImage.src = '../dist/img/menu-img/grilled-mollejas.jpg';
	mollejasImage.alt = 'grilled mollejas';
	mollejasImage.classList.add('dish-img', 'mollejas-img');
	mollejasFigure.appendChild(mollejasImage);
	const mollejasPrice = document.createElement('p');
	mollejasPrice.textContent = 'Pricing: $18.00';
	const mollejasDescription = document.createElement('p');
	mollejasDescription.textContent = 'Description: Fairly seasoned grilled mollejas. Taste even better with some lemon drops.';
	const mollejasBtn = document.createElement('button');
	mollejasBtn.classList.add('dish-btn', 'mollejas-btn');
	mollejasBtn.textContent = 'Delivery!';

	mollejasCard.append(mollejasTitle, mollejasFigure, mollejasPrice, mollejasDescription, mollejasBtn);

	// Sandwich of milanesa Card

	const milanesaCard = document.createElement('div');
	milanesaCard.classList.add('dish-card', 'milanesa-card');
	dishesArticle.appendChild(milanesaCard);

	const milanesaTitle = document.createElement('h4');
	milanesaTitle.classList.add('dish-title')
	milanesaTitle.textContent = 'Sandwich of Milanesa';
	const milanesaFigure = document.createElement('figure');
	milanesaFigure.classList.add('dish-fig', 'milanesa-fig')
	const milanesaImage = document.createElement('img');
	milanesaImage.src = '../dist/img/menu-img/milanesa-sandwich.jpg';
	milanesaImage.alt = 'sandwich of milanesa';
	milanesaImage.classList.add('dish-img', 'mollejas-img');
	milanesaFigure.appendChild(milanesaImage);
	const milanesaPrice = document.createElement('p');
	milanesaPrice.textContent = 'Pricing: $21.50';
	const milanesaDescription = document.createElement('p');
	milanesaDescription.textContent = 'Description: Unmissable delicacy. Well cut tomatoes, fresh lettuce, breaded loin steak. We recomment it.';
	const milanesaBtn = document.createElement('button');
	milanesaBtn.classList.add('dish-btn', 'mollejas-btn');
	milanesaBtn.textContent = 'Delivery!';

	milanesaCard.append(milanesaTitle, milanesaFigure, milanesaPrice, milanesaDescription, milanesaBtn);

	// Morcilla with bread Card

	const morcillaCard = document.createElement('div');
	morcillaCard.classList.add('dish-card', 'morcilla-card');
	dishesArticle.appendChild(morcillaCard);

	const morcillaTitle = document.createElement('h4');
	morcillaTitle.classList.add('dish-title')
	morcillaTitle.textContent = 'Morcilla Slices';
	const morcillaFigure = document.createElement('figure');
	morcillaFigure.classList.add('dish-fig', 'morcilla-fig')
	const morcillaImage = document.createElement('img');
	morcillaImage.src = '../dist/img/menu-img/morcilla-with-bread-slices.jpg';
	morcillaImage.alt = 'morcilla slices with bread';
	morcillaImage.classList.add('dish-img', 'morcilla-img');
	morcillaFigure.appendChild(morcillaImage);
	const morcillaPrice = document.createElement('p');
	morcillaPrice.textContent = 'Pricing: $21.50';
	const morcillaDescription = document.createElement('p');
	morcillaDescription.textContent = 'For sausage fans and enjoyers. Something quick and tasty. Something to share among friends.';
	const morcillaBtn = document.createElement('button');
	morcillaBtn.classList.add('dish-btn', 'morcilla-btn');
	morcillaBtn.textContent = 'Delivery!';

	morcillaCard.append(morcillaTitle, morcillaFigure, morcillaPrice, morcillaDescription, morcillaBtn);

	// Neapolitan milanesa with fries Card

	const neapolitanCard = document.createElement('div');
	neapolitanCard.classList.add('dish-card', 'neapolitan-card');
	dishesArticle.appendChild(neapolitanCard);

	const neapolitanTitle = document.createElement('h4');
	neapolitanTitle.classList.add('dish-title')
	neapolitanTitle.textContent = 'Neapolitan Milanesa';
	const neapolitanFigure = document.createElement('figure');
	neapolitanFigure.classList.add('dish-fig', 'neapolitan-fig')
	const neapolitanImage = document.createElement('img');
	neapolitanImage.src = '../dist/img/menu-img/neapolitan-milanesa-with-fries.jpg';
	neapolitanImage.alt = 'neapolitan milanesa with fries';
	neapolitanImage.classList.add('dish-img', 'neapolitan-img');
	neapolitanFigure.appendChild(neapolitanImage);
	const neapolitanPrice = document.createElement('p');
	neapolitanPrice.textContent = 'Pricing: $27.30';
	const neapolitanDescription = document.createElement('p');
	neapolitanDescription.textContent = 'Extremely hungry? This cannot fail. But be careful... it may be too much for just one person!';
	const neapolitanBtn = document.createElement('button');
	neapolitanBtn.classList.add('dish-btn', 'neapolitan-btn');
	neapolitanBtn.textContent = 'Delivery!';

	neapolitanCard.append(neapolitanTitle, neapolitanFigure, neapolitanPrice, neapolitanDescription, neapolitanBtn);

	// Customized pizza Card

	const pizzaCard = document.createElement('div');
	pizzaCard.classList.add('dish-card', 'pizza-card');
	dishesArticle.appendChild(pizzaCard);

	const pizzaTitle = document.createElement('h4');
	pizzaTitle.classList.add('dish-title')
	pizzaTitle.textContent = 'Customized Pizza';
	const pizzaFigure = document.createElement('figure');
	pizzaFigure.classList.add('dish-fig', 'pizza-fig')
	const pizzaImage = document.createElement('img');
	pizzaImage.src = '../dist/img/menu-img/pizza.jpg';
	pizzaImage.alt = 'mixed pizza';
	pizzaImage.classList.add('dish-img', 'pizza-img');
	pizzaFigure.appendChild(pizzaImage);
	const pizzaPrice = document.createElement('p');
	pizzaPrice.textContent = 'Pricing: $19.25';
	const pizzaDescription = document.createElement('p');
	pizzaDescription.textContent = 'Customized pizza! Tell us which combination you desire, and we will do our best to make it possible.';
	const pizzaBtn = document.createElement('button');
	pizzaBtn.classList.add('dish-btn', 'pizza-btn');
	pizzaBtn.textContent = 'Delivery!';

	pizzaCard.append(pizzaTitle, pizzaFigure, pizzaPrice, pizzaDescription, pizzaBtn);

	// Russian salad Card

	const russianSaladCard = document.createElement('div');
	russianSaladCard.classList.add('dish-card', 'russianSalad-card');
	dishesArticle.appendChild(russianSaladCard);

	const russianSaladTitle = document.createElement('h4');
	russianSaladTitle.classList.add('dish-title')
	russianSaladTitle.textContent = 'Russian Salad';
	const russianSaladFigure = document.createElement('figure');
	russianSaladFigure.classList.add('dish-fig', 'russian-salad-fig')
	const russianSaladImage = document.createElement('img');
	russianSaladImage.src = '../dist/img/menu-img/russian-salad.jpg';
	russianSaladImage.alt = 'russian salad';
	russianSaladImage.classList.add('dish-img', 'russian-salad-img');
	russianSaladFigure.appendChild(russianSaladImage);
	const russianSaladPrice = document.createElement('p');
	russianSaladPrice.textContent = 'Pricing: $10.00';
	const russianSaladDescription = document.createElement('p');
	russianSaladDescription.textContent = 'Russian salad for those who prefer a lighter option. Although, also good as a plus!';
	const russianSaladBtn = document.createElement('button');
	russianSaladBtn.classList.add('dish-btn', 'russian-salad-btn');
	russianSaladBtn.textContent = 'Delivery!';

	russianSaladCard.append(russianSaladTitle, russianSaladFigure, russianSaladPrice, russianSaladDescription, russianSaladBtn);

	// Steak with fries Card

	const steakFriesCard = document.createElement('div');
	steakFriesCard.classList.add('dish-card', 'steak-fries-card');
	dishesArticle.appendChild(steakFriesCard);

	const steakFriesTitle = document.createElement('h4');
	steakFriesTitle.classList.add('dish-title')
	steakFriesTitle.textContent = 'Steak with Fries';
	const steakFriesFigure = document.createElement('figure');
	steakFriesFigure.classList.add('dish-fig', 'steak-fries-fig')
	const steakFriesImage = document.createElement('img');
	steakFriesImage.src = '../dist/img/menu-img/steak-with-fries.jpg';
	steakFriesImage.alt = 'steak with fries';
	steakFriesImage.classList.add('dish-img', 'steak-fries-img');
	steakFriesFigure.appendChild(steakFriesImage);
	const steakFriesPrice = document.createElement('p');
	steakFriesPrice.textContent = 'Pricing: $26.75';
	const steakFriesDescription = document.createElement('p');
	steakFriesDescription.textContent = 'Timeless classic. If you don\'t know what to eat, this is the option. It won\'t disapoint you.';
	const steakFriesBtn = document.createElement('button');
	steakFriesBtn.classList.add('dish-btn', 'steak-fries-btn');
	steakFriesBtn.textContent = 'Delivery!';

	steakFriesCard.append(steakFriesTitle, steakFriesFigure, steakFriesPrice, steakFriesDescription, steakFriesBtn);

	// Hamburguer Card

	const hamburguerCard = document.createElement('div');
	hamburguerCard.classList.add('dish-card', 'hamburguer-card');
	dishesArticle.appendChild(hamburguerCard);

	const hamburguerTitle = document.createElement('h4');
	hamburguerTitle.classList.add('dish-title')
	hamburguerTitle.textContent = 'Double Hamburguer';
	const hamburguerFigure = document.createElement('figure');
	hamburguerFigure.classList.add('dish-fig', 'hamburguer-fig')
	const hamburguerImage = document.createElement('img');
	hamburguerImage.src = '../dist/img/menu-img/hamburguer.jpg';
	hamburguerImage.alt = 'big double hamburguer';
	hamburguerImage.classList.add('dish-img', 'hamburguer-img');
	hamburguerFigure.appendChild(hamburguerImage);
	const hamburguerPrice = document.createElement('p');
	hamburguerPrice.textContent = 'Pricing: $17.20';
	const hamburguerDescription = document.createElement('p');
	hamburguerDescription.textContent = 'Tasty and powerful option. Big double hamburguer to smash your hunger and cravings!';
	const hamburguerBtn = document.createElement('button');
	hamburguerBtn.classList.add('dish-btn', 'hamburguer-btn');
	hamburguerBtn.textContent = 'Delivery!';

	hamburguerCard.append(hamburguerTitle, hamburguerFigure, hamburguerPrice, hamburguerDescription, hamburguerBtn);

	// Grilled chicken Card

	const chickenCard = document.createElement('div');
	chickenCard.classList.add('dish-card', 'chicken-card');
	dishesArticle.appendChild(chickenCard);

	const chickenTitle = document.createElement('h4');
	chickenTitle.classList.add('dish-title')
	chickenTitle.textContent = 'Grilled Chicken';
	const chickenFigure = document.createElement('figure');
	chickenFigure.classList.add('dish-fig', 'chicken-fig')
	const chickenImage = document.createElement('img');
	chickenImage.src = '../dist/img/menu-img/chicken.jpg';
	chickenImage.alt = 'grilled chicken';
	chickenImage.classList.add('dish-img', 'chicken-img');
	chickenFigure.appendChild(chickenImage);
	const chickenPrice = document.createElement('p');
	chickenPrice.textContent = 'Pricing: $16.80';
	const chickenDescription = document.createElement('p');
	chickenDescription.textContent = 'Grilled chicken, as you read it. It can be order alongside with fries or salad.';
	const chickenBtn = document.createElement('button');
	chickenBtn.classList.add('dish-btn', 'chicken-btn');
	chickenBtn.textContent = 'Delivery!';

	chickenCard.append(chickenTitle, chickenFigure, chickenPrice, chickenDescription, chickenBtn);

	//----- DRINKS

	const drinksHeading = document.createElement('h2');
	drinksHeading.classList.add('menu-heading')
	drinksHeading.textContent = 'Our Drinks';
	menuContainer.appendChild(drinksHeading);
	
	const drinksArticle = document.createElement('article');
	drinksArticle.classList.add('drinks-article');
	menuContainer.appendChild(drinksArticle);


	// Soda

	const sodaCard = document.createElement('div');
	sodaCard.classList.add('drink-card', 'soda-card');
	drinksArticle.appendChild(sodaCard);

	const sodaTitle = document.createElement('h4');
	sodaTitle.classList.add('drink-title')
	sodaTitle.textContent = '2lts Soda';
	const sodaFigure = document.createElement('figure');
	sodaFigure.classList.add('drink-fig', 'soda-fig')
	const sodaImage = document.createElement('img');
	sodaImage.src = '../dist/img/drinks-img/sodas.jpg';
	sodaImage.alt = '2 litres sodas';
	sodaImage.classList.add('drink-img', 'soda-img');
	sodaFigure.appendChild(sodaImage);
	const sodaPrice = document.createElement('p');
	sodaPrice.textContent = 'Pricing: $8.55';
	const sodaDescription = document.createElement('p');
	sodaDescription.textContent = 'Soda for the sweet teeth. Be it coke, Fanta or Sprite. Order whatever you prefer.';
	const sodaBtn = document.createElement('button');
	sodaBtn.classList.add('drink-btn', 'soda-btn');
	sodaBtn.textContent = 'Delivery!';

	sodaCard.append(sodaTitle, sodaFigure, sodaPrice, sodaDescription, sodaBtn);

	// Malbec wine Card

	const malbecCard = document.createElement('div');
	malbecCard.classList.add('drink-card', 'malbec-card');
	drinksArticle.appendChild(malbecCard);

	const malbecTitle = document.createElement('h4');
	malbecTitle.classList.add('drink-title')
	malbecTitle.textContent = 'Malbec Wine';
	const malbecFigure = document.createElement('figure');
	malbecFigure.classList.add('drink-fig', 'malbec-fig')
	const malbecImage = document.createElement('img');
	malbecImage.src = '../dist/img/drinks-img/malbec.jpg';
	malbecImage.alt = 'malbec wine bottle';
	malbecImage.classList.add('drink-img', 'malbec-img');
	malbecFigure.appendChild(malbecImage);
	const malbecPrice = document.createElement('p');
	malbecPrice.textContent = 'Pricing: $30.00';
	const malbecDescription = document.createElement('p');
	malbecDescription.textContent = 'Fine Malbec bottles. Different varieties and brands. Let yourself be happy.';
	const malbecBtn = document.createElement('button');
	malbecBtn.classList.add('drink-btn', 'malbec-btn');
	malbecBtn.textContent = 'Delivery!';

	malbecCard.append(malbecTitle, malbecFigure, malbecPrice, malbecDescription, malbecBtn);

	// Beer Quilmes Card

	const quilmesCard = document.createElement('div');
	quilmesCard.classList.add('drink-card', 'quilmes-card');
	drinksArticle.appendChild(quilmesCard);

	const quilmesTitle = document.createElement('h4');
	quilmesTitle.classList.add('drink-title')
	quilmesTitle.textContent = 'Quilmes Beer';
	const quilmesFigure = document.createElement('figure');
	quilmesFigure.classList.add('drink-fig', 'quilmes-fig')
	const quilmesImage = document.createElement('img');
	quilmesImage.src = '../dist/img/drinks-img/quilmes.jpg';
	quilmesImage.alt = 'quilmes beer bottle';
	quilmesImage.classList.add('drink-img', 'quilmes-img');
	quilmesFigure.appendChild(quilmesImage);
	const quilmesPrice = document.createElement('p');
	quilmesPrice.textContent = 'Pricing: $8.55';
	const quilmesDescription = document.createElement('p');
	quilmesDescription.textContent = 'Quilmes beer for the lupulus lovers! Just beware of knowing when is too much!';
	const quilmesBtn = document.createElement('button');
	quilmesBtn.classList.add('drink-btn', 'quilmes-btn');
	quilmesBtn.textContent = 'Delivery!';

	quilmesCard.append(quilmesTitle, quilmesFigure, quilmesPrice, quilmesDescription, quilmesBtn);

	// Syrah wine Card

	const syrahCard = document.createElement('div');
	syrahCard.classList.add('drink-card', 'syrah-card');
	drinksArticle.appendChild(syrahCard);

	const syrahTitle = document.createElement('h4');
	syrahTitle.classList.add('drink-title')
	syrahTitle.textContent = 'Syrah Wine';
	const syrahFigure = document.createElement('figure');
	syrahFigure.classList.add('drink-fig', 'syrah-fig')
	const syrahImage = document.createElement('img');
	syrahImage.src = '../dist/img/drinks-img/syr.jpg';
	syrahImage.alt = 'syrah wine bottle';
	syrahImage.classList.add('drink-img', 'syrah-img');
	syrahFigure.appendChild(syrahImage);
	const syrahPrice = document.createElement('p');
	syrahPrice.textContent = 'Pricing: $8.55';
	const syrahDescription = document.createElement('p');
	syrahDescription.textContent = 'Elegant syrah. The house favourite. Different varieties and brands evenly.';
	const syrahBtn = document.createElement('button');
	syrahBtn.classList.add('drink-btn', 'syrah-btn');
	syrahBtn.textContent = 'Delivery!';

	syrahCard.append(syrahTitle, syrahFigure, syrahPrice, syrahDescription, syrahBtn);

	// Gas water Card

	const gasWaterCard = document.createElement('div');
	gasWaterCard.classList.add('drink-card', 'gas-water-card');
	drinksArticle.appendChild(gasWaterCard);

	const gasWaterTitle = document.createElement('h4');
	gasWaterTitle.classList.add('drink-title')
	gasWaterTitle.textContent = 'Gas Water';
	const gasWaterFigure = document.createElement('figure');
	gasWaterFigure.classList.add('drink-fig', 'gas-water-fig')
	const gasWaterImage = document.createElement('img');
	gasWaterImage.src = '../dist/img/drinks-img/gas-water.jpg';
	gasWaterImage.alt = 'Gas Water';
	gasWaterImage.classList.add('drink-img', 'gas-water-img');
	gasWaterFigure.appendChild(gasWaterImage);
	const gasWaterPrice = document.createElement('p');
	gasWaterPrice.textContent = 'Pricing: $7.00';
	const gasWaterDescription = document.createElement('p');
	gasWaterDescription.textContent = 'Gas water for mixed sensations. Refreshing and pure for the thirsty.';
	const gasWaterBtn = document.createElement('button');
	gasWaterBtn.classList.add('drink-btn', 'gas-water-btn');
	gasWaterBtn.textContent = 'Delivery!';

	gasWaterCard.append(gasWaterTitle, gasWaterFigure, gasWaterPrice, gasWaterDescription, gasWaterBtn);

	// Whisky

	const whiskyCard = document.createElement('div');
	whiskyCard.classList.add('drink-card', 'whisky-card');
	drinksArticle.appendChild(whiskyCard);

	const whiskyTitle = document.createElement('h4');
	whiskyTitle.classList.add('drink-title')
	whiskyTitle.textContent = 'Whisky';
	const whiskyFigure = document.createElement('figure');
	whiskyFigure.classList.add('drink-fig', 'whisky-fig')
	const whiskyImage = document.createElement('img');
	whiskyImage.src = '../dist/img/drinks-img/whisky.jpg';
	whiskyImage.alt = 'whisky';
	whiskyImage.classList.add('drink-img', 'whisky-img');
	whiskyFigure.appendChild(whiskyImage);
	const whiskyPrice = document.createElement('p');
	whiskyPrice.textContent = 'Pricing: from $40.00';
	const whiskyDescription = document.createElement('p');
	whiskyDescription.textContent = 'Whisky for the gentleman. Price may vary depending on the brand you order.';
	const whiskyBtn = document.createElement('button');
	whiskyBtn.classList.add('drink-btn', 'gas-water-btn');
	whiskyBtn.textContent = 'Delivery!';

	whiskyCard.append(whiskyTitle, whiskyFigure, whiskyPrice, whiskyDescription, whiskyBtn);

	// Mineral water Card

	const waterCard = document.createElement('div');
	waterCard.classList.add('drink-card', 'water-card');
	drinksArticle.appendChild(waterCard);

	const waterTitle = document.createElement('h4');
	waterTitle.classList.add('drink-title')
	waterTitle.textContent = 'Mineral Water';
	const waterFigure = document.createElement('figure');
	waterFigure.classList.add('drink-fig', 'water-fig')
	const waterImage = document.createElement('img');
	waterImage.src = '../dist/img/drinks-img/mineral-water.jpg';
	waterImage.alt = 'mineral water bottle';
	waterImage.classList.add('drink-img', 'water-img');
	waterFigure.appendChild(waterImage);
	const waterPrice = document.createElement('p');
	waterPrice.textContent = 'Pricing: $5.00';
	const waterDescription = document.createElement('p');
	waterDescription.textContent = 'Pure, clear and clean mineral water. Healthiest alternative for your wellbeing.';
	const waterBtn = document.createElement('button');
	waterBtn.classList.add('drink-btn', 'water-btn');
	waterBtn.textContent = 'Delivery!';

	waterCard.append(waterTitle, waterFigure, waterPrice, waterDescription, waterBtn);

	// Fruits juice Card

	const juiceCard = document.createElement('div');
	juiceCard.classList.add('drink-card', 'juice-card');
	drinksArticle.appendChild(juiceCard);

	const juiceTitle = document.createElement('h4');
	juiceTitle.classList.add('drink-title')
	juiceTitle.textContent = 'Fruits Juice';
	const juiceFigure = document.createElement('figure');
	juiceFigure.classList.add('drink-fig', 'juice-fig')
	const juiceImage = document.createElement('img');
	juiceImage.src = '../dist/img/drinks-img/juice.jpg';
	juiceImage.alt = 'fruits juice';
	juiceImage.classList.add('drink-img', 'juice-img');
	juiceFigure.appendChild(juiceImage);
	const juicePrice = document.createElement('p');
	juicePrice.textContent = 'Pricing: $13.60';
	const juiceDescription = document.createElement('p');
	juiceDescription.textContent = 'Fruits juice, our colorful alternatives. It can be ordered with a little of liquor too.';
	const juiceBtn = document.createElement('button');
	juiceBtn.classList.add('drink-btn', 'juice-btn');
	juiceBtn.textContent = 'Delivery!';

	juiceCard.append(juiceTitle, juiceFigure, juicePrice, juiceDescription, juiceBtn);

	//---------------------------------------------
	// Adding ALL the page content to the container
	content.appendChild(pageContent);

}
export default MakeUpMenuPage;