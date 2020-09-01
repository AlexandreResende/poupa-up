export class ImportTransactionsCSVRequest {
  static toTransactionDomain(userId: string, requestData: string[]): object[] {
    return requestData.map((transaction: string) => {
      const [month, year, value, description] = transaction.split(";");

      return {
        userId,
        month,
        year,
        value,
        description,
        category: "FOOD",
      };
    });
  }
}