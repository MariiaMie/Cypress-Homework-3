/// <reference types="cypress" />

import SideBarMenu from "../pages/HomePageSecondTest";

describe("Drugi test", () => {
	it("Drugie logowanie na stronie edukacyjnej LMS", () => {
		cy.visit("https://www.edu.goit.global/account/login");
		cy.loginSecond("useremail", "password");
		// cy.get("#user_email")
		// 	.type("testowyqa@qa.team")
		// 	.should("have.value", "testowyqa@qa.team");
		// cy.get("#user_password")
		// 	.type("QA!automation-1")
		// 	.should("have.value", "QA!automation-1");
		// cy.get(".eckniwg2").click();

		const sideBarMenu = new SideBarMenu();
		sideBarMenu.getSideBarButton().click();
		sideBarMenu.getLogOutButton().contains("Log out").click();

		// cy.get(".css-7afvtf").click();
		// cy.get(":nth-child(7) > .css-bve2vl").click();
	});
});
