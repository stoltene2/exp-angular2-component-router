import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MainAppComponent } from '../app/main-app.component';

beforeEachProviders(() => [MainAppComponent]);

describe('App: Ng2DemoApp', () => {
  it('should create the app',
      inject([MainAppComponent], (app: MainAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-demo-app works!\'',
      inject([MainAppComponent], (app: MainAppComponent) => {
    expect(app.title).toEqual('ng2-demo-app works!');
  }));
});
