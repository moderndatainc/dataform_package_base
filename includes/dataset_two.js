// Publish a dataset called dataset_two, referencing
// dataset_one

module.exports = (params) => {
  return publish("dataset_two", {
    ...params.defaultConfig
  }).query(ctx => `

select
  *
from 
  ${params.segmentSchema, ctx.ref(defaultConfig.database, defaultConfig.schema, "dataset_one")}
`)
}
