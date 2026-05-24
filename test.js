const { test } = require('node:test')
const assert = require('node:assert/strict')

const acFileExtensions = require('./index')

test('query by ext returns correct entry', () => {
  const result = acFileExtensions.query({ ext: 'jpg' })
  assert.ok(result, 'should return a result')
  assert.equal(result.ext, 'jpg')
  assert.equal(result.mimetype, 'image/jpeg')
})

test('query by mimeType returns array of matching entries', () => {
  const result = acFileExtensions.query({ mimeType: 'image/jpeg' })
  assert.ok(Array.isArray(result), 'should return an array')
  assert.ok(result.length > 0, 'should have at least one result')
  assert.ok(result.every(r => r.mimetype === 'image/jpeg'), 'all entries should match mimeType')
})

test('query by unknown ext returns undefined', () => {
  const result = acFileExtensions.query({ ext: 'thisdoesnotexist' })
  assert.equal(result, undefined)
})

test('list returns full collection as array', () => {
  const result = acFileExtensions.list()
  assert.ok(Array.isArray(result), 'should return an array')
  assert.ok(result.length > 0, 'collection should not be empty')
  assert.ok(result.every(r => r.ext && r.mimetype), 'every entry should have ext and mimetype')
})
