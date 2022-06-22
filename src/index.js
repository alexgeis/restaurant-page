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
	const header = document.createElement("header");

	const renderLeftHead = () => {};
	const renderCenterHead = () => {};
	const renderRightHead = () => {};

	const renderHeader = () => {
		header.append();
	};

	return { renderHeader };
})();
