import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AkitaNgFormsManager } from '@datorama/akita-ng-forms-manager';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html'
})
export class StepOneComponent implements OnInit {
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private formsManager: AkitaNgFormsManager<any>
  ) {}

  ngOnInit() {
    this.form = this.builder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.formsManager.upsert('stepOne', this.form);
  }
}
