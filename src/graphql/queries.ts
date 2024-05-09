/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getGroupInfo = /* GraphQL */ `query GetGroupInfo($id: ID!) {
  getGroupInfo(id: $id) {
    id
    group
    owner
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGroupInfoQueryVariables,
  APITypes.GetGroupInfoQuery
>;
export const listGroupInfos = /* GraphQL */ `query ListGroupInfos(
  $filter: ModelGroupInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroupInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      group
      owner
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupInfosQueryVariables,
  APITypes.ListGroupInfosQuery
>;
export const getSubUser = /* GraphQL */ `query GetSubUser($id: ID!) {
  getSubUser(id: $id) {
    id
    group
    rootEmail
    name
    gender
    birthYear
    isControl
    blueDyeTestID
    blueDyeTest {
      id
      group
      stamp
      finishedEating
      subUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    responses {
      nextToken
      __typename
    }
    detailResponses {
      nextToken
      __typename
    }
    blueDyeResponses {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSubUserQueryVariables,
  APITypes.GetSubUserQuery
>;
export const listSubUsers = /* GraphQL */ `query ListSubUsers(
  $filter: ModelSubUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      group
      rootEmail
      name
      gender
      birthYear
      isControl
      blueDyeTestID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSubUsersQueryVariables,
  APITypes.ListSubUsersQuery
>;
export const getResponse = /* GraphQL */ `query GetResponse($id: ID!) {
  getResponse(id: $id) {
    id
    group
    stamp
    type
    qid
    textResponse
    selected
    numeric
    all_selected
    subUserId
    detailResponseID
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResponseQueryVariables,
  APITypes.GetResponseQuery
>;
export const listResponses = /* GraphQL */ `query ListResponses(
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      group
      stamp
      type
      qid
      textResponse
      selected
      numeric
      all_selected
      subUserId
      detailResponseID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResponsesQueryVariables,
  APITypes.ListResponsesQuery
>;
export const responsesBySubUserIdAndStamp = /* GraphQL */ `query ResponsesBySubUserIdAndStamp(
  $subUserId: ID!
  $stamp: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  responsesBySubUserIdAndStamp(
    subUserId: $subUserId
    stamp: $stamp
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      group
      stamp
      type
      qid
      textResponse
      selected
      numeric
      all_selected
      subUserId
      detailResponseID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ResponsesBySubUserIdAndStampQueryVariables,
  APITypes.ResponsesBySubUserIdAndStampQuery
>;
export const responsesByDetailResponseID = /* GraphQL */ `query ResponsesByDetailResponseID(
  $detailResponseID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  responsesByDetailResponseID(
    detailResponseID: $detailResponseID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      group
      stamp
      type
      qid
      textResponse
      selected
      numeric
      all_selected
      subUserId
      detailResponseID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ResponsesByDetailResponseIDQueryVariables,
  APITypes.ResponsesByDetailResponseIDQuery
>;
export const getDetailResponse = /* GraphQL */ `query GetDetailResponse($id: ID!) {
  getDetailResponse(id: $id) {
    id
    group
    stamp
    type
    description
    responses {
      nextToken
      __typename
    }
    subUserId
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDetailResponseQueryVariables,
  APITypes.GetDetailResponseQuery
>;
export const listDetailResponses = /* GraphQL */ `query ListDetailResponses(
  $filter: ModelDetailResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  listDetailResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      group
      stamp
      type
      description
      subUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDetailResponsesQueryVariables,
  APITypes.ListDetailResponsesQuery
>;
export const detailResponsesBySubUserIdAndStamp = /* GraphQL */ `query DetailResponsesBySubUserIdAndStamp(
  $subUserId: ID!
  $stamp: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelDetailResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  detailResponsesBySubUserIdAndStamp(
    subUserId: $subUserId
    stamp: $stamp
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      group
      stamp
      type
      description
      subUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DetailResponsesBySubUserIdAndStampQueryVariables,
  APITypes.DetailResponsesBySubUserIdAndStampQuery
>;
export const getBlueDyeTest = /* GraphQL */ `query GetBlueDyeTest($id: ID!) {
  getBlueDyeTest(id: $id) {
    id
    group
    stamp
    finishedEating
    logs {
      nextToken
      __typename
    }
    subUserId
    subUser {
      id
      group
      rootEmail
      name
      gender
      birthYear
      isControl
      blueDyeTestID
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBlueDyeTestQueryVariables,
  APITypes.GetBlueDyeTestQuery
>;
export const listBlueDyeTests = /* GraphQL */ `query ListBlueDyeTests(
  $filter: ModelBlueDyeTestFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlueDyeTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      group
      stamp
      finishedEating
      subUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBlueDyeTestsQueryVariables,
  APITypes.ListBlueDyeTestsQuery
>;
export const getBlueDyeResponse = /* GraphQL */ `query GetBlueDyeResponse($id: ID!) {
  getBlueDyeResponse(id: $id) {
    id
    group
    stamp
    finishedEating
    logs {
      nextToken
      __typename
    }
    subUserId
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBlueDyeResponseQueryVariables,
  APITypes.GetBlueDyeResponseQuery
>;
export const listBlueDyeResponses = /* GraphQL */ `query ListBlueDyeResponses(
  $filter: ModelBlueDyeResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlueDyeResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      group
      stamp
      finishedEating
      subUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBlueDyeResponsesQueryVariables,
  APITypes.ListBlueDyeResponsesQuery
>;
export const blueDyeResponsesBySubUserIdAndStamp = /* GraphQL */ `query BlueDyeResponsesBySubUserIdAndStamp(
  $subUserId: ID!
  $stamp: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelBlueDyeResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  blueDyeResponsesBySubUserIdAndStamp(
    subUserId: $subUserId
    stamp: $stamp
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      group
      stamp
      finishedEating
      subUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BlueDyeResponsesBySubUserIdAndStampQueryVariables,
  APITypes.BlueDyeResponsesBySubUserIdAndStampQuery
>;
export const getBlueDyeTestLog = /* GraphQL */ `query GetBlueDyeTestLog($id: ID!) {
  getBlueDyeTestLog(id: $id) {
    id
    group
    isBlue
    blueDyeTestID
    blueDyeTest {
      id
      group
      stamp
      finishedEating
      subUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    detailResponseID
    response {
      id
      group
      stamp
      type
      description
      subUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBlueDyeTestLogQueryVariables,
  APITypes.GetBlueDyeTestLogQuery
>;
export const listBlueDyeTestLogs = /* GraphQL */ `query ListBlueDyeTestLogs(
  $filter: ModelBlueDyeTestLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlueDyeTestLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      group
      isBlue
      blueDyeTestID
      detailResponseID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBlueDyeTestLogsQueryVariables,
  APITypes.ListBlueDyeTestLogsQuery
>;
export const blueDyeTestLogsByBlueDyeTestID = /* GraphQL */ `query BlueDyeTestLogsByBlueDyeTestID(
  $blueDyeTestID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBlueDyeTestLogFilterInput
  $limit: Int
  $nextToken: String
) {
  blueDyeTestLogsByBlueDyeTestID(
    blueDyeTestID: $blueDyeTestID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      group
      isBlue
      blueDyeTestID
      detailResponseID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BlueDyeTestLogsByBlueDyeTestIDQueryVariables,
  APITypes.BlueDyeTestLogsByBlueDyeTestIDQuery
>;
export const getBlueDyeResponseLog = /* GraphQL */ `query GetBlueDyeResponseLog($id: ID!) {
  getBlueDyeResponseLog(id: $id) {
    id
    group
    isBlue
    blueDyeResponseID
    blueDyeResponse {
      id
      group
      stamp
      finishedEating
      subUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    detailResponseID
    response {
      id
      group
      stamp
      type
      description
      subUserId
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBlueDyeResponseLogQueryVariables,
  APITypes.GetBlueDyeResponseLogQuery
>;
export const listBlueDyeResponseLogs = /* GraphQL */ `query ListBlueDyeResponseLogs(
  $filter: ModelBlueDyeResponseLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlueDyeResponseLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      group
      isBlue
      blueDyeResponseID
      detailResponseID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBlueDyeResponseLogsQueryVariables,
  APITypes.ListBlueDyeResponseLogsQuery
>;
export const blueDyeResponseLogsByBlueDyeResponseID = /* GraphQL */ `query BlueDyeResponseLogsByBlueDyeResponseID(
  $blueDyeResponseID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBlueDyeResponseLogFilterInput
  $limit: Int
  $nextToken: String
) {
  blueDyeResponseLogsByBlueDyeResponseID(
    blueDyeResponseID: $blueDyeResponseID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      group
      isBlue
      blueDyeResponseID
      detailResponseID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BlueDyeResponseLogsByBlueDyeResponseIDQueryVariables,
  APITypes.BlueDyeResponseLogsByBlueDyeResponseIDQuery
>;
