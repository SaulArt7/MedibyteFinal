import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class AdminPQRSGuard implements CanActivate {


  constructor(private userService: UsersService, private router: Router) {

  }

  canActivate() {

    if(this.userService.isAdminPQRS()) {
      return true
    }
    this.router.navigate(['/home'])
    return false
  }
}