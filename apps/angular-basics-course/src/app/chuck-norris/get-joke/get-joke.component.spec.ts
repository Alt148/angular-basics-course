import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJokeComponent } from './get-joke.component';

describe('GetJokeComponent', () => {
  let component: GetJokeComponent;
  let fixture: ComponentFixture<GetJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
