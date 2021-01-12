import { EventEmitter } from "events";
import { BaseCommandInterface } from "@src/domain/commands/base-command-interface";

export interface CommandFactoryInterface {
  create(events: EventEmitter): BaseCommandInterface;
}