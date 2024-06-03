import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalfimComponent } from './modalfim.component';

describe('ModalfimComponent', () => {
  let component: ModalfimComponent;
  let fixture: ComponentFixture<ModalfimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalfimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalfimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
