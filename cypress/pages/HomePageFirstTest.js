class SideBarMenu {
	getSideBarButton() {
		return cy.get(".css-7afvtf");
	}
	getLogOutButton() {
		return cy.get(":nth-child(9) > .css-bve2vl");
	}
}
export default SideBarMenu;
