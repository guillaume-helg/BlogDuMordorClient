import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsBoxComponent } from './blogs-box.component';

describe('BlogsBoxComponent', () => {
  let component: BlogsBoxComponent;
  let fixture: ComponentFixture<BlogsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
