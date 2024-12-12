import * as attr from './attributes.js';

const query = `
{
  viewer {
    organizations (first:100) {
      edges {
        node {
          ${attr.organization()}
          teams (first:100) {
            edges {
              node {
                ${attr.team()}
                organization {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export default query;
