const collection = require('./collection')
const _ = require('lodash')

const acFileExtensions = () => {

  const query = (params) => {
    const ext = _.get(params, 'ext')
    const mimeType = _.get(params, 'mimeType')

    const fquery = {}
    if (ext) {
      _.set(fquery, 'ext', ext)
      return _.find(collection, fquery)
    }
    if (mimeType) {
      _.set(fquery, 'mimetype', mimeType) 
      return _.filter(collection, fquery)
    }
  }

  const list = () => {
    return collection
  }
 
  return {
    query,
    list
  }
}

module.exports = acFileExtensions()