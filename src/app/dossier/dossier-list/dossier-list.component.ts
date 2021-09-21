import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/_services/client.service';

@Component({
  selector: 'app-dossier-list',
  templateUrl: './dossier-list.component.html',
  styleUrls: ['./dossier-list.component.css']
})
export class DossierListComponent implements OnInit {

  dossiers:any;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAllDos();
  }


  getAllDos(){
    this.clientService.getAllDossier()
    .subscribe(
      data => {
        this.dossiers = data;
        
      });
  }
}
