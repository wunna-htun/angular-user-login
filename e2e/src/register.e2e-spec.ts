import { browser } from 'protractor';
import { RegisterPage } from './register.po';

describe('RegisterPage', () => {
  let page: RegisterPage;

  beforeEach(() => {
    page = new RegisterPage();
    // Navigate to the register page
    browser.get('/register');
  });

  it('should display the register form', () => {
    expect(page.getUsernameInput().isDisplayed()).toBeTruthy();
    expect(page.getEmailInput().isDisplayed()).toBeTruthy();
    expect(page.getPasswordInput().isDisplayed()).toBeTruthy();
    expect(page.getTermsCheckbox().isDisplayed()).toBeTruthy();
    expect(page.getSubmitButton().isDisplayed()).toBeTruthy();
  });

  it('should register a user', () => {
    const username = 'testuser1';
    const email = 'test1@example.com';
    const password = 'password1';

    page.getUsernameInput().sendKeys(username);
    page.getEmailInput().sendKeys(email);
    page.getPasswordInput().sendKeys(password);
    page.getTermsCheckbox().click();
    page.getSubmitButton().click();

    // Perform assertions or navigate to a different page after successful registration
    expect(browser.getCurrentUrl()).toContain('/login');
    // Additional assertions or navigation logic
  });

//   it('should display error for invalid email', () => {
//     const invalidEmail = 'invalid-email';

//     page.getEmailInput().sendKeys(invalidEmail);
//     page.getSubmitButton().click();

//     expect(page.getErrorText()).toContain('You must enter a valid email');
//     // Additional assertions or error handling logic
//   });

  // Add more test cases as needed
});