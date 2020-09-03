import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AkitaNgFormsManager } from '@datorama/akita-ng-forms-manager';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html'
})
export class NameComponent implements OnInit {
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

    this.formsManager.upsert('form.name', this.form);
  }
}
