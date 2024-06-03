import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProximoComponent } from './modal-proximo.component';

describe('ModalProximoComponent', () => {
  let component: ModalProximoComponent;
  let fixture: ComponentFixture<ModalProximoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalProximoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalProximoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
