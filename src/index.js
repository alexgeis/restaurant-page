import html from "./demo.html";
import "./style.css";
import print from "./otherFunction.js";

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
	//header-inner
	const divElInner = document.createElement("div");

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
	};
	const renderCenterHead = () => {
		const divEl = document.createElement("div");
		divEl.classList.add("header-center");
		divEl.setAttribute("id", "headerCenter");

		const aEl = document.createElement("a");
		aEl.classList.add("header-nav-item");
		aEl.setAttribute("href", "#");

		const imgEl = document.createElement("img");
		imgEl.setAttribute("src", "./assets/rr-logo.png");
		imgEl.setAttribute("alt", "Double R Diner Logo");
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
	};

	const renderHeader = () => {
		header.append();
	};

	return { renderHeader };
})();
