import html from "./demo.html";
// import "./style.css";
import "./styleSCSS.scss";
import { headerComponent } from "./js/components/header/header";
import { mainComponent } from "./js/components/mainContent/mainContent";
import { footerComponent } from "./js/components/footer/footer";
import { menuComponent } from "./js/components/menuContent/menuContent";

const bodyContent = document.querySelector("#content");
//homepage components
const header = headerComponent();
const mainContent = mainComponent();
const footer = footerComponent();
//menu page components
const menu = menuComponent();

window.onload = () => {
	renderHomePage();
	// bodyContent.append(header, mainContent, footer);
};

//render menu page on click
const headerNav1 = document.querySelector("#header-nav1");
headerNav1.addEventListener("click", renderMenuPage);
function renderMenuPage() {
	bodyContent.append(header, menu, footer);
}
//render home page on logo click
const headerLogo = document.querySelector("#header-logo");
headerLogo.addEventListener("click", renderHomePage);
function renderHomePage() {
	bodyContent.append(header, mainContent, footer);
}

const ghpages = require("gh-pages");

ghpages.publish("dist", function (err) {
	console.error(err);
});
