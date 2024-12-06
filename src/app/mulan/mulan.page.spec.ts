import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MulanPage } from './mulan.page';

describe('MulanPage', () => {
  let component: MulanPage;
  let fixture: ComponentFixture<MulanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MulanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
