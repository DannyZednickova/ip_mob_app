import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyIpGetModalPage } from './my-ip-get-modal.page';

describe('MyIpGetModalPage', () => {
  let component: MyIpGetModalPage;
  let fixture: ComponentFixture<MyIpGetModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyIpGetModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
