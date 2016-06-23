import { MatchError } from "./_namespace";

export class FunctionCallMatchError extends MatchError {

  public constructor(actualValue: any, shouldMatch: boolean, args?: Array<any>) {
    super(actualValue, "function to be called", `Expected function ${!shouldMatch ? "not ": ""}to be called${args ? " with [" + args.map(arg => JSON.stringify(arg)).join(", ") + "]": ""}.`);
  }
}
