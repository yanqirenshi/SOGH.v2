import * as attr from './attributes.js';

const query = `
{
  organization(login: "@login") {
    id
    teams(query: "@team-name", first:1) {
      edges {
        node {
          ${attr.team()}
          members {
            edges {
              node {
                ${attr.user()}
              }
            }
          }
          repositories (first: 100, orderBy:{field:UPDATED_AT,direction:DESC}) {
            edges {
              node {
                ${attr.repositories()}
              }
            }
          }
          projectsV2 (first: 100, orderBy:{field:UPDATED_AT,direction:DESC}) {
            edges {
              node {
                ${attr.projectv2()}
              }
            }
          }
          childTeams (first: 100) {
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
