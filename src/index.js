import html from "./demo.html";
import "./style.css";
import { headerComponent } from "./js/components/header/header";
import { mainComponent } from "./js/components/mainContent/mainContent";
import { footerComponent } from "./js/components/footer/footer";

const bodyContent = document.querySelector("#content");
//homepage components
const header = headerComponent();
const mainContent = mainComponent();
const footer = footerComponent();

window.onload = () => {
	bodyContent.append(header, mainContent, footer);
};
