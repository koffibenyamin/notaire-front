import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Client } from '../models/client.model';
//import { map } from 'rxjs/operators';
//import 'rxjs/Rx';
//import 'rxjs/add/operator/map';




@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  API_URL = "http://localhost:8080/api/client/" ;


  public getClient(){
    return this.http.get(this.API_URL+"all");

  }

  get(id:number): Observable<any> {
    return this.http.get<Client>(`${this.API_URL}${id}`);
  }

  public saveClient(data: Client){
    return this.http.post(this.API_URL+"creer", data);
  }
  
  updateclient(id: number, data: Client): Observable<Object>{
    return this.http.put(`${this.API_URL}${id}`, data);
  }

  deleteClient(id: number): Observable<Object>{
    return this.http.delete(`${this.API_URL}${id}`);
  }

  deleteDocument(idDos: number, idDoc: number): Observable<Object>{
    return this.http.delete(this.API_URL+"dossiers/"+idDos+"/documents/"+idDoc);
  }

  deleteDossier(idCli: number, idDos: number): Observable<Object>{
    return this.http.delete(this.API_URL+idCli+"/dossiers/"+idDos);
  }

  public saveDossier(idClient: number, idType: number, dossier:any){

    return this.http.post(this.API_URL+idClient+"/"+idType+"/dossiers", dossier)

  }

  public saveDocument(idDossier: number, idType: number, document:any){

    return this.http.post(this.API_URL+"dossiers/"+idDossier+"/"+idType+"/document", document)

  }

  public getAllDossier(){
    return this.http.get(this.API_URL+"dossiers");

  }

  public typeDossier(){
    return this.http.get(this.API_URL+"typedossier/all");
  }

  public newTypeDossier(typeDossier: any){
    return this.http.post(this.API_URL+"typedossier/creer", typeDossier);
  }

  deleteTypeDossier(id: number): Observable<Object>{
    return this.http.delete(this.API_URL+"typedossier/"+id);
  }

  public typeDocument(){
    return this.http.get(this.API_URL+"typedocument/all");
  }

  public newTypeDocument(typeDocument: any){
    return this.http.post(this.API_URL+"typedocument/creer", typeDocument);
  }

  deleteTypeDocument(id: number): Observable<Object>{
    return this.http.delete(this.API_URL+"typedocument/"+id);
  }


  getDossier(id:number) {
    return this.http.get(this.API_URL+id+"/doss");
  }

  public getMontantClient(id:number){
    return this.http.get(this.API_URL+"dossiers/"+id+"/count");

  }

  public getMontantCabinet(id:number){
    return this.http.get(this.API_URL+"dossiers/"+id+"/count1");

  }

  public getMontant(id:number){
    return this.http.get(this.API_URL+"dossiers/"+id+"/count2");

  }

  public newSuiviFi(id: number, suiviFi: any){
    return this.http.post(this.API_URL+"dossiers/"+id+"/suiviFinancier", suiviFi);
  }

  public newSuivi(id: number, suivi: any){
    return this.http.post(this.API_URL+"dossiers/"+id+"/suivi", suivi);
  }
  

  

}

