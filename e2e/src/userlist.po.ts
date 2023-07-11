import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class UserlistPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  isUserlistTableDisplayed(): Promise<boolean> {
    return element(by.css('.overflow-x-auto')).isDisplayed() as Promise<boolean>;
  }

  getUserCount(): Promise<number> {
    return element.all(by.css('.bg-white.border-b')).count() as Promise<number>;
  }

  deleteUser(): void {
    const deleteLink = element(by.css('.font-medium.text-red-600'));
    deleteLink.click();
  }
}
