import { BaseCommandInterface } from "./base-command-interface";

export class GetTransactionsCommand implements BaseCommandInterface {
  public readonly events: object;

  constructor(events: object) {
    this.events = events;
  }

  async execute(): Promise<void> {
    return;
  }
}

