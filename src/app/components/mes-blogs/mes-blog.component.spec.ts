import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesBlogComponent } from './mes-blog.component';

describe('BlogsBoxComponent', () => {
  let component: MesBlogComponent;
  let fixture: ComponentFixture<MesBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
