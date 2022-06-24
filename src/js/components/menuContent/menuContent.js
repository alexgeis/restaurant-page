import burgerFries from "../../../assets/burger-fries.jpg";
import downCarot from "../../../assets/down-carot.png";

//menu content module
function menuComponent() {
	//main
	const mainEl = document.createElement("main");
	mainEl.classList.add("content-container");
	//content-inner
	const divElInner = document.createElement("div");
	divElInner.classList.add("content-inner");

	const renderHeroContent = () => {
		const sectionEl = document.createElement("section");
		sectionEl.classList.add("content-section");
		sectionEl.setAttribute("id", "hero-menu");

		const divEl = document.createElement("div");
		divEl.classList.add("main-content");
		divEl.setAttribute("id", "hero-menu-content");
		divEl.textContent = "Keeping 'em coming back for more";

		const div2El = document.createElement("div");
		div2El.setAttribute("id", "hero-scroll");

		const aEl = document.createElement("a");
		aEl.setAttribute("id", "scroll-link");
		aEl.setAttribute("href", "#food");

		const div3El = document.createElement("div");
		div3El.setAttribute("style", "color:white;");
		div3El.textContent = "SCROLL";
		//SVG SCROLL ARROW
		// const svgScrollEl = document.createElement("svg");
		// svgScrollEl.setAttribute("width", "24");
		// svgScrollEl.setAttribute("height", "24");
		// svgScrollEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		// svgScrollEl.setAttribute("fill-rule", "evenodd");
		// svgScrollEl.setAttribute("clip-rule", "evenodd");
		// const pathScrollEl = document.createElement("path");
		// pathScrollEl.setAttribute(
		// 	"d",
		// 	"M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"
		// );
		// IMG SCROLL ARROW
		const scrollImgEl = document.createElement("img");
		scrollImgEl.setAttribute("id", "scroll-arrow");
		scrollImgEl.setAttribute("src", downCarot);
		scrollImgEl.setAttribute("alt", "down arrow");

		aEl.append(div3El, scrollImgEl);
		div2El.appendChild(aEl);
		//full component appending
		sectionEl.append(divEl, div2El);
		return sectionEl;
	};

	const renderFoodContent = () => {
		const sectionEl = document.createElement("section");
		sectionEl.classList.add("content-section");
		sectionEl.setAttribute("id", "food");

		const mainContentEl = document.createElement("div");
		mainContentEl.classList.add("menu-main-content");

		const foodHeaderEl = document.createElement("div");
		foodHeaderEl.setAttribute("id", "food-header");
		foodHeaderEl.textContent = "FOOD";
		const foodMenu = document.createElement("div");
		foodMenu.setAttribute("id", "food-menu");

		const breakfastH4El = document.createElement("h4");
		breakfastH4El.textContent = "Breakfast";
		const renderBreakfastContent = () => {
			const breakfastUlEl = document.createElement("ul");
			const breakfastLiEl1 = document.createElement("li");
			breakfastLiEl1.textContent = "2 Eggs, Any Style - $4.00";
			const breakfastLiEl2 = document.createElement("li");
			breakfastLiEl2.textContent = "The 'Double' R - $7.00";
			const breakfastLiEl3 = document.createElement("li");
			breakfastLiEl3.textContent = "Omelette with Cheese - $5.25";
			const breakfastLiEl4 = document.createElement("li");
			breakfastLiEl4.textContent = "French Toast - $6.50";
			const breakfastLiEl5 = document.createElement("li");
			breakfastLiEl5.textContent = "Pancakes or Waddles - $5.75";
			const breakfastLiEl6 = document.createElement("li");
			breakfastLiEl6.textContent = "Lumberjack Pancake Steak - $6.25";
			const breakfastLiEl7 = document.createElement("li");
			breakfastLiEl7.textContent = "Steak and Eggs - $9.95";

			breakfastUlEl.append(
				breakfastLiEl1,
				breakfastLiEl2,
				breakfastLiEl3,
				breakfastLiEl4,
				breakfastLiEl5,
				breakfastLiEl6,
				breakfastLiEl7
			);
			return breakfastUlEl;
		};

		const sandwichH4El = document.createElement("h4");
		sandwichH4El.textContent = "Sandwiches";
		const renderSandwichContent = () => {
			const sandwichUlEl = document.createElement("ul");
			const sandwichLiEl1 = document.createElement("li");
			sandwichLiEl1.textContent = "Quarter Pound Hamburger - $7.85";
			const sandwichLiEl2 = document.createElement("li");
			sandwichLiEl2.textContent = "Barkburger Special - $7.95";
			const sandwichLiEl3 = document.createElement("li");
			sandwichLiEl3.textContent = "Turkey Club - $8.49";
			const sandwichLiEl4 = document.createElement("li");
			sandwichLiEl4.textContent = "Roast Beef - $8.10";
			const sandwichLiEl5 = document.createElement("li");
			sandwichLiEl5.textContent = "Ham and Cheese - $5.95";
			const sandwichLiEl6 = document.createElement("li");
			sandwichLiEl6.textContent = "B. L. T. - $6.75";
			const sandwichLiEl7 = document.createElement("li");
			sandwichLiEl7.textContent = "The Redwood - $8.00";

			sandwichUlEl.append(
				sandwichLiEl1,
				sandwichLiEl2,
				sandwichLiEl3,
				sandwichLiEl4,
				sandwichLiEl5,
				sandwichLiEl6,
				sandwichLiEl7
			);
			return sandwichUlEl;
		};

		const dinnerH4El = document.createElement("h4");
		dinnerH4El.textContent = "Dinner";
		const renderDinnerContent = () => {
			const dinnerUlEl = document.createElement("ul");
			const dinnerLiEl1 = document.createElement("li");
			dinnerLiEl1.textContent = "B.B.Q. Ribs - $10.95";
			const dinnerLiEl2 = document.createElement("li");
			dinnerLiEl2.textContent = "Corned Beef - $8.95";
			const dinnerLiEl3 = document.createElement("li");
			dinnerLiEl3.textContent = "Steak 'T' Bone - $12.95";
			const dinnerLiEl4 = document.createElement("li");
			dinnerLiEl4.textContent = "Beef Stew - $8.49";
			const dinnerLiEl5 = document.createElement("li");
			dinnerLiEl5.textContent = "Chicken Fried Steak - $10.50";
			const dinnerLiEl6 = document.createElement("li");
			dinnerLiEl6.textContent = "Spaghetti with Meat Sauce - $7.95";
			const dinnerLiEl7 = document.createElement("li");
			dinnerLiEl7.textContent = "Catch O' the Day - Market Price";

			dinnerUlEl.append(
				dinnerLiEl1,
				dinnerLiEl2,
				dinnerLiEl3,
				dinnerLiEl4,
				dinnerLiEl5,
				dinnerLiEl6,
				dinnerLiEl7
			);
			return dinnerUlEl;
		};

		foodMenu.append(
			breakfastH4El,
			renderBreakfastContent(),
			sandwichH4El,
			renderSandwichContent(),
			dinnerH4El,
			renderDinnerContent()
		);
		mainContentEl.append(foodHeaderEl, foodMenu);
		sectionEl.appendChild(mainContentEl);
		return sectionEl;
	};

	const renderMenuComponent = () => {
		divElInner.append(renderHeroContent(), renderFoodContent());
		mainEl.appendChild(divElInner);
		return mainEl;
	};

	return renderMenuComponent();
}

export { menuComponent };
