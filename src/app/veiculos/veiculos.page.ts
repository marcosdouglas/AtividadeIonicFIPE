import { Component, OnInit } from '@angular/core';
//import { NavParams } from '@ionic/angular';
import { FipeService } from '../services/fipe.service';
import { HomePageModule } from '../home/home.module';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.page.html',
  styleUrls: ['./veiculos.page.scss'],
})
export class VeiculosPage implements OnInit {
   codigo_marcas: any = [];
    marcas: any;
    veiculo: any; 
    
  constructor(private fipeService: FipeService) {
      //this.veiculo = this.navParams.get();
      this.fipeService.getMarcas(HomePage.veiculo).subscribe(
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
