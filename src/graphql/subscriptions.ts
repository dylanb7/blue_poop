/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateGroupInfo = /* GraphQL */ `subscription OnCreateGroupInfo(
  $filter: ModelSubscriptionGroupInfoFilterInput
  $owner: String
) {
  onCreateGroupInfo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGroupInfoSubscriptionVariables,
  APITypes.OnCreateGroupInfoSubscription
>;
export const onUpdateGroupInfo = /* GraphQL */ `subscription OnUpdateGroupInfo(
  $filter: ModelSubscriptionGroupInfoFilterInput
  $owner: String
) {
  onUpdateGroupInfo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGroupInfoSubscriptionVariables,
  APITypes.OnUpdateGroupInfoSubscription
>;
export const onDeleteGroupInfo = /* GraphQL */ `subscription OnDeleteGroupInfo(
  $filter: ModelSubscriptionGroupInfoFilterInput
  $owner: String
) {
  onDeleteGroupInfo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGroupInfoSubscriptionVariables,
  APITypes.OnDeleteGroupInfoSubscription
>;
export const onCreateSubUser = /* GraphQL */ `subscription OnCreateSubUser(
  $filter: ModelSubscriptionSubUserFilterInput
  $owner: String
) {
  onCreateSubUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSubUserSubscriptionVariables,
  APITypes.OnCreateSubUserSubscription
>;
export const onUpdateSubUser = /* GraphQL */ `subscription OnUpdateSubUser(
  $filter: ModelSubscriptionSubUserFilterInput
  $owner: String
) {
  onUpdateSubUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSubUserSubscriptionVariables,
  APITypes.OnUpdateSubUserSubscription
>;
export const onDeleteSubUser = /* GraphQL */ `subscription OnDeleteSubUser(
  $filter: ModelSubscriptionSubUserFilterInput
  $owner: String
) {
  onDeleteSubUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSubUserSubscriptionVariables,
  APITypes.OnDeleteSubUserSubscription
>;
export const onCreateResponse = /* GraphQL */ `subscription OnCreateResponse(
  $filter: ModelSubscriptionResponseFilterInput
  $owner: String
) {
  onCreateResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateResponseSubscriptionVariables,
  APITypes.OnCreateResponseSubscription
>;
export const onUpdateResponse = /* GraphQL */ `subscription OnUpdateResponse(
  $filter: ModelSubscriptionResponseFilterInput
  $owner: String
) {
  onUpdateResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateResponseSubscriptionVariables,
  APITypes.OnUpdateResponseSubscription
>;
export const onDeleteResponse = /* GraphQL */ `subscription OnDeleteResponse(
  $filter: ModelSubscriptionResponseFilterInput
  $owner: String
) {
  onDeleteResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteResponseSubscriptionVariables,
  APITypes.OnDeleteResponseSubscription
>;
export const onCreateDetailResponse = /* GraphQL */ `subscription OnCreateDetailResponse(
  $filter: ModelSubscriptionDetailResponseFilterInput
  $owner: String
) {
  onCreateDetailResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDetailResponseSubscriptionVariables,
  APITypes.OnCreateDetailResponseSubscription
>;
export const onUpdateDetailResponse = /* GraphQL */ `subscription OnUpdateDetailResponse(
  $filter: ModelSubscriptionDetailResponseFilterInput
  $owner: String
) {
  onUpdateDetailResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDetailResponseSubscriptionVariables,
  APITypes.OnUpdateDetailResponseSubscription
>;
export const onDeleteDetailResponse = /* GraphQL */ `subscription OnDeleteDetailResponse(
  $filter: ModelSubscriptionDetailResponseFilterInput
  $owner: String
) {
  onDeleteDetailResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDetailResponseSubscriptionVariables,
  APITypes.OnDeleteDetailResponseSubscription
>;
export const onCreateBlueDyeTest = /* GraphQL */ `subscription OnCreateBlueDyeTest(
  $filter: ModelSubscriptionBlueDyeTestFilterInput
  $owner: String
) {
  onCreateBlueDyeTest(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBlueDyeTestSubscriptionVariables,
  APITypes.OnCreateBlueDyeTestSubscription
>;
export const onUpdateBlueDyeTest = /* GraphQL */ `subscription OnUpdateBlueDyeTest(
  $filter: ModelSubscriptionBlueDyeTestFilterInput
  $owner: String
) {
  onUpdateBlueDyeTest(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBlueDyeTestSubscriptionVariables,
  APITypes.OnUpdateBlueDyeTestSubscription
>;
export const onDeleteBlueDyeTest = /* GraphQL */ `subscription OnDeleteBlueDyeTest(
  $filter: ModelSubscriptionBlueDyeTestFilterInput
  $owner: String
) {
  onDeleteBlueDyeTest(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBlueDyeTestSubscriptionVariables,
  APITypes.OnDeleteBlueDyeTestSubscription
>;
export const onCreateBlueDyeResponse = /* GraphQL */ `subscription OnCreateBlueDyeResponse(
  $filter: ModelSubscriptionBlueDyeResponseFilterInput
  $owner: String
) {
  onCreateBlueDyeResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBlueDyeResponseSubscriptionVariables,
  APITypes.OnCreateBlueDyeResponseSubscription
>;
export const onUpdateBlueDyeResponse = /* GraphQL */ `subscription OnUpdateBlueDyeResponse(
  $filter: ModelSubscriptionBlueDyeResponseFilterInput
  $owner: String
) {
  onUpdateBlueDyeResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBlueDyeResponseSubscriptionVariables,
  APITypes.OnUpdateBlueDyeResponseSubscription
>;
export const onDeleteBlueDyeResponse = /* GraphQL */ `subscription OnDeleteBlueDyeResponse(
  $filter: ModelSubscriptionBlueDyeResponseFilterInput
  $owner: String
) {
  onDeleteBlueDyeResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBlueDyeResponseSubscriptionVariables,
  APITypes.OnDeleteBlueDyeResponseSubscription
>;
export const onCreateBlueDyeTestLog = /* GraphQL */ `subscription OnCreateBlueDyeTestLog(
  $filter: ModelSubscriptionBlueDyeTestLogFilterInput
  $owner: String
) {
  onCreateBlueDyeTestLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBlueDyeTestLogSubscriptionVariables,
  APITypes.OnCreateBlueDyeTestLogSubscription
>;
export const onUpdateBlueDyeTestLog = /* GraphQL */ `subscription OnUpdateBlueDyeTestLog(
  $filter: ModelSubscriptionBlueDyeTestLogFilterInput
  $owner: String
) {
  onUpdateBlueDyeTestLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBlueDyeTestLogSubscriptionVariables,
  APITypes.OnUpdateBlueDyeTestLogSubscription
>;
export const onDeleteBlueDyeTestLog = /* GraphQL */ `subscription OnDeleteBlueDyeTestLog(
  $filter: ModelSubscriptionBlueDyeTestLogFilterInput
  $owner: String
) {
  onDeleteBlueDyeTestLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBlueDyeTestLogSubscriptionVariables,
  APITypes.OnDeleteBlueDyeTestLogSubscription
>;
export const onCreateBlueDyeResponseLog = /* GraphQL */ `subscription OnCreateBlueDyeResponseLog(
  $filter: ModelSubscriptionBlueDyeResponseLogFilterInput
  $owner: String
) {
  onCreateBlueDyeResponseLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBlueDyeResponseLogSubscriptionVariables,
  APITypes.OnCreateBlueDyeResponseLogSubscription
>;
export const onUpdateBlueDyeResponseLog = /* GraphQL */ `subscription OnUpdateBlueDyeResponseLog(
  $filter: ModelSubscriptionBlueDyeResponseLogFilterInput
  $owner: String
) {
  onUpdateBlueDyeResponseLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBlueDyeResponseLogSubscriptionVariables,
  APITypes.OnUpdateBlueDyeResponseLogSubscription
>;
export const onDeleteBlueDyeResponseLog = /* GraphQL */ `subscription OnDeleteBlueDyeResponseLog(
  $filter: ModelSubscriptionBlueDyeResponseLogFilterInput
  $owner: String
) {
  onDeleteBlueDyeResponseLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBlueDyeResponseLogSubscriptionVariables,
  APITypes.OnDeleteBlueDyeResponseLogSubscription
>;
