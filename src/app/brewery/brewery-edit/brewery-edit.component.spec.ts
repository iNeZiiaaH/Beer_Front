import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryEditComponent } from './brewery-edit.component';

describe('BreweryEditComponent', () => {
  let component: BreweryEditComponent;
  let fixture: ComponentFixture<BreweryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
