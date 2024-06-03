import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modalfim',
  templateUrl: './modalfim.component.html',
  styleUrl: './modalfim.component.scss'
})
export class ModalfimComponent {

    
  constructor(private router: Router,
    
  ) { }

  navigate() {
   
    this.router.navigate(['/home']); 
  }

}
