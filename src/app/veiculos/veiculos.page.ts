import { Component, OnInit } from '@angular/core';

import { FipeService } from '../services/fipe.service';
//import { NavParams } from 'ionic-angular';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.page.html',
  styleUrls: ['./veiculos.page.scss'],
})
export class VeiculosPage implements OnInit {
//    navParams: NavParams;
    codigo_marcas: any = [];
    marcas: any;
    veiculo: any; 
    
  constructor(private fipeService: FipeService) {
    this.fipeService.getMarcas().subscribe(
      resposta => {
        console.log(resposta);
        this.marcas = resposta;
        this.codigo_marcas = Object.keys(resposta);
        console.log(this.codigo_marcas);

      }
    );
  }

  ngOnInit() {
  }

}
