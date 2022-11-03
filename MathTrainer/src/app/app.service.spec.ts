import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';


describe('App service', () => {
  it('can do anything', () => {
    expect(1).toBe(1);
  });

  it('only + in question if only + as operator', () => {
    let service = new AppService()
    service.plus = true
    service.minus = false
    service.divide = false
    service.multiply = false
    service.createQuestions()
    for (let index = 0; index < service.getOperatorListForQuestions().length; index++) {
      expect(service.getOperatorListForQuestions()[index]).toBe('+');

    }

  });

  it('right default values', () => {
    let service = new AppService()

    expect(service.digits).toBe(1);
    expect(service.amountOfQuestions).toBe(10);

  });
});
