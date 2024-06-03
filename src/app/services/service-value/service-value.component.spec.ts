import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceVALUEComponent } from './service-value.component';

describe('ServiceVALUEComponent', () => {
  let component: ServiceVALUEComponent;
  let fixture: ComponentFixture<ServiceVALUEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceVALUEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceVALUEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
