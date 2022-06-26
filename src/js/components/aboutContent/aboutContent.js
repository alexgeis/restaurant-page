import coffee from "../../../assets/coffee.jpg";
import downCarot from "../../../assets/down-carot.png";

//about content module
function aboutComponent() {
	//main
	const mainEl = document.createElement("main");
	mainEl.classList.add("content-container");
	//content-inner
	const divElInner = document.createElement("div");
	divElInner.classList.add("content-inner");

	const renderHeroContent = () => {
		const sectionEl = document.createElement("section");
		sectionEl.classList.add("content-section");
		sectionEl.setAttribute("id", "hero-about");

		const divEl = document.createElement("div");
		divEl.classList.add("main-content");
		divEl.setAttribute("id", "hero-about-content");
		divEl.textContent = "Always delicious";

		const div2El = document.createElement("div");
		div2El.setAttribute("id", "hero-scroll");

		const aEl = document.createElement("a");
		aEl.setAttribute("id", "scroll-link");
		aEl.setAttribute("href", "#about");

		const div3El = document.createElement("div");
		div3El.setAttribute("style", "color:white;");
		div3El.textContent = "SCROLL";
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

	const renderAboutContent = () => {
		const sectionEl = document.createElement("section");
		sectionEl.classList.add("content-section");
		sectionEl.setAttribute("id", "about");

		const mainContentEl = document.createElement("div");
		mainContentEl.classList.add("about-main-content");

		const aboutHeaderEl = document.createElement("div");
		aboutHeaderEl.setAttribute("id", "about-header");
		aboutHeaderEl.textContent = "ABOUT";
		const aboutContent = document.createElement("div");
		aboutContent.setAttribute("id", "about-content");
		aboutContent.textContent =
			"For three generations, our signature huckleberry pie has been putting smiles on faces. We're not stopping yet! You've always got a seat at the Double R, where friends serve friends, and the coffee's always fresh and Norma makes all the pies.";

		mainContentEl.append(aboutHeaderEl, aboutContent);
		sectionEl.appendChild(mainContentEl);
		return sectionEl;
	};

	const renderAboutSection = () => {
		divElInner.append(renderHeroContent(), renderAboutContent());
		mainEl.appendChild(divElInner);
		return mainEl;
	};

	return renderAboutSection();
}

export { aboutComponent };
