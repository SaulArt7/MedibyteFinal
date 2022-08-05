import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  //   // No vamos a usar estos elementos de la función canActivate.
  // }

  constructor(private userService: UsersService, private router: Router) {}

  canActivate() {
    if (this.userService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}


