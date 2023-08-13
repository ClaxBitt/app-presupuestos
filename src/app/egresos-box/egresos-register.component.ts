import { Component, OnInit } from '@angular/core';
import { Expend } from '../models/Expend.model';
import { ExpendsService } from '../services/ExpendsService.service';

@Component({
  selector: 'app-egresos-register',
  templateUrl: './egresos-register.component.html',
  styleUrls: ['./egresos-register.component.css']
})
export class EgresosRegisterComponent implements OnInit {
  expendsRecord: Expend[] = [];

  constructor (private expendsService: ExpendsService) {}

  ngOnInit(): void {
    this.expendsService.expendsObjects.subscribe(expendsObjects => {
      this.expendsRecord = expendsObjects;
    });
  }

  deleteExpend(expend: Expend) {
    this.expendsService.deleteExpend(expend);
  }
}
