import * as attr from './attributes.js';

const query = `{
  repository(name: "@name", owner: "@owner") {
    ${attr.repository()}
    owner {
      id
      login
      resourcePath
    }
  }
}
`;

export default query;
