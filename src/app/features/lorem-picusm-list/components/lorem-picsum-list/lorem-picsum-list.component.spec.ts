import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremPicsumListComponent } from './lorem-picsum-list.component';

describe('LoremPicsumListComponent', () => {
  let component: LoremPicsumListComponent;
  let fixture: ComponentFixture<LoremPicsumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoremPicsumListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoremPicsumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
