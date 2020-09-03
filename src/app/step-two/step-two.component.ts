import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersistNgFormPlugin } from '@datorama/akita';
import { AkitaNgFormsManager } from '@datorama/akita-ng-forms-manager';
import { OnBoardingQuery } from '../state/on-boarding.query';
import { skip } from 'rxjs/operators';


@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html'
})
export class StepTwoComponent implements OnInit {
  form: FormGroup;
  pngfp: PersistNgFormPlugin;

  constructor(
    private builder: FormBuilder,
    private formsManager: AkitaNgFormsManager<any>,
    private query: OnBoardingQuery
  ) {}

  ngOnInit() {
    this.form = this.builder.group({
      street: ['', Validators.required],
      address: ['', Validators.required],
      state: [{ value: '', disabled: true }, Validators.required]
    });

    this.formsManager.upsert('stepTwo.form', this.form);
    this.pngfp = new PersistNgFormPlugin(this.query, 'stepTwo.form').setForm(this.form);

    console.log('state shape after on init:', this.query.getValue().stepTwo.form);

    this.query.select(state => state.stepTwo.form).pipe(skip(1)).subscribe(stepTwoFormValue => {
      console.log('state shape after any control changes:', this.query.getValue().stepTwo.form);
    });
  }
}
