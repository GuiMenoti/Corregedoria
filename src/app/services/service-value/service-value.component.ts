import { Component, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-service-value',
  templateUrl: './service-value.component.html',
  styleUrl: './service-value.component.scss'
})
export class ServiceVALUEComponent {
  private dadosInputSubject = new BehaviorSubject<any>({});

  constructor() { }

  setDadosInput(nome: string, rg: string, discord: string) {
    const dados = { nome, rg, discord };
    this.dadosInputSubject.next(dados);
  }

  getDadosInput(): Observable<any> {
    return this.dadosInputSubject.asObservable();
  }
}
