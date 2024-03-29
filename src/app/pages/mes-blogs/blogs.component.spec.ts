import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  MesBlogsComponent } from './blogs.component';

describe('HomeComponent', () => {
  let component:  MesBlogsComponent;
  let fixture: ComponentFixture< MesBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MesBlogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent( MesBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
