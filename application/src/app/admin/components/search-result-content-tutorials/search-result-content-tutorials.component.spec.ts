import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultContentTutorialsComponent } from './search-result-content-tutorials.component';

describe('SearchResultContentTutorialsComponent', () => {
  let component: SearchResultContentTutorialsComponent;
  let fixture: ComponentFixture<SearchResultContentTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultContentTutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultContentTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
