import * as _ from 'fxjs2'
import { pipe, tap, isNull, isEmpty, reduce, ifElse, constant, callMethod, satisfiesSome, go } from 'fxjs2/Strict/index.js'
import { map } from 'fxjs2/Lazy/index.js'

const sum = reduce((r, v) => r + v)

const isBlank = satisfiesSome([isNull, isEmpty])

const toInts = map(
  pipe(
    Number,
    tap(v => {
      if (v < 0) { throw new Error('runtimeError') }
    })
  )
)

export const add = str => {
  const m = /\/\/(.)\n(.*)/
  let token
  if (m.test(str)) {
    [, token, str] = str.match(m)
  }

  return go(str, ifElse(isBlank,
    constant(0),
    pipe(
      callMethod('split', _, new RegExp(`[,:${token}]`)),
      toInts,
      sum
    )
  ))
}
