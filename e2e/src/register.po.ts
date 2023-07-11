import { by, element } from 'protractor';

export class RegisterPage {
  // Getters for page elements
  getUsernameInput() {
    return element(by.id('name'));
  }

  getEmailInput() {
    return element(by.id('email'));
  }

  getPasswordInput() {
    return element(by.id('password'));
  }

  getTermsCheckbox() {
    return element(by.id('terms'));
  }

  getSubmitButton() {
    return element(by.css('button[type="submit"]'));
  }
}
