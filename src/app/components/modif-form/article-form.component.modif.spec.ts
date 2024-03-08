import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifFormComponent } from './article-form.component.modif';

describe('ModifFormComponent', () => {
  let component: ModifFormComponent;
  let fixture: ComponentFixture<ModifFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
