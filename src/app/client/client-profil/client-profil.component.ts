import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/_services/client.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-profil',
  templateUrl: './client-profil.component.html',
  styleUrls: ['./client-profil.component.css']
})
export class ClientProfilComponent implements OnInit {

  client: any;
  listTypeDossier: any;
  closeResult = '';
  //typeDossier: number;
  dossier: any={
    matricule: null,
    datecreation: null,
    description: null,
    typeDossier:null
  };
  //id?: number;

  constructor(private clientService: ClientService, private route: ActivatedRoute, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.getClientDetail();
    this.getallTypeDossier();
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

  getClientDetail(){
    const clientId: any = this.route.snapshot.paramMap.get('id');

    this.clientService.get(clientId)
    .subscribe(
      data => {
        this.client = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

  getallTypeDossier(){
    this.clientService.typeDossier().subscribe(data => {
    this.listTypeDossier = data;
        });
    }


    saveDossier(){

      const clientId: any = this.route.snapshot.paramMap.get('id');
      const data = {
        matricule: this.dossier.matricule,
        datecreation: this.dossier.datecreation,
        description: this.dossier.description,
        
      };
  
      this.clientService.saveDossier(clientId, this.dossier.typeDossier ,data)
        .subscribe(
          response => {
            console.log(response);
            this.ngOnInit();
          },
          error => {
            console.log(error);
          });


    }

    deleteDoc(idCli: number, idDos: number){
      this.clientService.deleteDossier(idCli, idDos).subscribe( data => {
        console.log(data);
        this.ngOnInit();
      })
    }


  previousState(): void {
    window.history.back();
  }

  

}
