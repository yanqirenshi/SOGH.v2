import * as attr from './attributes.js';

const query = `{
  organization (login:"@login") {
    repository (name:"@name") {
      issue (number:@number){
        ${attr.issue()}
        comments(orderBy: {field: UPDATED_AT, direction: DESC}, ${attr.page_nation()}) {
          totalCount
          nodes {
            ${attr.issue_comment()}
            pullRequest {
              ${attr.pull_request()}
            }
            author {
              ${attr.actor()}
              ... on Bot {
                id
              }
              ... on EnterpriseUserAccount {
                id
              }
              ... on Mannequin {
                id
              }
              ... on Organization {
                id
              }
              ... on User {
                id
              }
            }
            editor {
              ${attr.actor()}
              avatarUrl
              ... on Bot {
                id
              }
              ... on EnterpriseUserAccount {
                id
                name
              }
              ... on Mannequin {
                id
                email
              }
              ... on Organization {
                id
                email
              }
              ... on User {
                id
              }
            }
          }
          pageInfo {
            ${attr.page_info()}
          }
        }
      }
    }
  }
}`;

export default query;
