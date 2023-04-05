class SideBarMenu {
	getSideBarButton() {
		return cy.get(".css-7afvtf");
	}
	getLogOutButton() {
		return cy.get(":nth-child(7) > .css-bve2vl");
	}
}
export default SideBarMenu;
