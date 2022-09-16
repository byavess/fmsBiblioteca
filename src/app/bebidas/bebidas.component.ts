import { Component, OnInit } from '@angular/core';
import { Tservice } from '../tservice.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {
  tservice: Tservice;
  refil: string[] =[]
  constructor( private _tservice: Tservice) {
    this.tservice = _tservice;
   }

  ngOnInit(): void {
  }

}
