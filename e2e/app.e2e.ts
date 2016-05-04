import { Ng2DemoAppPage } from './app.po';

describe('ng2-demo-app App', function() {
  let page: Ng2DemoAppPage;

  beforeEach(() => {
    page = new Ng2DemoAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-demo-app works!');
  });
});
