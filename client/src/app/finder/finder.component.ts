import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  @Output()user = new EventEmitter<{nome:string,numero:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  addUser(nomeIn,numeroIn){
    this.user.emit({nome:nomeIn,numero:numeroIn});
  }




}
