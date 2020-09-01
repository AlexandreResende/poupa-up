export class ImportTransactionsCSVRequest {
  static toTransactionDomain(requestData: string[]): object[] {
    return requestData.map((transaction: string) => {
      const [month, year, value, description] = transaction.split(";");

      return {
        month,
        year,
        value,
        description,
        category: "FOOD",
      };
    });
  }
}