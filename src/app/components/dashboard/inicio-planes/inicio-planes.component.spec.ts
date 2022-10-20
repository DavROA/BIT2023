import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPlanesComponent } from './inicio-planes.component';

describe('InicioPlanesComponent', () => {
  let component: InicioPlanesComponent;
  let fixture: ComponentFixture<InicioPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
