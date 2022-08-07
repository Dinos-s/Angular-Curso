import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesOepratorsComponent } from './pipes-oeprators.component';

describe('PipesOepratorsComponent', () => {
  let component: PipesOepratorsComponent;
  let fixture: ComponentFixture<PipesOepratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesOepratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesOepratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
