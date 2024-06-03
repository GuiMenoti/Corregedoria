import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ModalfimComponent } from '../modalfim/modalfim.component';

@Component({
  selector: 'app-corregedoria',
  templateUrl: './corregedoria.component.html',
  styleUrls: ['./corregedoria.component.scss']
})
export class CorregedoriaComponent {
  motivo: string = "";
  observacao: string = "";
  dataOcorrido: string ="";
  passaporte: string = "";
  arquivo: File | undefined;

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  enviarFormulario() {
    this.dialog.open(ModalfimComponent);
    const webhookUrl = 'https://discord.com/api/webhooks/1247035865956356108/WZ3LJlNDEJgbFbBc1asB0okMyhThUqN1KhKOyLue83OYVFzYnziPb7RBdPX65QRR-StR';

    // Cria um objeto FormData
    const formData = new FormData();

    // Adiciona os campos de texto ao FormData
    formData.append('motivo', this.motivo);
    formData.append('observacao', this.observacao);
    formData.append('dataOcorrido', this.dataOcorrido);
    formData.append('passaporte', this.passaporte);

    // Se um arquivo foi selecionado, adiciona-o ao FormData
    if (this.arquivo) {
      formData.append('arquivo', this.arquivo, this.arquivo.name);
    }

    // Crie o payload como uma string JSON
    const payload = {
      content: `
        **Motivo:** ${this.motivo}
        **Observação:** ${this.observacao}
        **Data do Ocorrido:** ${this.dataOcorrido}
        **Passaporte:** ${this.passaporte}
      `
    };

    // Adicione o payload JSON ao FormData
    formData.append('payload_json', JSON.stringify(payload));

    // Envie o FormData para o webhook
    this.http.post(webhookUrl, formData).subscribe(
      () => {
        console.log('Dados enviados com sucesso para o Discord!');
        // Aqui você pode adicionar qualquer lógica adicional após o envio bem-sucedido
      },
      error => {
        console.error('Erro ao enviar dados para o Discord:', error);
      }
    );
  }

  onFileSelected(event: any) {
    this.arquivo = event.target.files[0];
  }
}
