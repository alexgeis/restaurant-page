import html from "./demo.html";
import "./style.css";
import headerComponent from "./js/components/header/header";
import mainComponent from "./js/components/mainContent/mainContent";
import footerComponent from "./js/components/footer/footer";
import rrLogo from "./assets/rr-logo.png";

const bodyContent = document.querySelector("#content");

window.onload = () => {
	headerComponent();
	mainComponent();
	footerComponent();
};
