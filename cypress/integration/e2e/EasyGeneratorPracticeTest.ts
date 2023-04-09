import { EasyGeneratorPracticeTestPage } from "../pageobjects/pages/EasyGeneratorPracticeTestPage";


/**
 * @author Lathika Herath
 * @description Initial test cases related to the easygenerator practice test page
 * @date 2023-04-8
 */

const easygeneratorpracticetestpage = new EasyGeneratorPracticeTestPage();



describe('Eaasy Generator Practice Test Page Coomponent Test Cases', () => {

    beforeEach('Load the easy generator practice test html page', () => {

        easygeneratorpracticetestpage
            .StepOpenLocalHtmlFile();
    })      


    it('Verify the selected option from the dropdown', () => {

        easygeneratorpracticetestpage
        .StepSelectValueFromDropDown("option2")
        .VerifyDropDownSelectedOption();

    })

    it('Verify the uploaded image availability', () => {
        easygeneratorpracticetestpage
        .StepUploadImage()
        .VerifyImageAvailability();
    })


    it('Verify the new tab open scenario', () => {
        easygeneratorpracticetestpage
        .StepOpenNewTab();
        //TODO
    })


    it('Verify the conent of the text file', () => {
        easygeneratorpracticetestpage
        .VerifyTextFileConent();
    })


    it('Verify the alter popup content', () => {   
           
        
            easygeneratorpracticetestpage
            .StepEnterTextAlertTextField()
            .StepClickAlertButton()
            .VerifyAlertPopupText('Hello Hello from Easygenerator, share this practice page and share your knowledge');  
        
                
    })


    it('Verify the confirm popup content', () => {

        
        easygeneratorpracticetestpage
        .StepEnterTextAlertTextField()
        .StepClickConfirmButton()
        .VerifyConfirmPopupText('Hello Hello from Easygenerator, Are you sure you want to confirm?');
        
        
    })


    it('Verify the hidden component',() => {
        easygeneratorpracticetestpage
        .StepClickHideButton()
        .VerifyHideShowTextBoxInvisibility();
    })

    it('Verify the visibilty of the component',() => {
        easygeneratorpracticetestpage
        .StepClickShowButton()
        .VerifyHideShowTextBoxVisibility();
    })

    it('Verify the select component from the dynamic hover element', () => {
        easygeneratorpracticetestpage
        .StepPageScrollDown()
        .StepVisibilityMouseHoverOption()
        .StepClickTopOption();
    })



})