export abstract class BaseCommand<OPT extends Record<string, any>> {
  private _name: string = '';

  public get name(): string {
    if (!this._name) {
      this._name = Object.getPrototypeOf(this)?.constructor?.name || '';
    }
    return this.name;
  }
}
