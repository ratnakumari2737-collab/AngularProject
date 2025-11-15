import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewellerynavbarComponent } from './jewellerynavbar.component';

describe('JewellerynavbarComponent', () => {
  let component: JewellerynavbarComponent;
  let fixture: ComponentFixture<JewellerynavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JewellerynavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JewellerynavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
