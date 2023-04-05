// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import LoginPageFirst from "../pages/LoginFirstTest";
import LoginPageSecond from "../pages/LoginSecondTest";

Cypress.Commands.add("loginFirst", (useremail, password) => {
	const loginPageFirst = new LoginPageFirst();

	loginPageFirst.getLoginInput(useremail).type("user888@gmail.com");
	loginPageFirst.getPasswordInput(password).type("1234567890");
	loginPageFirst.getSignInButton().click();
});

Cypress.Commands.add("loginSecond", (useremail, password) => {
	const loginPageSecond = new LoginPageSecond();

	loginPageSecond.getLoginInput(useremail).type("testowyqa@qa.team");
	loginPageSecond.getPasswordInput(password).type("QA!automation-1");
	loginPageSecond.getSignInButton().click();
});
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
