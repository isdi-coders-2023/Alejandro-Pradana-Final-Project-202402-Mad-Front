import { CanActivateFn } from '@angular/router';
import { State, StateService } from '../services/state.service';
import { inject } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const loggedGuard: CanActivateFn = (_route, _state) => {
  const stateService = inject(StateService);
  const state: State = stateService.state;

  if(state.loginState !== 'logged') {
    console.log('Guard block navigate: LoginState', state.loginState);
    return false;
  }

  return true;
};
