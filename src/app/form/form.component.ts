import { Component, ElementRef, ViewChild } from '@angular/core';
import { Revenue } from '../models/Revenue.model';
import { Expend } from '../models/Expend.model';
import { RevenuesService } from '../services/RevenuesService.service';
import { ExpendsService } from '../services/ExpendsService.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  descriptionValue: string = "";
  amountValue: number = 0;
  isRevenue: boolean = true;

  constructor (private revenuesService: RevenuesService, private expendsService: ExpendsService) {}

  sendDataRegister() {
    if (this.isRevenue) {
      this.revenuesService.addNewRevenue(
        new Revenue(this.descriptionValue, this.amountValue)
      );
    }
    else {
      this.expendsService.addNewExpend(
        new Expend(this.descriptionValue, this.amountValue)
      );
    }
  }

  changeStateTransaction(event: any) {
    const typeTransaction: string = event.target.value;
    
    if (typeTransaction === "ingreso") this.isRevenue = true;
    if (typeTransaction === "egreso") this.isRevenue = false;
  }
}
