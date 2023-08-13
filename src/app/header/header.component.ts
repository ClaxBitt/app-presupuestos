import { Component, OnInit } from '@angular/core';
import { RevenuesService } from '../services/RevenuesService.service';
import { ExpendsService } from '../services/ExpendsService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalRevenuesValue: number = 0;
  totalExpendsValue: number = 0;
  percentageExpenses: number = 0.0;
  totalQuote: number = 0;

  constructor (private revenuesService: RevenuesService, private expendsService: ExpendsService) {}

  ngOnInit(): void {
    this.revenuesService.revenuesValuesSubject.subscribe((revenuesValue) => {
      this.totalRevenuesValue = revenuesValue;
      this.updateTotalQuoteAndPercent();
    });

    this.expendsService.expendsValuesSubject.subscribe((expendsValue) => {
      this.totalExpendsValue = expendsValue;
      this.updateTotalQuoteAndPercent();
    });
  }

  updateTotalQuoteAndPercent() {
    this.totalQuote = this.totalRevenuesValue - this.totalExpendsValue;
    this.percentageExpenses = this.totalExpendsValue / this.totalRevenuesValue;
  }
}
