import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2DemoAppAppComponent } from '../app/ng2-demo-app.component';

beforeEachProviders(() => [Ng2DemoAppAppComponent]);

describe('App: Ng2DemoApp', () => {
  it('should create the app',
      inject([Ng2DemoAppAppComponent], (app: Ng2DemoAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-demo-app works!\'',
      inject([Ng2DemoAppAppComponent], (app: Ng2DemoAppAppComponent) => {
    expect(app.title).toEqual('ng2-demo-app works!');
  }));
});
