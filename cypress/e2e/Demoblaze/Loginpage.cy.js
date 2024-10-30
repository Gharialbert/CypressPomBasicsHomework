import LoginPage from "../../PageObjectModel/loginPage";

describe('Login tests', () => {
    const username = 'Test023'
    const password = 'test0123456'

    it('Test Login with valid username and password', () => {
        const loginPage = new LoginPage();
        loginPage.openSite();
        loginPage.openLoginForm();
        loginPage.login(username, password);
        loginPage.assertWelcomeMessage(username);
        loginPage.assertLoginOptionVisible();
    });
});
