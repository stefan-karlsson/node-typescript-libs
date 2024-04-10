import { type ObjectLiteral } from '../types/object-literal.type.js'
import { isObject } from './is-object.util.js'

function convertToRaw(item: unknown): unknown {
  if (isObject(item) && typeof item.toJSON === 'function') {
    return item.toJSON()
  }
  return item
}

export function convertPropsToObject(props: unknown): ObjectLiteral {
  if (!isObject(props)) {
    throw new TypeError(`Unable to convert props type <${typeof props}> to object`)
  }

  const propsCopy = structuredClone(props)

  for (const prop in propsCopy) {
    if (Object.hasOwn(propsCopy, prop)) {
      if (Array.isArray(propsCopy[prop])) {
        propsCopy[prop] = (propsCopy[prop] as unknown[]).map(item => convertToRaw(item))
      }
      propsCopy[prop] = convertToRaw(propsCopy[prop])
    }
  }
  return propsCopy
}
