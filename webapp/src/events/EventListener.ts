import { EventHandler } from "../common/Types";

export class EventListener {
  private handlers: EventHandler[] = [];

  add(type: string, listener: () => void, deps?: unknown[]) {
    const handler: EventHandler = {
      type: type,
      listener: listener,
      deps: deps,
    };
    this.handlers.push(handler);
  }

  remove(type: string, listener: () => void) {
    if (type.length == 0) {
      throw new Error("Error adding event listener: `name` must not be empty.");
    }
    type = type.toLowerCase();
    const checksum = type + listener.toString();
    this.handlers.every((handler, index) => {
      const value = handler.type + handler.listener.toString();
      if (value === checksum) {
        this.handlers.splice(index, 1);
        return false;
      }
    });
  }

  notifyAll(type: string) {
    this.handlers.forEach((handler) => {
      if (handler.type === type) {
        handler.listener(...(handler.deps || []));
      }
    });
  }
}
