import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent implements OnInit {


add(): void { 
this.bebidas

  console.log('add');
}
    


  
  bebidas: string[]= [
    'com',
    'sem'
  ];

  constructor() {
   }

  ngOnInit(): void {
   
  }

}
