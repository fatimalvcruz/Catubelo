import { Component, OnInit } from '@angular/core';

import { WebServicesService } from '../_services/web-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comunity } from '../models/comunity';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-newcomuniti',
  templateUrl: './newcomuniti.component.html',
  styleUrls: ['./newcomuniti.component.css']
})
export class NewcomunitiComponent implements OnInit {

  newComunityForm: FormGroup;
  titulo = 'Registrar nueva colonia';
  id:string | null;
  showModal: boolean = false;
  mensajeModal: String = "";
  miPattern = '[0-9 ]*';


  constructor(
    private fb: FormBuilder,
    private webServices: WebServicesService,
    private router:Router,
    private aRouter: ActivatedRoute
    ) 
    { 
      this.newComunityForm = this.fb.group({
        calle:[''], 
        cp:[''],
        ng:['']
      });
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
    this.esEditar();
    }
 
    
    addNewComunity(){
        const COMUNITY: Comunity ={
          calle: this.newComunityForm.get('calle')?.value, 
          cp: this.newComunityForm.get('cp')?.value, 
          ng: this.newComunityForm.get('ng')?.value, 
        }
      
        if(this.id !==null){
          //editamos
          this.webServices.editarComunidad(this.id, COMUNITY).subscribe({
            next:(respuesta:any) =>{
            console.log('edita');
            this.mensajeModal = " Colonia Editadada con éxito";
            
            },
            error:(error:Response) => {this.newComunityForm.reset();}
          });
        }else{
          //Agregamos
          console.log(COMUNITY);
          this.webServices.guardarComunidad(COMUNITY).subscribe({
            next:(respuesta:any) =>{console.log('agrega');
            this.mensajeModal = " Colonia agregada con éxito";
            },
            error:(error:Response) => {this.newComunityForm.reset();}
          });
        }   
      }

    esEditar(){
        if(this.id !== null){
          this.titulo= 'Editar Colonia';
          this.webServices.obtenerComunidad(this.id).subscribe(data =>{
            this.newComunityForm.setValue({
              calle: data.calle,
              cp: data.cp,
              ng: data.ng
            })
          })
        }
      }  


      reload(){
        this.showModal = false;
        this.router.navigate(['/listcomunity']).then(() => {
          window.location.reload();
        });
        
      }
      
    }


  


