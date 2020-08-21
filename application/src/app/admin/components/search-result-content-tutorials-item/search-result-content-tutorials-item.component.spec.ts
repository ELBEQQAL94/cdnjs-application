import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultContentTutorialsItemComponent } from './search-result-content-tutorials-item.component';

describe('SearchResultContentTutorialsItemComponent', () => {
  let component: SearchResultContentTutorialsItemComponent;
  let fixture: ComponentFixture<SearchResultContentTutorialsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultContentTutorialsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultContentTutorialsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
