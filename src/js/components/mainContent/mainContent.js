import downCarot from "../../../assets/down-carot.png";

//main content Homepage module
function mainComponent() {
	//main
	const mainEl = document.createElement("main");
	mainEl.classList.add("content-container");
	//content-inner
	const divElInner = document.createElement("div");
	divElInner.classList.add("content-inner");

	const renderHeroContent = () => {
		const sectionEl = document.createElement("section");
		sectionEl.classList.add("content-section");
		sectionEl.setAttribute("id", "hero");

		const divEl = document.createElement("div");
		divEl.classList.add("main-content");
		divEl.setAttribute("id", "hero-content");
		divEl.textContent = "Finest diner in twin peaks";

		const div2El = document.createElement("div");
		div2El.setAttribute("id", "hero-scroll");

		const aEl = document.createElement("a");
		aEl.setAttribute("id", "scroll-link");
		aEl.setAttribute("href", "#menu");

		const div3El = document.createElement("div");
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

		//hero scroll appending
		// SVG VERSION
		// svgScrollEl.appendChild(pathScrollEl);
		// aEl.append(div3El, svgScrollEl);

		aEl.append(div3El, scrollImgEl);
		div2El.appendChild(aEl);
		//full component appending
		sectionEl.append(divEl, div2El);
		return sectionEl;
	};

	const renderMenuContent = () => {
		const sectionEl = document.createElement("section");
		sectionEl.classList.add("content-section", "parallax");
		sectionEl.setAttribute("id", "menu");

		const divEl = document.createElement("div");
		divEl.classList.add("main-content");
		divEl.setAttribute("id", "menu-text");
		divEl.textContent = "MENU";

		sectionEl.appendChild(divEl);
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

export { mainComponent };
