import { Component, OnInit,Input,Output,EventEmitter,NgModule} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  @Output()user= new EventEmitter<{nome:string,numero:string}>();
  
  
  constructor() {

   }




  ngOnInit(): void {

  }


  addUser(nome,numero) {
    this.user.emit({nome:nome,numero:numero});
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "nome": nome, "numero": numero });
    fetch("http://localhost:5000/phoneNumber", 
    {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }).then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }



  




}
