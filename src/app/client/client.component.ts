import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client.model';
import { ClientService } from '../_services/client.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

 /* client: Client = {
    nomClient:'',
    prenomClient:'',
    numeroTelephoneClient:'',
    mailClient:''};
  isSuccessful = false;
  submitted = false;*/

  constructor(private clienService: ClientService, private pipeDate : DatePipe ) { }

  ngOnInit(): void {
  }

  /*saveTutorial(): void {
    const data = {
      nomClient: this.client.nomClient,
      prenomClient: this.client.prenomClient,

      numeroTelephoneClient: this.client.numeroTelephoneClient,
      mailClient:this.client.mailClient,


    };

    this.clienService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.isSuccessful = true;
        },
        error => {

          console.log(error);
        });
  }*/
}
