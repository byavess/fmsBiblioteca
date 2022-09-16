import { RouterModule } from '@angular/router';
import { BebidasComponent } from './../../../../rotas-rotas-rotas/src/app/bebidas/bebidas.component';
import { Tservice } from './../tservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent implements OnInit {

  bebidas: string[]= [];
  tservice: Tservice;

  constructor(private _tservice: Tservice,
   ) {
    this.tservice = _tservice;
    
  }

  Bebidas() { 
   // this.tservice.getBebidas();
  console.log("testando")
 
  }

  refil(){
    this.tservice.getRefil();
    console.log('testando refil')
  }

  ngOnInit() {
   this.bebidas = this.tservice.getBebidas();
  }

}
