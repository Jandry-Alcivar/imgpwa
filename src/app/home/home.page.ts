import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ScreenReader } from '@capacitor/screen-reader';
import { ApiService } from '../Servicios/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  file: any;
  
  constructor(private servicio:ApiService) {}

  
  //   async announceFocus(elementDescription: any) {
  //     await ScreenReader.speak({ value: `Foco en ${elementDescription}` });
  // }

  async announceValidationError(errorMessage:any){
    await ScreenReader.speak({ value: `Error de validación: ${errorMessage}` });
  };
  
  // Ejemplo de uso: Si un campo de formulario no es válido
  validateForm(){
    const inputField = document.getElementById('myInput')as HTMLInputElement | null;
    if (inputField && !inputField.value){
      this.announceValidationError('El campo no puede estar vacío');
    }
  };

  ngOnInit() {
    setTimeout(() => {
      this.validateForm();
      // this.cargar();
    }, 1000);
  }

  // cargar() {
  //   const inputField = document.getElementById('myInput'); 
  //   debugger
  //   if (inputField) {
  //     debugger
  //     inputField.addEventListener('focus', (e) => {
  //       console.log(e);
  //       debugger
  //       this.announceFocus('campo de entrada');
  //     });
  //   }
  // }

  speaking(valor: any) {
    debugger
    let utterance = new SpeechSynthesisUtterance(valor.value);
    speechSynthesis.speak(utterance);
    // ScreenReader.speak(valor.value)
  }

  saveimg(nombre:any){
    this.servicio.saveImg(nombre.value, this.file).subscribe({
      next:(data:any)=>{
        debugger
      },error:(e)=> {
        console.log(e)
      }
    })
  }
  obtenerImg(dato:any){
     this.file = dato.target.files[0];
  }
}
