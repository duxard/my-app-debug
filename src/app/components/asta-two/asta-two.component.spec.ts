import { AstaTwoComponent } from './asta-two.component';

describe('AstaTwoComponent', () => {
  let component: AstaTwoComponent;

  beforeEach(() => {
    component = new AstaTwoComponent();
  });

  it('should inc the value', () => {
    let res = 0;
    component.counterEmitter.subscribe((v: any) => res = v);
    component.inc();
    expect(res).toBe(1);
  });

});
