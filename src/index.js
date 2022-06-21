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
bodyContent.appendChild(component());
