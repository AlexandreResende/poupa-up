export interface BaseCommandInterface {
  execute(params: object): Promise<void>;
}
