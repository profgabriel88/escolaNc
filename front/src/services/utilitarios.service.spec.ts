/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UtilitariosService } from './utilitarios.service';

describe('Service: Utilitarios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilitariosService]
    });
  });

  it('should ...', inject([UtilitariosService], (service: UtilitariosService) => {
    expect(service).toBeTruthy();
  }));
});
