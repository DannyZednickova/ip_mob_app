import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { savedIps } from './saved-ips.component';

describe('Tab3Page', () => {
  let component: savedIps;
  let fixture: ComponentFixture<savedIps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [savedIps],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(savedIps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
