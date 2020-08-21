import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultContentHeaderComponent } from './search-result-content-header.component';

describe('SearchResultContentHeaderComponent', () => {
  let component: SearchResultContentHeaderComponent;
  let fixture: ComponentFixture<SearchResultContentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultContentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
