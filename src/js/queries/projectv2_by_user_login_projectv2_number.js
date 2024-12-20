import * as attr from './attributes.js';

const query = `{
  user (login: "@user-login") {
    projectV2 (number: @projectv2-number) {
      ${attr.projectv2()}
      fields(first: 100) {
        nodes {
          ... on ProjectV2Field {
            ${attr.projectv2Field()}
          }
          ... on ProjectV2SingleSelectField {
            ${attr.projectv2FieldSelect()}
            options {
              id
              name
              nameHTML
            }
          }
          ... on ProjectV2IterationField {
            ${attr.projectv2FieldIteration()}
            configuration {
              startDay
              duration
              iterations {
                id
                title
                titleHTML
                startDate
                duration
              }
              completedIterations {
                id
                title
                titleHTML
                startDate
                duration
              }
            }
          }
        }
      }
      creator {
        ${attr.actor()}
        ... on User { id }
        ... on Organization { id }
        ... on Mannequin { id }
        ... on EnterpriseUserAccount { id }
        ... on Bot { id }
      }
      owner {
        id
        ... on Issue { id }
        ... on User { id }
        ... on PullRequest { id }
        ... on Organization { id }
      }
    }
  }
}`;

export default query;
