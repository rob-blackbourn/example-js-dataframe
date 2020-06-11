export class Series {
  constructor (name, array) {
    this.name = name
    this.array = array

    return new Proxy(this, {
      get: (obj, prop, receiver) => {
        if (prop in obj) {
          return Reflect.get(obj, prop, receiver)
        } else {
          return Reflect.get(obj.array, prop, receiver.array)
        }
      },
      set: (obj, prop, value, receiver) => {
        if (prop in obj) {
          return Reflect.set(obj, prop, value, receiver)
        } else {
          return Reflect.set(obj.array, prop, value, receiver.array)
        }
      },
      apply: (target, thisArgument, argumentList) => {
        return Reflect.apply(target, thisArgument, argumentList)
      },
      // construct: Reflect.construct,
      defineProperty: Reflect.defineProperty,
      getOwnPropertyDescriptor: Reflect.getOwnPropertyDescriptor,
      deleteProperty: Reflect.deleteProperty,
      getPrototypeOf: Reflect.getPrototypeOf,
      setPrototypeOf: Reflect.setPrototypeOf,
      isExtensible: Reflect.isExtensible,
      preventExtensions: Reflect.preventExtensions,
      has: Reflect.has,
      ownKeys: Reflect.ownKeys
    })
  }

  [Symbol.for('+')] (other) {
    if (this.array.length !== other.array.length) {
      throw Error('Cannot add series of different lengths!')
    }

    return new Series(
      `${this.name}+${other.name}`,
      this.array.map((value, index) => value + other.array[index])
    )
  }

  [Symbol.for('+')] (other) {
    return new Series(
      `${this.name}+${other.name}`,
      this.array.map((value, index) => value + other.array[index])
    )
  }

  [Symbol.for('-')] (other) {
    return new Series(
      `${this.name}-${other.name}`,
      this.array.map((value, index) => value - other.array[index])
    )
  }

  [Symbol.for('*')] (other) {
    return new Series(
      `${this.name}*${other.name}`,
      this.array.map((value, index) => value * other.array[index])
    )
  }

  [Symbol.for('/')] (other) {
    return new Series(
      `${this.name}/${other.name}`,
      this.array.map((value, index) => value / other.array[index])
    )
  }

  toString () {
    return `(${this.name}): ${this.array.join(', ')}`
  }
}
