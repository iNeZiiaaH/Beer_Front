import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryAddComponent } from './brewery-add.component';

describe('BreweryAddComponent', () => {
  let component: BreweryAddComponent;
  let fixture: ComponentFixture<BreweryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
