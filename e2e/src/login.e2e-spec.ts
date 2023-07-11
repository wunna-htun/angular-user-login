import { LoginPage } from './login.po';
import { browser } from 'protractor';

describe('Login test', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should navigate to the login page and login successfully with correct credentials', async () => {
    await page.navigateToLoginPage();
    expect(await page.getLoginTitle()).toEqual('Blazon Group');

    page.enterEmail('op@mail.com');
    page.enterPassword('12345678');
    page.clickLoginButton();

    expect(browser.getCurrentUrl()).toContain('/dashboard');
    browser.sleep(3000);
  });

  // it('should show an error message for incorrect credentials', async () => {
  //   await page.navigateToLoginPage();
  //   expect(await page.getLoginTitle()).toEqual('Sign in to your account');

  //   page.enterEmail('wrong@mail.com');
  //   page.enterPassword('wrongpassword');
  //   page.clickLoginButton();

  //   expect(await page.getErrorMessage()).toEqual('Invalid username or password');
  //   browser.sleep(3000);
  // });


});