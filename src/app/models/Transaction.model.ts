export class Transaction {
  hiddeXIcon: boolean;

  constructor (protected description: string, protected value: number) {
    this.hiddeXIcon = true;
  }

  getDescription(): string {
    return this.description;
  }

  getValue(): number {
    return this.value;
  }
}