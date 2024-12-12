import * as attr from './attributes.js';

const query = `{
  organization(login: "@login") {
    ${attr.organization()}
    membersWithRole(first: 100) {
      edges {
        node {
          ${attr.user()}
        }
      }
    }
    teams(first: 100) {
      edges {
        node {
          ${attr.team()}
          organization {
            id
          }
        }
      }
    }
    repositories(first: 100, orderBy:{field:UPDATED_AT,direction:DESC}) {
      edges {
        node {
          ${attr.repositories()}
        }
      }
    }
    projectsV2(first: 100, orderBy:{field:UPDATED_AT,direction:DESC}) {
      edges {
        node {
          ${attr.projectv2()}
        }
      }
    }
  }
}`;

export default query;
