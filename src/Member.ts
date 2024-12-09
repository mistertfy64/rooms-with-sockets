import { TickOperation } from "./TickOperation";

class Member {
  data: Record<string, unknown>;
  tickOperations: Array<TickOperation>;

  constructor() {
    this.data = {};
    this.tickOperations = [];
  }

  doTickOperations() {
    for (let operation of this.tickOperations) {
      operation.action(operation.variables);
    }
  }
}

export { Member };
