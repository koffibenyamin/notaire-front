import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/_services/client.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
const htmlToPdfmake = require("html-to-pdfmake");

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-dossier-detail',
  templateUrl: './dossier-detail.component.html',
  styleUrls: ['./dossier-detail.component.css']
})
export class DossierDetailComponent implements OnInit {

  constructor(private clientService: ClientService, private route: ActivatedRoute, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.getDocument();
    this.getallTypeDocument();
    this.getdepenseClient();
    this.getdepenseCabinet();
    this.getTotal();

  }

  dossier: any;
  depClient:any;
  depCabinet:any;
  closeResult = '';
  total:any;
  listTypeDocument: any;
  suiviFinancier:any={
    dateSuivi: null,
    libelle: null,
    montant:null,
    payerPar:null
  };
  suivi:any={
    dateSuivi: null,
    libelle: null
  };
  document:any={
    typeDocument:null,
    datecreation:null,
    description:null
  }

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }

  getTotal(){
    const documentId: any = this.route.snapshot.paramMap.get('id');
      this.clientService.getMontant(documentId).subscribe(data => {
      this.total = data;
          });

  }

  getDocument(){
    const dossierId: any = this.route.snapshot.paramMap.get('id');

    this.clientService.getDossier(dossierId)
    .subscribe(
      data => {
        this.dossier = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

  getallTypeDocument(){
    this.clientService.typeDocument().subscribe(data => {
    this.listTypeDocument = data;
        });
    }


    getdepenseClient(){
      const documentId: any = this.route.snapshot.paramMap.get('id');
      this.clientService.getMontantClient(documentId).subscribe(data => {
      this.depClient = data;
          });
      }

      getdepenseCabinet(){
        const documentId: any = this.route.snapshot.paramMap.get('id');
        this.clientService.getMontantCabinet(documentId).subscribe(data => {
        this.depCabinet = data;
            });
        }


    saveDocument(){
      const documentId: any = this.route.snapshot.paramMap.get('id');
      const data = {
        
        datecreation: this.dossier.datecreation,
        typeDocument:"test",
        description: this.dossier.description,
        
      };
  
      this.clientService.saveDocument(documentId, this.document.typeDocument ,data)
        .subscribe(
          response => {
            console.log(response);
            this.ngOnInit();
          },
          error => {
            console.log(error);
          });

    }


    saveSF(){
      const documentId: any = this.route.snapshot.paramMap.get('id');
      const data = {
        
        dateSuivi: this.suiviFinancier.dateSuivi,
        libelle: this.suiviFinancier.libelle,
        montant: this.suiviFinancier.montant,
        payerPar: this.suiviFinancier.payerPar
      };
  
      this.clientService.newSuiviFi(documentId, data)
        .subscribe(
          response => {
            console.log(response);
            this.ngOnInit();
          },
          error => {
            console.log(error);
          });

    }

    save(){
      const documentId: any = this.route.snapshot.paramMap.get('id');
      const data = {
        
        dateSuivi:this.suivi.dateSuivi,
        libelle: this.suivi.libelle,
      };
  
      this.clientService.newSuivi(documentId, data)
        .subscribe(
          response => {
            console.log(response);
            this.ngOnInit();
          },
          error => {
            console.log(error);
          });

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



  

  deleteDoc(idDos: number, idDoc: number){
    this.clientService.deleteDocument(idDos, idDoc).subscribe( data => {
      console.log(data);
      this.ngOnInit();
    })
  }

}
