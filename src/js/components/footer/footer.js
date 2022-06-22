//footer module
export default footerComponent = function () {
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
		//append form sections to form element
		divEl.append(
			formReqTextEl,
			emptyDivEl,
			firstNameDivEl,
			emailDivEl,
			birthdayDivEl,
			phoneDivEl,
			genderDivEl,
			questionDivEl
		);
		//full component appending
		formEl.append(h1El, pEl, divEl);
		return formEl;
	};

	const renderFooterComponent = () => {
		divElInner.appendChild(renderFooterContent());
		footerEl.appendChild(divElInner);
		bodyContent.appendChild(footerEl);
	};

	return renderFooterComponent();
	return { renderFooterComponent };
};
