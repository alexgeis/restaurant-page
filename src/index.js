import html from "./demo.html";
import "./style.css";
import print from "./otherFunction.js";
import rrLogo from "./assets/rr-logo.png";

function component() {
	const element = document.createElement("div");
	element.textContent = "hello world!";
	element.classList.add("hello");
	print();
	return element;
}
const bodyContent = document.querySelector("#content");
// bodyContent.appendChild(component());

//header Homepage module
const headerComponent = (() => {
	//header
	const headerEl = document.createElement("header");
	headerEl.classList.add("header");
	//header-inner
	const divElInner = document.createElement("div");
	divElInner.classList.add("header-inner");

	const renderLeftHead = () => {
		const divEl = document.createElement("div");
		divEl.classList.add("header-left");
		divEl.setAttribute("id", "headerLeft");

		const navEl = document.createElement("nav");
		navEl.classList.add("header-nav");

		const aEl = document.createElement("a");
		aEl.classList.add("header-nav-item");
		aEl.setAttribute("id", "header-nav1");
		aEl.setAttribute("href", "#");
		aEl.textContent = "Nav Link 1";

		const a2El = document.createElement("a");
		a2El.classList.add("header-nav-item");
		a2El.setAttribute("id", "header-nav2");
		a2El.setAttribute("href", "#");
		a2El.textContent = "Nav Link 2";

		const a3El = document.createElement("a");
		a3El.classList.add("header-nav-item");
		a3El.setAttribute("id", "header-nav3");
		a3El.setAttribute("href", "#");
		a3El.textContent = "Nav Link 3";

		navEl.append(aEl, a2El, a3El);
		divEl.append(navEl);
		return divEl;
	};

	const renderCenterHead = () => {
		const divEl = document.createElement("div");
		divEl.classList.add("header-center");
		divEl.setAttribute("id", "headerCenter");

		const aEl = document.createElement("a");
		aEl.classList.add("header-nav-item");
		aEl.setAttribute("href", "#");

		const imgEl = document.createElement("img");
		imgEl.setAttribute("src", rrLogo);
		// imgEl.setAttribute("src", "assets/rr-logo.png");
		imgEl.setAttribute("alt", "Double R Diner Logo");

		aEl.appendChild(imgEl);
		divEl.append(aEl);
		return divEl;
	};

	const renderRightHead = () => {
		const divEl = document.createElement("div");
		divEl.classList.add("header-right");
		divEl.setAttribute("id", "headerRight");

		const navEl = document.createElement("nav");
		navEl.classList.add("header-nav");

		const a4El = document.createElement("a");
		a4El.classList.add("header-nav-item");
		a4El.setAttribute("id", "header-nav4");
		a4El.setAttribute("href", "#");
		a4El.textContent = "Nav Link 4";

		const a5El = document.createElement("a");
		a5El.classList.add("header-nav-item");
		a5El.setAttribute("id", "header-nav5");
		a5El.setAttribute("href", "#");
		a5El.textContent = "Nav Link 5";

		const a6El = document.createElement("a");
		a6El.classList.add("header-nav-item");
		a6El.setAttribute("id", "header-nav6");
		a6El.setAttribute("href", "#");
		a6El.textContent = "Nav Link 6";

		navEl.append(a4El, a5El, a6El);
		divEl.append(navEl);
		return divEl;
	};

	const renderHeader = () => {
		divElInner.append(renderLeftHead(), renderCenterHead(), renderRightHead());
		headerEl.append(divElInner);
		bodyContent.appendChild(headerEl);
	};

	return { renderHeader };
})();
headerComponent.renderHeader();

//main content Homepage module
const mainComponent = (() => {
	//header
	const mainEl = document.createElement("main");
	mainEl.classList.add("content-container");
	//header-inner
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

		const svgScrollEl = document.createElement("svg");
		svgScrollEl.setAttribute("width", "24");
		svgScrollEl.setAttribute("height", "24");
		svgScrollEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		svgScrollEl.setAttribute("fill-rule", "evenodd");
		svgScrollEl.setAttribute("clip-rule", "evenodd");

		const pathScrollEl = document.createElement("path");
		pathScrollEl.setAttribute(
			"d",
			"M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"
		);
		//hero scroll appending
		svgScrollEl.appendChild(pathScrollEl);
		aEl.append(div3El, svgScrollEl);
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
		divElInner.append(renderLeftHead(), renderCenterHead(), renderRightHead());
		headerEl.append(divElInner);
		bodyContent.appendChild(headerEl);
	};

	return { renderMainComponent };
})();
