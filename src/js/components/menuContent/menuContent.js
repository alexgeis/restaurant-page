import burgerFries from "../../../assets/burger-fries.jpg";
import downCarot from "../../../assets/down-carot.png";

//main content Homepage module
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
		divEl.setAttribute("id", "hero-content");
		divEl.textContent = "Keeping 'em coming back for more";

		const div2El = document.createElement("div");
		div2El.setAttribute("id", "hero-scroll");

		const aEl = document.createElement("a");
		aEl.setAttribute("id", "scroll-link");
		aEl.setAttribute("href", "#menu");

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
		mainContentEl.classList.add("main-content");

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
		foodMenu.append(breakfastH4El, renderBreakfastContent());
		mainContentEl.append(foodHeaderEl, foodMenu);
		sectionEl.appendChild(mainContentEl);
		return sectionEl;
	};

	const renderAboutContent = () => {
		const sectionEl = document.createElement("section");
		sectionEl.classList.add("content-section", "parallax");
		sectionEl.setAttribute("id", "about");

		const divEl = document.createElement("div");
		divEl.classList.add("main-content");
		divEl.setAttribute("id", "about-text");
		divEl.textContent = "ABOUT";

		sectionEl.appendChild(divEl);
		return sectionEl;
	};

	const renderMainComponent = () => {
		divElInner.append(
			renderHeroContent(),
			renderMenuContent(),
			renderAboutContent()
		);
		mainEl.appendChild(divElInner);
		// bodyContent.appendChild(mainEl);
		return mainEl;
	};

	// return { renderMainComponent };
	return renderMainComponent();
}

export { menuComponent };
