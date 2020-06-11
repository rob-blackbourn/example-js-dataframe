'operator-overloading enabled'

import { Series } from './Series'
import { DataFrame } from './DataFrame'

// const height = new Series('height', [1.82, 1.72, 1.64, 1.88])
// console.log(height)

// console.log(`${height}`)
// console.log(height.toString())

// const weight = new Series('weight', [81.4, 72.3, 69.9, 79.5])
// const ratio = weight / height
// console.log(ratio.toString())

// const s1 = new Series('numbers', [1, 2, 3, 4])
// s1.push(5)
// console.log(s1.toString())

const df = DataFrame.fromObject(
  [
    { col0: 'a', col1: 5, col2: 8.1 },
    { col0: 'b', col1: 6, col2: 3.2 }
  ]
)
console.log(df.toString())
df.col3 = df.col1 + df.col2
console.log(df.toString())
