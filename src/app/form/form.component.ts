import { Component, OnInit } from "@angular/core";


import { OnBoardingQuery } from '../state/on-boarding.query';
import { skip } from 'rxjs/operators';
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  constructor(    private query: OnBoardingQuery) {}

  ngOnInit() {
    this.query
      .select(state => state)
      .pipe(skip(1))
      .subscribe(stepTwoFormValue => {
        console.log(
          "------:",
          this.query.getValue().stepTwo.form
        );
      });
  }
}
