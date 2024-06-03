import { Component, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ModalfimComponent } from '../modalfim/modalfim.component';
import { ServiceVALUEComponent } from '../services/service-value/service-value.component';

@Component({
  selector: 'app-corregedoria',
  templateUrl: './corregedoria.component.html',
  styleUrls: ['./corregedoria.component.scss']
})
export class CorregedoriaComponent {
  motivo: string = "";
  observacao: string = "";
  dataOcorrido: string = "";
  passaporte: string = "";
  arquivo: File | undefined;
  nome: string = "";
  rg: string = "";
  discord: string = "";

  constructor(private http: HttpClient, public dialog: MatDialog, private elementRef: ElementRef, private serviceVALUE: ServiceVALUEComponent) {
    this.serviceVALUE.getDadosInput().subscribe(dado => {
      this.nome = dado.nome;
      this.rg = dado.rg;
      this.discord = dado.discord;
    });
  }

  enviarFormulario() {
    const motivoDenunciaElement: HTMLInputElement | null = document.getElementById("motivo") as HTMLInputElement;
    const provaVideoElement: HTMLInputElement | null = document.getElementById("video") as HTMLInputElement;
    const dataElement: HTMLInputElement | null = document.getElementById("data") as HTMLInputElement;
    const passaporteElement: HTMLInputElement | null = document.getElementById("passaporte") as HTMLInputElement;
    const erroMotivoElement: HTMLElement | null = document.getElementById("erroMotivo");
    const erroDataElement: HTMLElement | null = document.getElementById("erroData");
    const erroPassaporteElement: HTMLElement | null = document.getElementById("erroPassaporte");
    const erroVideoElement: HTMLElement | null = document.getElementById("erroVideo");

    if (motivoDenunciaElement && erroMotivoElement && dataElement && erroDataElement && passaporteElement && erroPassaporteElement && provaVideoElement && erroVideoElement) {
      if (this.motivo === "") {
        erroMotivoElement.innerHTML = "Por favor, preencha o campo de motivo.";
      } else {
        erroMotivoElement.innerHTML = "";
      }

      if (this.arquivo === undefined) {
        erroVideoElement.innerHTML = "Por favor, anexe um arquivo.";
      } else {
        erroVideoElement.innerHTML = "";
      }

      if (this.dataOcorrido === "") {
        erroDataElement.innerHTML = "Por favor, preencha a data do ocorrido.";
      } else {
        erroDataElement.innerHTML = "";
      }

      if (this.passaporte === "") {
        erroPassaporteElement.innerHTML = "Por favor, preencha o campo de passaporte.";
      } else {
        erroPassaporteElement.innerHTML = "";
      }

      if (this.dataOcorrido !== "" && this.passaporte !== "" && this.motivo !== "" && this.arquivo !== undefined) {
        this.dialog.open(ModalfimComponent);
        const webhookUrl = 'https://discord.com/api/webhooks/1247031661007470643/9APGkr-ROxhS3EHfdP27AzYNNVCIoPV7cW7oo9Uqe6VQ-n62KyYfjRyjstHNc4J9aqFS';

        const formData = new FormData();
        formData.append('motivo', this.motivo);
        formData.append('observacao', this.observacao);
        formData.append('dataOcorrido', this.dataOcorrido);
        formData.append('passaporte', this.passaporte);

        if (this.arquivo) {
          formData.append('arquivo', this.arquivo, this.arquivo.name);
        }

        const payload = {
          content: `
          # DENÚNCIA REGISTRADA 
    
          👮‍♂️ *Denunciante:* ${this.nome} 
          📋 *RG:* ${this.rg}
          📖 *Discord:* <@${this.discord}>
      
          ⭕ **INCIDENTE** ⭕
          \`\`\`md
          Motivo: ${this.motivo}
          =======================================
          Observação: ${this.observacao}
          =======================================
          Data do Ocorrido: ${this.dataOcorrido}
          =======================================
          Passaporte: ${this.passaporte}
          \`\`\`
    
          **ENVIAR RESPOSTA PELO BOT**:
          `
        };
        formData.append('payload_json', JSON.stringify(payload));

        this.http.post(webhookUrl, formData).subscribe(
          () => {
            console.log('Dados enviados com sucesso para o Discord!');
          },
          error => {
            console.error('Erro ao enviar dados para o Discord:', error);
          }
        );
      } else {
        console.log("Preencha todos os campos e/ou habilite o botão.");
      }
    } else {
      console.error("Elemento não encontrado.");
    }
  }

  onFileSelected(event: any) {
    this.arquivo = event.target.files[0];
  }
}
