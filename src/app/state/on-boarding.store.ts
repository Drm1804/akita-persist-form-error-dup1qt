import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface OnBoardingState {
  stepOne: {
    form: {
      name: string;
      email: string;
    };
  };
  stepTwo: {
    form: {
      street: string;
      address: string;
      state: string;
    };
  };
  stepThree: {
    form: {
      children: number;
      childrenNames: string[]
    };
  };
}

export function createInitialState(): OnBoardingState {
  return {
    stepOne: {
      form: {
        name: 'name',
        email: 'email',
      }
    },
    stepTwo: {
      form: {
        street: 'street',
        address: 'address',
        state: 'state'
      }
    },
    stepThree: {
      form: {
        children: 2,
        childrenNames: ['ch1', 'ch2']
      }
    }
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'on-boarding' })
export class OnBoardingStore extends Store<OnBoardingState> {

  constructor() {
    super(createInitialState());
  }
}