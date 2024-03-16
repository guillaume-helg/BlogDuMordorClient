import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const roleGuard: CanActivateFn = (route, state) => {
  const role= route.data['role'];
  const router = inject(Router);
  if (role=='ADMIN'){
    return true;
  } else {
    router.navigateByUrl('/connexion');
    return false;
  }
};
