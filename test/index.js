
import test from 'ava'
import paths from '../src'

test('exports an object', t => {
  t.is(typeof paths, 'object')
})

const isStringMacro = (t, input) => {
  t.is(typeof input, 'string')
}

const startsWithM = (t, input) => {
  t.regex(input, /^M/)
}

const isCommands = (t, input) => {
  input.split(' ').forEach(c => {
    t.regex(c, /^[MLHVACZz\d]/)
  })
}

const keys = Object.keys(paths)

keys.forEach(key => {
  test(`${key} is a string`, isStringMacro, paths[key])
  test(`${key} starts with M`, startsWithM, paths[key])
  test(`${key} is an absolute path command`, isCommands, paths[key])
})

