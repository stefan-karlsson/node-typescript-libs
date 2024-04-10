import { ArgumentNotProvidedException } from '@aviene/exceptions'
import { convertPropsToObject, isEmpty } from '@aviene/common'
/**
 * Possible types for primitive values
 */
type Primitives = string | number | boolean

/**
 * Interface for defining a domain primitive containing a single value
 */
interface DomainPrimitive<T extends Primitives | Date> {
  value: T
}

type ValueObjectProps<T> = T extends Primitives | Date ? DomainPrimitive<T> : T

/**
 * Abstract class representing a Value Object
 */
export abstract class ValueObject<T> {
  protected readonly props: ValueObjectProps<T>

  /**
     * Constructor to initialize the Value Object with properties
     * @param props Value object properties
     */
  constructor(props: ValueObjectProps<T>) {
    this.checkIfEmpty(props)
    this.validate(props)
    this.props = props
  }

  /**
    * Static method to check if an object is an instance of ValueObject
    * @param obj Object to check
    */
  static isValueObject(obj: unknown): obj is ValueObject<unknown> {
    return obj instanceof ValueObject
  }

  /**
     * Check if two Value Objects are equal based on their properties
     * @param vo Value Object to compare
     */
  equals(vo?: ValueObject<T>): boolean {
    if (typeof vo === 'undefined') {
      return false
    }
    return JSON.stringify(this) === JSON.stringify(vo)
  }

  /**
   * Unpacks the value object and returns its underlying value.
   *
   * @returns The underlying value of the value object.
   */
  unpack(): Readonly<T> {
    if (this.isDomainPrimitive(this.props)) {
      return this.props.value
    }

    const propsCopy = convertPropsToObject(this.props)

    return Object.freeze(propsCopy) as Readonly<T>
  }

  private checkIfEmpty(props: ValueObjectProps<T>): void {
    if (
      isEmpty(props)
      || (this.isDomainPrimitive(props) && isEmpty(props.value))
    ) {
      throw new ArgumentNotProvidedException('Property cannot be empty')
    }
  }

  private isDomainPrimitive(obj: unknown): obj is DomainPrimitive<T & (Primitives | Date)> {
    if (Object.prototype.hasOwnProperty.call(obj, 'value')) {
      return true
    }
    return false
  }

  /**
     * Abstract method to define property validation logic
     * @param props Value object properties
     */
  protected abstract validate(props: ValueObjectProps<T>): void
}
export type {
  Primitives,
  DomainPrimitive,
}
