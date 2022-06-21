import "./style.css";

function component() {
	const element = document.createElement("div");
	element.textContent = "hello world!";
	element.classList.add("hello");
	return element;
}
document.body.appendChild(component());
