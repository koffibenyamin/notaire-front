import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/_services/client.service';
import { ClientProfilComponent } from '../client-profil/client-profil.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  
  
  clients: any;
  closeResult = '';
  
  //clients?: Client[];
  /*_message: String = "";*/
  client: Client={
    nom: '',
    prenom:'',
    sexeClient:'',
    dateNaissance:'',
    numTel: '',
    adresseMail: ''

  };

  

  constructor(private clientService: ClientService, private modalService: NgbModal, private router: Router, public datepipe: DatePipe) { }

  /*deleteClient(id:number){
    this.clientService.delete(id).subscribe(msg => this._message = msg);
  }*/
  

  ngOnInit(): void {
    this.getAllClient()
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

 /* onSubmit(f: NgForm) {
    const url = 'http://localhost:8080/api/client/creer';
    this.http.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }*/

  saveClient(){
    const data = {
      nom: this.client.nom,
      prenom: this.client.prenom,
      sexeClient: this.client.sexeClient,
      
      dateNaissance: this.client.dateNaissance,
      numTel: this.client.numTel,
      adresseMail: this.client.adresseMail
    };

    this.clientService.saveClient(data)
      .subscribe(
        response => {
          console.log(response);
          this.ngOnInit();
        },
        error => {
          console.log(error);
        });


  }


  getAllClient(){
    this.clientService.getClient()
    .subscribe(
      data => {
        this.clients = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
      this.modalService.dismissAll();

  }

  

  previousState(): void {
    window.history.back();
  }

  updateClient(id: number){
    this.router.navigate(['clientModif', id]);
  }

  deleteClient(id: number){
    this.clientService.deleteClient(id).subscribe( data => {
      console.log(data);
      this.getAllClient();
    })
  }


}
