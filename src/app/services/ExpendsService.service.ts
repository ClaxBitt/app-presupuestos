import { Expend } from "../models/Expend.model";
import { BehaviorSubject } from "rxjs";

export class ExpendsService {
  private expendsRecord: Expend[] =[];
  private _expendsValuesSubject: BehaviorSubject<number>;
  private _expendsObjects: BehaviorSubject<Expend[]>;

  constructor() {
    this._expendsValuesSubject = new BehaviorSubject<number>(this.calculateExpendsValue());
    this._expendsObjects = new BehaviorSubject<Expend[]>(this.expendsRecord);
  }

  addNewExpend(expend: Expend) {
    this.expendsRecord.push(expend);
    this._expendsValuesSubject.next(this.calculateExpendsValue());
  }

  deleteExpend(expendToDelete: Expend) {
    this.expendsRecord = this.expendsRecord.filter(expend => expend !== expendToDelete);
    this._expendsObjects.next(this.expendsRecord);
  }

  calculateExpendsValue(): number {
    return this.expendsRecord.reduce(
      (accumulator, expendObj) => accumulator + expendObj.getValue(), 0
    );
  }

  getExpendsRecord(): Expend[] {
    return this.expendsRecord;
  }

  get expendsValuesSubject() {
    return this._expendsValuesSubject.asObservable();
  }

  get expendsObjects() {
    return this._expendsObjects.asObservable();
  }
}