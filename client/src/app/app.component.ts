import { Component, OnInit,Input,Output,NgModule } from '@angular/core';
import {ContactListComponent} from './contact-list/contact-list.component'
import {ContactComponent} from './contact/contact.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  model = new ContactComponent();

   utenti = [];

  constructor(){
    this.getUserListFromDB();
  }

  
  getNome(event){
    console.log(event.nome);
  }

  getUserListFromDB(){
    fetch("http://localhost:5000/phoneNumber")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.length);
    for(var i=0;i<data.length;i++){
      this.utenti.push({nome:data[i].nome,numero:data[i].numero});
    }
  });
  }


  getUser(event:{nome:string,numero:string}){
    this.utenti.push({nome:event.nome,numero:event.numero});
  }



  removeUser(event){
    this.utenti.splice(event,1);
    fetch("http://localhost:5000/phoneNumber")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.length);
    for(var i=0;i<data.length;i++){
      this.utenti.push({nome:data[i].nome,numero:data[i].numero});
    }
  });



  }




  updateUser(event){
    console.log(event.i);
  }







}


