import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorregedoriaComponent } from './corregedoria.component';

describe('CorregedoriaComponent', () => {
  let component: CorregedoriaComponent;
  let fixture: ComponentFixture<CorregedoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorregedoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorregedoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
