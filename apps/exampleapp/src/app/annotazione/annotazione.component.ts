import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnotazioniEntity, getAllAnnotazioni, getAnnotazioniLoaded } from '@frontend/example-central-lib';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    private formBuilder: FormBuilder
  ) { }
  
  list$: Observable<AnnotazioniEntity[]> = this.store.pipe(select(getAllAnnotazioni)
    ).pipe(map(annotazioni => annotazioni.filter( annotazione => {return annotazione.id===this.route.snapshot.params.id})));
  isLoaded$: Observable<any> = this.store.pipe(select(getAnnotazioniLoaded));

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    //this.list$=this.list$.map(annotazioni => annotazioni.filter( annotazione => annotazione.id===this.route.snapshot.params.id));
    this.noteForm = this.formBuilder.group({
      id :['', [Validators.required]],
      nome :['', [Validators.required]],
      descrizione:[],
      tipo:[],
      stato:[],
      fase:[]
    });

    const myObserver = {
      next: (list: AnnotazioniEntity[]) => {
        this.noteForm.controls['id'].setValue(list[0].id);
        this.noteForm.controls['nome'].setValue(list[0].nome);
        this.noteForm.controls['descrizione'].setValue(list[0].descrizione);
        this.noteForm.controls['tipo'].setValue(list[0].tipo);
        this.noteForm.controls['stato'].setValue(list[0].stato);
        this.noteForm.controls['fase'].setValue(list[0].fase);
      },error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => {},
    };
    this.list$.subscribe(myObserver);

  }

  noteForm = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    descrizione: new FormControl(),
    tipo : new FormControl(),
    stato : new FormControl(),
    fase : new FormControl()
  });

}
