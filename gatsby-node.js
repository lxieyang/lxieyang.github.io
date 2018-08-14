/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   // Ensures we are processing only pdf files
//   if (node.extension === `pdf`) {
//     console.log(node.extension);
//     // Use `createFilePath` to turn pdf files in our `assets` directory into `/assets`
//     const relativeFilePath = createFilePath({
//       node,
//       getNode,
//       basePath: "src/",
//     });

//     console.log(relativeFilePath);
 
//     // Creates new query'able field with name of 'slug'
//     createNodeField({
//       node,
//       name: "slug",
//       value: `/assets${relativeFilePath}`,
//     });
//   }
// }