// Publish a dataset called dataset_one, referencing the
// declaration created in index.js

module.exports = (params) => {
  return publish("dataset_one", {
    ...params.defaultConfig
  }).query(ctx => `

select
  *
from 
  ${params.segmentSchema, ctx.ref(params.inputDatasetSchema, params.inputDatasetName)}
`)
}
