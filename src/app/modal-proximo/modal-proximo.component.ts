import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-proximo',
  templateUrl: './modal-proximo.component.html',
  styleUrl: './modal-proximo.component.scss',
  
})
export class ModalProximoComponent {
  termsAccepted: boolean = false;

  
  constructor(private router: Router,
    private dialogRef: MatDialogRef<ModalProximoComponent>
  ) { }

  detectColor() {
    let buttonPlay = document.getElementById("btn-proximo") as HTMLElement;
    if (this.termsAccepted) {
      buttonPlay.classList.remove('btn-pronto');
  }else {
   
    buttonPlay.classList.add('btn-pronto');
  }
}

  navigateToOtherComponent() {
  
    if (this.termsAccepted) {
     
    this.dialogRef.close();
    this.router.navigate(['/corregedoria']); 

    }else {
     
    }
  }
  }
  
