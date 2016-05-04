export class Ng2DemoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-demo-app-app h1')).getText();
  }
}
