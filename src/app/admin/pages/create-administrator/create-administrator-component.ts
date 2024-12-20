import { Component } from '@angular/core';
; // Update with actual path
import { Router } from '@angular/router';
import {AuthContorllerService} from '../../../services/services/auth-contorller.service';

@Component({
  selector: 'app-create-administrator',
  templateUrl: './create-administrator-component.html',
  styleUrls: ['./create-administrator-component.css']
})
export class CreateAdministratorComponent {
  admin = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(
    private adminService: AuthContorllerService,
    private router: Router
  ) {}

  createAdmin() {
    this.adminService.registerAdmin({body:this.admin}).subscribe({
      next: (response) => {
        console.log('Admin created successfully', response);
        alert("Admin created successfully");
      },
      error: (err) => {
        console.error('Error creating admin', err);
      }
    });
  }
}
