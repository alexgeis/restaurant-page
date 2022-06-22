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
		divEl.appendChild(navEl);
		return divEl;
	};

	const renderHeader = () => {
		divElInner.append(renderLeftHead(), renderCenterHead(), renderRightHead());
		headerEl.appendChild(divElInner);
		bodyContent.appendChild(headerEl);
	};

	return { renderHeader };
})();
headerComponent.renderHeader();

//main content Homepage module
const mainComponent = (() => {
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
		divElInner.append(
			renderHeroContent(),
			renderMenuContent(),
			renderAboutContent()
		);
		mainEl.appendChild(divElInner);
		bodyContent.appendChild(mainEl);
	};

	return { renderMainComponent };
})();
mainComponent.renderMainComponent();

const footerComponent = (() => {
	//footer
	const footerEl = document.createElement("footer");
	//content-inner
	const divElInner = document.createElement("div");
	divElInner.classList.add("footer-inner");

	const renderFooterContent = () => {
		const formEl = document.createElement("form");

		const h1El = document.createElement("h1");
		h1El.setAttribute("id", "form-header");
		h1El.textContent = "SIGN UP FOR NEWSLETTER";

		const pEl = document.createElement("p");
		pEl.setAttribute("id", "form-sub-header");
		pEl.textContent =
			"Our monthly newsletter with all the latest news, recipes, playlists, and offers.";

		const divEl = document.createElement("div");
		divEl.classList.add("form-grid");
		//form require text
		const formReqTextEl = document.createElement("div");
		formReqTextEl.setAttribute("id", "form-req-text");
		formReqTextEl.textContent = "*Please fill out these fields";
		//empty div
		const emptyDivEl = document.createElement("div");
		//first name div
		const firstNameDivEl = document.createElement("div");
		firstNameDivEl.classList.add("form-grid-unit");
		const firstNameLabel = document.createElement("label");
		firstNameLabel.setAttribute("for", "firstName");
		firstNameLabel.textContent = "First Name *";
		const firstNameInput = document.createElement("input");
		firstNameInput.setAttribute("type", "text");
		firstNameInput.setAttribute("name", "firstName");
		firstNameInput.setAttribute("id", "firstName");

		firstNameDivEl.append(firstNameLabel, firstNameInput);
		//email div
		const emailDivEl = document.createElement("div");
		emailDivEl.classList.add("form-grid-unit");
		const emailLabel = document.createElement("label");
		emailLabel.setAttribute("for", "email");
		emailLabel.textContent = "Email *";
		const emailInput = document.createElement("input");
		emailInput.setAttribute("type", "email");
		emailInput.setAttribute("name", "email");
		emailInput.setAttribute("id", "email");

		emailDivEl.append(emailLabel, emailInput);
		//date of birth div
		const birthdayDivEl = document.createElement("div");
		birthdayDivEl.classList.add("form-grid-unit");
		const birthdayLabel = document.createElement("label");
		birthdayLabel.setAttribute("for", "dateOfBirth");
		birthdayLabel.textContent = "Date of Birth *";
		const birthdayInput = document.createElement("input");
		birthdayInput.setAttribute("type", "date");
		birthdayInput.setAttribute("name", "dateOfBirth");
		birthdayInput.setAttribute("id", "dateOfBirth");

		birthdayDivEl.append(birthdayLabel, birthdayInput);
		//phone number div
		const phoneDivEl = document.createElement("div");
		phoneDivEl.classList.add("form-grid-unit");
		const phoneLabel = document.createElement("label");
		phoneLabel.setAttribute("for", "phone");
		phoneLabel.textContent = "Mobile";
		const phoneInput = document.createElement("input");
		phoneInput.setAttribute("type", "number");
		phoneInput.setAttribute("name", "phone");
		phoneInput.setAttribute("id", "phone");

		phoneDivEl.append(phoneLabel, phoneInput);
		//gender selection div
		const genderDivEl = document.createElement("div");
		genderDivEl.classList.add("form-grid-unit");
		const genderLabel = document.createElement("label");
		genderLabel.setAttribute("for", "gender");
		genderLabel.textContent = "Gender";
		const genderSelect = document.createElement("select");
		genderSelect.setAttribute("name", "gender");
		genderSelect.setAttribute("id", "gender-select");
		const option1Gender = document.createElement("option");
		option1Gender.setAttribute("value", "");
		option1Gender.textContent = "--Please choose--";
		const option2Gender = document.createElement("option");
		option2Gender.setAttribute("value", "male");
		option2Gender.textContent = "Male";
		const option3Gender = document.createElement("option");
		option3Gender.setAttribute("value", "female");
		option3Gender.textContent = "Female";
		const option4Gender = document.createElement("option");
		option4Gender.setAttribute("value", "noInput");
		option4Gender.textContent = "Prefer not to say";

		genderSelect.append(
			option1Gender,
			option2Gender,
			option3Gender,
			option4Gender
		);
		genderDivEl.append(genderLabel, genderSelect);
		//question answer selection div
		const questionDivEl = document.createElement("div");
		questionDivEl.classList.add("form-grid-unit");
		const questionLabel = document.createElement("label");
		questionLabel.setAttribute("for", "favoriteDish");
		questionLabel.textContent = "Favorite menu item?";
		const questionSelect = document.createElement("select");
		questionSelect.setAttribute("name", "favoriteDish");
		questionSelect.setAttribute("id", "dish-select");
		const option1Question = document.createElement("option");
		option1Question.setAttribute("value", "");
		option1Question.textContent = "--Please choose--";
		const option2Question = document.createElement("option");
		option2Question.setAttribute("value", "coffee");
		option2Question.textContent = "Coffee";
		const option3Question = document.createElement("option");
		option3Question.setAttribute("value", "pie");
		option3Question.textContent = "Pie";
		const option4Question = document.createElement("option");
		option4Question.setAttribute("value", "all");
		option4Question.textContent = "All (can't decide)";

		questionSelect.append(
			option1Question,
			option2Question,
			option3Question,
			option4Question
		);
		questionDivEl.append(questionLabel, questionSelect);

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

	const renderFooterComponent = () => {
		divElInner.append(
			renderHeroContent(),
			renderMenuContent(),
			renderAboutContent()
		);
		mainEl.appendChild(divElInner);
		bodyContent.appendChild(mainEl);
	};

	return { renderFooterComponent };
})();
// mainComponent.renderMainComponent();
