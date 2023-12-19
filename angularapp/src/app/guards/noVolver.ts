import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const noVolver = () => {

  const router = inject(Router)

  if (localStorage.getItem('token')) {
    router.navigate(['/graficos']);
    return false;
  }
  return true;

}
