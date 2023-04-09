/**
 * @author Lathika Herath
 * @description page object methods of the easygenerator practice test page
 * @date 2023-04-6
 */

export class EasyGeneratorPracticeTestPage {
  /**
   * User can open local html file by executing this method.
   * @returns easygeneratorpracticetestpage
   */
  StepOpenLocalHtmlFile() {
    //alert(Cypress.env("URL"))
    cy.visit(Cypress.env('URL'));
    return this;
  }

  /**
   * user can select value from the dropdown
   * @param option dropdown values which is send from the test level
   * @returns easygeneratorpracticetestpage
   */
  StepSelectValueFromDropDown(option: string) {
    cy.get('select').select(option);
    return this;
  }

  /**
   * user is able to verify the selected dropdown value
   * @returns easygeneratorpracticetestpage
   */
  VerifyDropDownSelectedOption() {
    cy.get('#dropdown-class-example').contains('Option2');
    return this;
  }

  /**
   * user can upload files/images from the method
   * @returns easygeneratorpracticetestpage
   */
  StepUploadImage() {
    cy.get('input[name="img"]').selectFile('././cypress/support/utils/images/LathikaHerath.jpg');
    return this;
  }

  /**
   * user is able to verify the uploaded image from thois method
   * @returns easygeneratorpracticetestpage
   */
  VerifyImageAvailability() {
    cy.get('img').should('be.visible');
    return this;
  }

  /**
   * user is able to open new tab in the same tab
   * @returns easygeneratorpracticetestpage
   */
  StepOpenNewTab() {
    cy.get('#opentab').invoke('removeAttr', 'target').click();
    return this;
  }

  /**
   * user ia able to open alert popup by clicking this alert button
   * @returns easygeneratorpracticetestpage
   */
  StepClickAlertButton() {
    cy.get('#alertbtn').click();
    return this;
  }

  /**
   * user is able to open confirm button
   * @returns easygeneratorpracticetestpage
   */
  StepClickConfirmButton() {
    cy.get('#confirmbtn').click();
    return this;
  }

  /**
   * user is able to verify the alert popup text by using this method
   * @param text alert popup text which is send from fixture file
   * @returns easygeneratorpracticetestpage
   */
  VerifyAlertPopupText(text: string) {
    cy.on('window:alert', (str) => {
      expect(str).to.equal(text);
    });
    return this;
  }

  /**
   * user ia able toverify the confirm popup text by using this method
   * @param text confirm popup text which is send from the fixture file
   * @returns easygeneratorpracticetestpage
   */
  VerifyConfirmPopupText(text: string) {
    cy.on('window:confirm', (str) => {
      expect(str).to.equal(text);
    });
    return this;
  }

  /**
   * user is able to read file content by using this method
   * @returns easygeneratorpracticetestpage
   */
  VerifyTextFileConent() {
    cy.readFile('././cypress/support/utils/docs/alert-text.txt').should('eq', 'Hello from Easygenerator\n');
    return this;
  }

  //TODO - enter above text to alert popup enter text area
  StepEnterTextAlertTextField() {
    cy.readFile('././cypress/support/utils/docs/alert-text.txt').then((textContent) =>
      cy.get('#name').type(textContent),
    );
    return this;
  }

  /**
   * user is able to enter name
   * @param name data will recievd from the fixture file
   * @returns
   */
  StepTypeNameAlertTextBox(name: string) {
    cy.get('#name').type(name);
    return this;
  }

  /**
   * user is able to verify the hide show text field visibility freom this method
   * @returns easygeneratorpracticetestpage
   */
  VerifyHideShowTextBoxVisibility() {
    cy.get('#displayed-text').should('be.visible');
    return this;
  }

  /**
   * user is able to type his name inside thetext box
   * @param myName user name which is send from fixture file
   * @returns easygeneratorpracticetestpage
   */
  StepEnterYourNameHideShowTextBox(myName: string) {
    cy.get('#displayed-text').type(myName);
    return this;
  }

  /**
   * user is able to hide the text box by clicking hide button
   * @returns easygeneratorpracticetestpage
   */
  StepClickHideButton() {
    cy.get('#hide-textbox').click();
    return this;
  }

  /**
   * user is able to verify the invisibility of the hide show text box
   * @returns easygeneratorpracticetestpage
   */
  VerifyHideShowTextBoxInvisibility() {
    cy.get('#displayed-text').should('not.be.visible');
    return this;
  }

  /**
   * user is able to click show button
   * @returns easygeneratorpracticetestpage
   */
  StepClickShowButton() {
    cy.get('#show-textbox').click();
    return this;
  }

  /**
   * user is able to get the visibility of the options
   * @returns easygeneratorpracticetestpage
   */
  StepVisibilityMouseHoverOption() {
    cy.get('.hover-container').trigger('mouseover');
    //Cypress.$('.hover-container').show();
    return this;
  }

  /**
   * user is able to select Top option from this method
   * @returns easygeneratorpracticetestpage
   */
  StepClickTopOption() {
    cy.contains('Top').click();
    return this;
  }

  /**
   * user is able to select Reload option from this method
   * @returns easygeneratorpracticetestpage
   */
  StepClickReloadOption() {
    cy.contains('Reload').click();
    return this;
  }

  StepPageScrollDown() {
    cy.scrollTo('center');
    return this;
  }
}
