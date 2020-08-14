import { EventEmitter } from "events";
import { BaseCommandInterface } from "../../domain/commands/base-command-interface";

export default interface CommandFactoryInterface {
  create(events: EventEmitter): BaseCommandInterface;
}