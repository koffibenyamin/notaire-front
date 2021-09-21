import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierCreerComponent } from './dossier-creer.component';

describe('DossierCreerComponent', () => {
  let component: DossierCreerComponent;
  let fixture: ComponentFixture<DossierCreerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierCreerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierCreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
