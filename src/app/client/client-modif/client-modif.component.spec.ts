import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientModifComponent } from './client-modif.component';

describe('ClientModifComponent', () => {
  let component: ClientModifComponent;
  let fixture: ComponentFixture<ClientModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
