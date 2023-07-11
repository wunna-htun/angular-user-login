import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateToLoginPage() {
    return browser.get('/login');
  }

  getLoginTitle() {
    return element(by.css('#loginTitle')).getText();
  }

  enterEmail(email: string) {
    const emailInput = element(by.css('#email'));
    emailInput.clear();
    emailInput.sendKeys(email);
  }

  enterPassword(password: string) {
    const passwordInput = element(by.css('#password'));
    passwordInput.clear();
    passwordInput.sendKeys(password);
  }

  clickLoginButton() {
    const loginButton = element(by.css('button[type="submit"]'));
    loginButton.click();
  }
  
  // getErrorMessage() {
  //   return element(by.css('.error-message')).getText();
  // }
}