export default class ImportTransactionsCSVResponse {
  public readonly recordsInserted: number;

  constructor (recordsInserted: number) {
    this.recordsInserted = recordsInserted;
  }
}