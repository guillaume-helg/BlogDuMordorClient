import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonBlogComponent } from './mon-blog.component';

describe('BlogsBoxComponent', () => {
  let component: MonBlogComponent;
  let fixture: ComponentFixture<MonBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
