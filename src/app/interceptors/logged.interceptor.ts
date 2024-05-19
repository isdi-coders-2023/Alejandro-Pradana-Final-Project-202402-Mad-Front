import { HttpInterceptorFn } from '@angular/common/http';
import { StateService } from '../services/state.service';
import { inject } from '@angular/core';

// Este interceptor HTTP añade un token de autorización a las solicitudes HTTP en caso de que el usuario esté autentificado. Se inyecta el servicio de estado para a continuación obtener el estado actual y el token. Se comprueba que el usuario esté logueado deja pasar la solicitud(req), entonces se le añade el token metiendolo en una variable y se devuelve la solicitud modificada con next.

export const loggedInterceptor: HttpInterceptorFn = (req, next) => {
  const stateService = inject(StateService);
  const { loginState, token } = stateService.state;

  if(loginState !== 'logged') {
    console.log(token);
    return next(req);
  }

  console.log('authInterceptor', token);
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(authReq);
};
