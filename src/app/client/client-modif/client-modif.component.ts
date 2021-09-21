import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/_services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-modif',
  templateUrl: './client-modif.component.html',
  styleUrls: ['./client-modif.component.css']
})
export class ClientModifComponent implements OnInit {

  id: any;
  client: Client = new Client();

  constructor(private clientService: ClientService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.get(this.id).subscribe(data => {
      this.client = data;
    }, error => console.log(error));
  }


  onSubmit(){
    this.clientService.updateclient(this.id, this.client).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/user']);
  }

}
