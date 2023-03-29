import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAllAnnotazioni, getAnnotazioniLoaded, loadAnnotazioniInit, loadAnnotazioniSuccess } from '@frontend/example-central-lib';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map,skip } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';

@Component({
  selector: 'frontend-annotazioni',
  templateUrl: './annotazioni.component.html',
  styleUrls: ['./annotazioni.component.scss']
})
export class AnnotazioniComponent implements OnInit {

  //costruttore con l'accesso allo store e al routing
  constructor(private store: Store, 
    private actionListener$: ActionsSubject,
    private router: Router) { }
  //proprietà del componente che richiano i selectors
  list$: Observable<any> = this.store.pipe(select(getAllAnnotazioni));
  isLoaded$: Observable<any> = this.store.pipe(select(getAnnotazioniLoaded));
  //dispatch della action init
  loadAnnotazioni() {
    this.store.dispatch(loadAnnotazioniInit());
  }

  ngOnInit(): void { 
    this.loadAnnotazioni();  
    //gestione del success della action per caricare l'item per il paginatore
    this.actionListener$.pipe(skip(1) // optional: skips initial logging done by ngrx
    ).pipe(ofType( loadAnnotazioniSuccess ),
      ).subscribe((action) => {//console.log(action.annotazioni);
        if (this.itemlist!==undefined)
          this.itemlist=action.annotazioni;
      });
  }

  filtra( el : any){
    const value=el.target.value;
    this.list$ = this.store.pipe(select(getAllAnnotazioni)).pipe(
      map(items => items.filter( item => item.nome.toLowerCase().indexOf(value) > -1 ))
    );
  }
  
  itemlist = [];
  currentPage = 1;
  pageOfItems: Array<any>;
  onChangePage(pageOfItems: Array<any>) {
    //console.log( "onChangePage "+ pageOfItems );
    // update current page of items
    if (pageOfItems!==null)
      this.pageOfItems = pageOfItems;
  }

  //https://stackoverflow.com/questions/71259066/angular-how-to-change-set-current-page-of-jw-pagination
  /*
  changeSelectedPageToFirst() {
    let firstElement: HTMLElement = document.getElementsByClassName('first-item')[0] as HTMLElement;
    let clickFirst = firstElement.children[0] as HTMLElement;
    clickFirst.click();
  }*/

}
