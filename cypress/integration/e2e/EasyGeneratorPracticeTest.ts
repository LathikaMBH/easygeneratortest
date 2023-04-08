import { EasyGeneratorPracticeTestPage } from "../pageobjects/pages/EasyGeneratorPracticeTestPage";
import { testdata } from "../../fixtures/testdata.json";


const easygeneratorpracticetestpage = new EasyGeneratorPracticeTestPage();



describe('Eaasy Generator Practice Test Page Coomponent Test Cases', () => {

    beforeEach('Load the easy generator practice test html page', () => {

        easygeneratorpracticetestpage
            .StepOpenLocalHtmlFile();
    })   

    before('Reading data from fixture file', () =>{
        // cy.fixture('testdata').then(() => {
        //     const mydata = testdata
        // })
    })

    xit('Verify the selected option from the dropdown', () => {

        easygeneratorpracticetestpage
        .StepSelectValueFromDropDown("option2")
        .VerifyDropDownSelectedOption();

    })

    xit('Verify the uploaded image availability', () => {
        easygeneratorpracticetestpage
        .StepUploadImage()
        .VerifyImageAvailability();
    })


    xit('Verify the new tab open scenario', () => {
        easygeneratorpracticetestpage
        .StepOpenNewTab();
        //TODO
    })


    xit('Verify the conent of the text file', () => {
        easygeneratorpracticetestpage
        .VerifyTextFileConent();
    })


    it('Verify the alter popup content', () => {   
           
        easygeneratorpracticetestpage
        .StepEnterTextAlertTextField()
        .StepClickAlertButton()
        .VerifyAlertPopupText(testdata.alertPopupContent);
        
    })


    xit('Verify the confirm popup content', () => {
        easygeneratorpracticetestpage
        .StepEnterTextAlertTextField()
        .StepClickConfirmButton()
        .VerifyConfirmPopupText('Hello Hello from Easygenerator, Are you sure you want to confirm?');
        
    })


    xit('Verify the hidden component',() => {
        easygeneratorpracticetestpage
        .StepClickHideButton()
        .VerifyHideShowTextBoxInvisibility();
    })

    xit('Verify the visibilty of the component',() => {
        easygeneratorpracticetestpage
        .StepClickShowButton()
        .VerifyHideShowTextBoxVisibility();
    })

    xit('Verify the select component from the dynamic hover element', () => {
        easygeneratorpracticetestpage
        .StepPageScrollDown()
        .StepVisibilityMouseHoverOption()
        .StepClickTopOption();
    })



})