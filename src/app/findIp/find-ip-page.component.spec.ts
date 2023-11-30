import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FindIpPage } from './find-ip-page.component';

describe('Tab2Page', () => {
  let component: FindIpPage;
  let fixture: ComponentFixture<FindIpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindIpPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FindIpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
