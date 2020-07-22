import { BaseCommandInterface } from "./base-command-interface";

export abstract class BaseCommand implements BaseCommandInterface {
  async execute(): Promise<void> {}
};
