import { AsyncScope } from './async-scope.js'

/**
 * Represents an asynchronous variable.
 */
export class AsyncVar<T> {
  readonly name: string
  private readonly symbol: symbol
  /**
     * Constructor for AsyncVar class.
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
    const scope = AsyncScope.get()

    scope[this.symbol] = value
  }

  /**
     * Get the value of the variable from the current {@link AsyncScope}.
     * @returns The value of the variable.
     * @throws Error if the variable does not exist.
     */
  get() {
    const scope = AsyncScope.get()

    if (!(this.symbol in scope)) {
      throw new Error(`Variable "${this.name}" not found in scope `)
    }

    return scope[this.symbol] as T
  }

  /**
     * Check if the variable exists in the current {@link AsyncScope}.
     * @returns True if the variable exists, false otherwise.
     */
  exists() {
    const scope = AsyncScope.get()

    return this.symbol in scope
  }
}
