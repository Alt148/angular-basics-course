import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCategoryJokeComponent } from './get-category-joke.component';

describe('GetCategoryJokeComponent', () => {
  let component: GetCategoryJokeComponent;
  let fixture: ComponentFixture<GetCategoryJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCategoryJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCategoryJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
