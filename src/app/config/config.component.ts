import { Component, OnInit } from '@angular/core';
import { ClientService } from '../_services/client.service';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  typeDossier:any={
    nomTypeDossier: null
  };

  typeDocument:any={
    nomTypeDocument: null
  };
  
 // typedocument?: String;
  listTypeDossier: any;
  listTypeDocument: any;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

    this.getallTypeDossier();
    this.getallTypeDocument();
  }

  getallTypeDossier(){
  this.clientService.typeDossier().subscribe(data => {
  this.listTypeDossier = data;
      });
  }

  getallTypeDocument(){
    this.clientService.typeDocument().subscribe(data => {
    this.listTypeDocument = data;
        });
    }

  onSubmitDossier(){
  
    this.clientService.newTypeDossier(this.typeDossier).subscribe( data =>{
      console.log(data);
      this.ngOnInit();
    },
    error => console.log(error));
  }

  onSubmitDocument(){
  
    this.clientService.newTypeDocument(this.typeDocument).subscribe( data =>{
      console.log(data);
      this.ngOnInit();
    },
    error => console.log(error));
  }

  deleteTypeDossier(id: number){
    this.clientService.deleteTypeDossier(id).subscribe( data => {
      console.log(data);
      this.ngOnInit();
    })
  }

  deleteTypeDocument(id: number){
    this.clientService.deleteTypeDocument(id).subscribe( data => {
      console.log(data);
      this.ngOnInit();
    })
  }

}
