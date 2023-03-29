import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';
import { getUtenteName, isUserEnabledRole } from '@frontend/example-central-lib';
import { select, Store } from '@ngrx/store';
import { AuthService } from 'libs/example-central-lib/src/lib/services/auth.service';
//import { map } from 'rxjs/operators';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'frontend-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  userName : string ="";
  constructor(private auth: AuthService,private store: Store) {}

  logout(){  console.log("Logout"); this.auth.logout();}

  ngOnInit(): void {
    /* old version
    let utente = this.store.pipe(select(getUtente)).subscribe( ut => { 
      const jwtService = new JwtHelperService();
      const ruoli  : any[]= jwtService.decodeToken(ut.towenJwt)['role'];
      //console.log(ruoli);
      if ((ruoli!==undefined ) && (ruoli.some( r => 'ANNOTAZIONI2'===(r.authority) ) ))
        this.visualizzaAnnotazioni=true;      
    } );
    */
    this.store.pipe(select(isUserEnabledRole,'ANNOTAZIONI')).subscribe(
      val => this.visualizzaAnnotazioni=val
    );
    this.store.pipe(select(getUtenteName)).subscribe(
      val => this.userName=val
    );
  }
  visualizzaAnnotazioni: boolean=false;
  

  //https://edupala.com/how-to-add-ionic-charts-and-graph/
  //import { Chart, registerables } from 'chart.js';
  @ViewChild('graficoDiEsempioEl') private graficoDiEsempioEl: ElementRef;
  graficoDiEsempioChart: any;
  ngAfterViewInit() {
    //spostati nel toogleGrafico
    //Chart.register(...registerables); //necessario, spostabile anche nel costruttore
    //this.graficoDiEsempioMethod();
  }
  visualizzaGrafico : boolean=false;
  toogleGrafico(){
    this.visualizzaGrafico=true; 
    Chart.register(...registerables); //necessario, spostabile anche nel costruttore
    setTimeout(() => { //timeout necessario per evitare errori di oggetti non valorizzati
      this.graficoDiEsempioMethod();
    }, 1000);
  }
  graficoDiEsempioMethod() {
    this.graficoDiEsempioChart = new Chart(this.graficoDiEsempioEl.nativeElement, {
      type: 'bar', //line
      data: {
        labels: ['GEN', 'FEB', 'MAR', 'APR', 'MAG', 'GIU', 'LUG', 'AGO', 'SET', 'OTT','NOV', 'DIC'],
        datasets: [
          {
            label: 'Valori',/*
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,/**/
            data: [42, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 42],
            //spanGaps: false,
          }
        ]
      }
    });
  }

}
