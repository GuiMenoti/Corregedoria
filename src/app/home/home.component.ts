import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalProximoComponent } from '../modal-proximo/modal-proximo.component';
import {
  MatDialog,

} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public dialog: MatDialog) {

  }


  openDialog(): void {
    const nomeElement: HTMLInputElement | null = document.getElementById("nome") as HTMLInputElement;
    const rgElement: HTMLInputElement | null = document.getElementById("rg") as HTMLInputElement;
    const discordElement: HTMLInputElement | null = document.getElementById("discord") as HTMLInputElement;
    const erroNomeElement: HTMLElement | null = document.getElementById("erroNome");
    const erroRgElement: HTMLElement | null = document.getElementById("erroRg");
    const erroDiscordElement: HTMLElement | null = document.getElementById("erroDiscord");
    const button: HTMLElement | null  = document.getElementById("botaoProximo") as HTMLButtonElement;

    // Verifica se os elementos dos campos e seus erros estão presentes
    if (nomeElement && erroNomeElement && rgElement && erroRgElement && discordElement && erroDiscordElement) {
        const nome: string = nomeElement.value.trim();
        const rg: string = rgElement.value.trim();
        const discord: string = discordElement.value.trim();
        const erroNome: HTMLElement = erroNomeElement;
        const erroRg: HTMLElement = erroRgElement;
        const erroDiscord: HTMLElement = erroDiscordElement;

        // Verifica se os campos estão preenchidos
        if (nome === "") {
            erroNome.innerHTML = "Por favor, preencha o campo de nome.";
        } else {
            erroNome.innerHTML = "";
        }

        if (rg === "") {
            erroRg.innerHTML = "Por favor, preencha o campo de RG.";
        } else {
            erroRg.innerHTML = "";
        }

        if (discord === "") {
            erroDiscord.innerHTML = "Por favor, preencha o campo de Discord.";
        } else {
            erroDiscord.innerHTML = "";
        }

        // Verifica se todos os campos estão preenchidos e se o botão está habilitado
        if (nome !== "" && rg !== "" && discord !== "" && !button) {
            const dialogRef = this.dialog.open(ModalProximoComponent, {
                panelClass: 'custom-dialog-container' 
            });
            console.log("Abrir diálogo");
        } else {
            console.log("Preencha todos os campos e/ou habilite o botão.");
        }
    } else {
        console.error("Elemento não encontrado.");
    }
}

}
