export interface BaseCommandInterface {
  execute(params?: object, userId?: string): Promise<void>;
}
