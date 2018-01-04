import { TestBed, inject } from '@angular/core/testing';
import { AppComponent } from './../../app.component';
import { CalculadoraService } from './calculadora.service';
import { CalculadoraModule } from './../calculadora.module';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[AppComponent],

      imports:[CalculadoraModule]
    });
  });

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));
});
