import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {

  constructor(public authService: AuthenticationService,private router : Router){}

  handleLogout() {
    this.authService.logout().subscribe({
      next : (data) =>{
        this.router.navigateByUrl("/login");
      }
    })
  }
}
