import { Component, OnInit } from '@angular/core';
import { Revenue } from '../models/Revenue.model';
import { RevenuesService } from '../services/RevenuesService.service';

@Component({
  selector: 'app-ingresos-register',
  templateUrl: './ingresos-register.component.html',
  styleUrls: ['./ingresos-register.component.css']
})
export class IngresosRegisterComponent implements OnInit {
  revenuesRecord: Revenue[] = [];
  hiddeXIcon: boolean = true;
  localRevenue?: Revenue;

  constructor (private revenuesService: RevenuesService) {}

  ngOnInit(): void {
    this.revenuesService.revenuesObjects.subscribe((revenuesObjects) => {
      this.revenuesRecord = revenuesObjects;
    });
  }

  deleteRevenue(revenue: Revenue) {
    this.revenuesService.deleteRevenue(revenue);
  }
}
