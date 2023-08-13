import { Revenue } from "../models/Revenue.model";
import { BehaviorSubject } from 'rxjs';

export class RevenuesService {
  private revenuesRecord: Revenue[] = [];
  private _revenuesValuesSubject: BehaviorSubject<number>;
  private _revenuesObjects: BehaviorSubject<Revenue[]>;

  constructor () {
    this._revenuesValuesSubject = new BehaviorSubject<number>(this.calculateRevenuesValue());
    this._revenuesObjects = new BehaviorSubject<Revenue[]>(this.revenuesRecord);
  }

  addNewRevenue(revenue: Revenue) {
    this.revenuesRecord.push(revenue);
    this._revenuesValuesSubject.next(this.calculateRevenuesValue());
  }

  calculateRevenuesValue(): number {
    return this.revenuesRecord.reduce(
      (accumulator, revenueObj) => accumulator + revenueObj.getValue(), 0
    );
  }

  deleteRevenue(revenueToDelete: Revenue) {
    this.revenuesRecord = this.revenuesRecord.filter(revenue => revenue !== revenueToDelete);
    this._revenuesObjects.next(this.revenuesRecord);
  }
  
  get revenuesValuesSubject() {
    return this._revenuesValuesSubject.asObservable();
  }

  get revenuesObjects() {
    return this._revenuesObjects.asObservable();
  }

}