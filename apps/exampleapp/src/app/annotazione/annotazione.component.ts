import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnotazioniEntity, getAllAnnotazioni, getAnnotazioniLoaded, getUpdateannotazioneLoaded, loadAnnotazioniInit, loadUpdateannotazioneFailure, loadUpdateannotazioneInit, loadUpdateannotazioneSuccess, UpdateannotazioneEntity } from '@frontend/example-central-lib';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { $CombinedState } from 'redux';
import { Observable } from 'rxjs';
import { map, skip } from 'rxjs/operators';

@Component({
  selector: 'frontend-annotazione',
  templateUrl: './annotazione.component.html',
  styleUrls: ['./annotazione.component.scss']
})
export class AnnotazioneComponent implements OnInit {

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private actionListener$: ActionsSubject
  ) { }
  showSpinner: Boolean = false;
  list$: Observable<AnnotazioniEntity[]> = this.store.pipe(select(getAllAnnotazioni)
    ).pipe(map(annotazioni => annotazioni.filter( annotazione => {return annotazione.id===this.route.snapshot.params.id})));
  isLoaded$: Observable<any> = this.store.pipe(select(getAnnotazioniLoaded));
  resultUpdate$ : Observable<any>;
  element : AnnotazioniEntity = null;
  spinnerMessage : String = "Salvataggio in corso";

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    //this.list$=this.list$.map(annotazioni => annotazioni.filter( annotazione => annotazione.id===this.route.snapshot.params.id));
    this.noteForm = this.formBuilder.group({
      id :['', [Validators.required]],
      nome :['', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        //Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
        ])],
      descrizione:['',[ Validators.maxLength(250)]],
      tipo:['',[Validators.maxLength(250)]],
      stato:['',[Validators.pattern('^attivo$|^bloccato$') ]],
      fase:['',[Validators.maxLength(250)]],
      datainserimento:[],utenteinserimento:[],datamodifica:[],utentemodifica:[]
    });

    const myObserver = {
      next: (list: AnnotazioniEntity[]) => {
        if (this.route.snapshot.params.id != '0'){
          this.noteForm.controls['id'].setValue(list[0].id);
          this.noteForm.controls['nome'].setValue(list[0].nome);
          this.noteForm.controls['descrizione'].setValue(list[0].descrizione);
          this.noteForm.controls['tipo'].setValue(list[0].tipo);
          this.noteForm.controls['stato'].setValue(list[0].stato);
          this.noteForm.controls['fase'].setValue(list[0].fase);
          this.noteForm.controls['datainserimento'].setValue(list[0].datainserimento);
          this.noteForm.controls['utenteinserimento'].setValue(list[0].utenteinserimento);
          this.noteForm.controls['datamodifica'].setValue(list[0].datamodifica);
          this.noteForm.controls['utentemodifica'].setValue(list[0].utentemodifica);
          this.element=list[0];
        }else{
          this.noteForm.controls['id'].setValue("0");
        }
      },error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => {},
    };
    this.list$.subscribe(myObserver);
    

  }

  onSubmit() {
    console.log(this.noteForm.value);
    const id=this.noteForm.value.id;
    //form --> UpdateannotazioneEntity with the same attribute
    let element : UpdateannotazioneEntity= this.noteForm.value ;
    if (id==0){
      element.datainserimento=""+Date.now();
      element.utenteinserimento="Utente";
    }
    element.datamodifica=""+Date.now();
    element.utentemodifica="Utente"
    //dispach init action to call service
    this.store.dispatch( loadUpdateannotazioneInit({id,element}) );
    //substribe to success or error message
    this.showSpinner=true;
    this.actionListener$.pipe(skip(1) // optional: skips initial logging done by ngrx
    ).pipe(ofType(loadUpdateannotazioneSuccess),
      ).subscribe((action) => {
        this.showSpinner=false;
        console.log("success");
        this.store.dispatch(loadAnnotazioniInit()); //to reload all list
        this.router.navigate(["annotazioni"]); //route to the list
      });
    this.actionListener$.pipe(skip(1) // optional: skips initial logging done by ngrx
    ).pipe(ofType(loadUpdateannotazioneFailure),
      ).subscribe((action) => {
        console.log("Error");
      });
  }
  

  noteForm = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    descrizione: new FormControl(),
    tipo : new FormControl(),
    stato : new FormControl(),
    fase : new FormControl(),
    datainserimento : new FormControl(),
    utenteinserimento : new FormControl(),
    datamodifica: new FormControl(),
    utentemodifica : new FormControl(),
  });

}
