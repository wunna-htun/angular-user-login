import { browser, logging } from 'protractor';
import { UserlistPage } from './userlist.po';

describe('Userlist Page', () => {
  let page: UserlistPage;

  beforeEach(() => {
    page = new UserlistPage();
  });

  // it('should display the userlist table', () => {
  //   page.navigateTo();
  //   expect(page.isUserlistTableDisplayed()).toBeTruthy();
  // });

  // it('should display the correct number of users in the table', () => {
  //   page.navigateTo();
  //   expect(page.getUserCount()).toBeGreaterThan(0);
  // });

//   it('should delete a user from the table', () => {
//     page.navigateTo();
//     const initialUserCount = page.getUserCount();
//     page.deleteUser();
//     expect(page.getUserCount()).toBe(initialUserCount - 1);
//   });

//   afterEach(async () => {
//     // Assert that there are no errors logged in the browser console
//     const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//     expect(logs).not.toContain(jasmine.objectContaining({
//       level: logging.Level.SEVERE,
//     } as logging.Entry));
//   });
});