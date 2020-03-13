import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  utenti = [
    {nome:'Tommaso', numero: '3230232623'},
    {nome:'Tommaso2', numero: '3230232623'},
    {nome:'Tommaso3', numero: '3230232623'}
  ]


  getUser(event:{nome:string,numero:string}){
    this.utenti.push({nome:event.nome,numero:event.numero});
  }


}


