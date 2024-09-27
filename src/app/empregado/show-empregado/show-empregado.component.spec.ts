import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmpregadoComponent } from './show-empregado.component';

describe('ShowEmpregadoComponent', () => {
  let component: ShowEmpregadoComponent;
  let fixture: ComponentFixture<ShowEmpregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowEmpregadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
