import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPage  } from './modif.page';

describe('ModifPage ', () => {
  let component: ModifPage ;
  let fixture: ComponentFixture<ModifPage >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifPage );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
