import { RequestContext } from './async-scope.js'

/**
 * Represents an asynchronous variable.
 */
export class RequestVariable<T> {
  readonly name: string
  private readonly symbol: symbol
  /**
     * Constructor for RequestVariable class.
     * @param name The name of the variable.
     */
  constructor(name: string) {
    this.name = name
    this.symbol = Symbol(this.name)
  }

  /**
     * Set the value of the variable in the current scope.
     * @param value The value to set.
     */
  set(value: T) {
    const scope = RequestContext.get()

    scope[this.symbol] = value
  }

  /**
     * Get the value of the variable from the current {@link RequestContext}.
     * @returns The value of the variable.
     * @throws Error if the variable does not exist.
     */
  get() {
    const scope = RequestContext.get()

    if (!(this.symbol in scope)) {
      throw new Error(`Variable "${this.name}" not found in scope `)
    }

    return scope[this.symbol] as T
  }

  /**
     * Check if the variable exists in the current {@link RequestContext}.
     * @returns True if the variable exists, false otherwise.
     */
  exists() {
    const scope = RequestContext.get()

    return this.symbol in scope
  }
}
