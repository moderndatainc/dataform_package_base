// index.js is where you expose the functionality of your package.
// In this example the package exports a single function. Calling that
// function returns a declaration and two datasets.
// 
// For more complex examples, explore the code respositories of the
// packages available here: https://docs.dataform.co/packages

// Reference the includes/ files required by your package
const datasetOne = require("./includes/dataset_one");
const datasetTwo = require("./includes/dataset_two");

module.exports = (params) => {

 params = {
    // Allow users to specify variables to change the behaviour of your package
    inputDatasetSchema: null,
    inputDatasetName: null,
    ...params
  };
  
  // Add a declaration for source data
  const inputData = declare({
    ...defaultConfig,
    schema: params.inputDatasetSchema,
    name: params.inputDatasetName
  });

  // Publish and return datasets.
  return {
    inputData,
    datasetOne: datasetOne(params),
    datasetTwo: datasetTwo(params),
  }
}

