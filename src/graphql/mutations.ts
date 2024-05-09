/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createGroupInfo = /* GraphQL */ `mutation CreateGroupInfo(
  $input: CreateGroupInfoInput!
  $condition: ModelGroupInfoConditionInput
) {
  createGroupInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGroupInfoMutationVariables,
  APITypes.CreateGroupInfoMutation
>;
export const updateGroupInfo = /* GraphQL */ `mutation UpdateGroupInfo(
  $input: UpdateGroupInfoInput!
  $condition: ModelGroupInfoConditionInput
) {
  updateGroupInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGroupInfoMutationVariables,
  APITypes.UpdateGroupInfoMutation
>;
export const deleteGroupInfo = /* GraphQL */ `mutation DeleteGroupInfo(
  $input: DeleteGroupInfoInput!
  $condition: ModelGroupInfoConditionInput
) {
  deleteGroupInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGroupInfoMutationVariables,
  APITypes.DeleteGroupInfoMutation
>;
export const createSubUser = /* GraphQL */ `mutation CreateSubUser(
  $input: CreateSubUserInput!
  $condition: ModelSubUserConditionInput
) {
  createSubUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSubUserMutationVariables,
  APITypes.CreateSubUserMutation
>;
export const updateSubUser = /* GraphQL */ `mutation UpdateSubUser(
  $input: UpdateSubUserInput!
  $condition: ModelSubUserConditionInput
) {
  updateSubUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSubUserMutationVariables,
  APITypes.UpdateSubUserMutation
>;
export const deleteSubUser = /* GraphQL */ `mutation DeleteSubUser(
  $input: DeleteSubUserInput!
  $condition: ModelSubUserConditionInput
) {
  deleteSubUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSubUserMutationVariables,
  APITypes.DeleteSubUserMutation
>;
export const createResponse = /* GraphQL */ `mutation CreateResponse(
  $input: CreateResponseInput!
  $condition: ModelResponseConditionInput
) {
  createResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateResponseMutationVariables,
  APITypes.CreateResponseMutation
>;
export const updateResponse = /* GraphQL */ `mutation UpdateResponse(
  $input: UpdateResponseInput!
  $condition: ModelResponseConditionInput
) {
  updateResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateResponseMutationVariables,
  APITypes.UpdateResponseMutation
>;
export const deleteResponse = /* GraphQL */ `mutation DeleteResponse(
  $input: DeleteResponseInput!
  $condition: ModelResponseConditionInput
) {
  deleteResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteResponseMutationVariables,
  APITypes.DeleteResponseMutation
>;
export const createDetailResponse = /* GraphQL */ `mutation CreateDetailResponse(
  $input: CreateDetailResponseInput!
  $condition: ModelDetailResponseConditionInput
) {
  createDetailResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDetailResponseMutationVariables,
  APITypes.CreateDetailResponseMutation
>;
export const updateDetailResponse = /* GraphQL */ `mutation UpdateDetailResponse(
  $input: UpdateDetailResponseInput!
  $condition: ModelDetailResponseConditionInput
) {
  updateDetailResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDetailResponseMutationVariables,
  APITypes.UpdateDetailResponseMutation
>;
export const deleteDetailResponse = /* GraphQL */ `mutation DeleteDetailResponse(
  $input: DeleteDetailResponseInput!
  $condition: ModelDetailResponseConditionInput
) {
  deleteDetailResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDetailResponseMutationVariables,
  APITypes.DeleteDetailResponseMutation
>;
export const createBlueDyeTest = /* GraphQL */ `mutation CreateBlueDyeTest(
  $input: CreateBlueDyeTestInput!
  $condition: ModelBlueDyeTestConditionInput
) {
  createBlueDyeTest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBlueDyeTestMutationVariables,
  APITypes.CreateBlueDyeTestMutation
>;
export const updateBlueDyeTest = /* GraphQL */ `mutation UpdateBlueDyeTest(
  $input: UpdateBlueDyeTestInput!
  $condition: ModelBlueDyeTestConditionInput
) {
  updateBlueDyeTest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBlueDyeTestMutationVariables,
  APITypes.UpdateBlueDyeTestMutation
>;
export const deleteBlueDyeTest = /* GraphQL */ `mutation DeleteBlueDyeTest(
  $input: DeleteBlueDyeTestInput!
  $condition: ModelBlueDyeTestConditionInput
) {
  deleteBlueDyeTest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBlueDyeTestMutationVariables,
  APITypes.DeleteBlueDyeTestMutation
>;
export const createBlueDyeResponse = /* GraphQL */ `mutation CreateBlueDyeResponse(
  $input: CreateBlueDyeResponseInput!
  $condition: ModelBlueDyeResponseConditionInput
) {
  createBlueDyeResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBlueDyeResponseMutationVariables,
  APITypes.CreateBlueDyeResponseMutation
>;
export const updateBlueDyeResponse = /* GraphQL */ `mutation UpdateBlueDyeResponse(
  $input: UpdateBlueDyeResponseInput!
  $condition: ModelBlueDyeResponseConditionInput
) {
  updateBlueDyeResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBlueDyeResponseMutationVariables,
  APITypes.UpdateBlueDyeResponseMutation
>;
export const deleteBlueDyeResponse = /* GraphQL */ `mutation DeleteBlueDyeResponse(
  $input: DeleteBlueDyeResponseInput!
  $condition: ModelBlueDyeResponseConditionInput
) {
  deleteBlueDyeResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBlueDyeResponseMutationVariables,
  APITypes.DeleteBlueDyeResponseMutation
>;
export const createBlueDyeTestLog = /* GraphQL */ `mutation CreateBlueDyeTestLog(
  $input: CreateBlueDyeTestLogInput!
  $condition: ModelBlueDyeTestLogConditionInput
) {
  createBlueDyeTestLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBlueDyeTestLogMutationVariables,
  APITypes.CreateBlueDyeTestLogMutation
>;
export const updateBlueDyeTestLog = /* GraphQL */ `mutation UpdateBlueDyeTestLog(
  $input: UpdateBlueDyeTestLogInput!
  $condition: ModelBlueDyeTestLogConditionInput
) {
  updateBlueDyeTestLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBlueDyeTestLogMutationVariables,
  APITypes.UpdateBlueDyeTestLogMutation
>;
export const deleteBlueDyeTestLog = /* GraphQL */ `mutation DeleteBlueDyeTestLog(
  $input: DeleteBlueDyeTestLogInput!
  $condition: ModelBlueDyeTestLogConditionInput
) {
  deleteBlueDyeTestLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBlueDyeTestLogMutationVariables,
  APITypes.DeleteBlueDyeTestLogMutation
>;
export const createBlueDyeResponseLog = /* GraphQL */ `mutation CreateBlueDyeResponseLog(
  $input: CreateBlueDyeResponseLogInput!
  $condition: ModelBlueDyeResponseLogConditionInput
) {
  createBlueDyeResponseLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBlueDyeResponseLogMutationVariables,
  APITypes.CreateBlueDyeResponseLogMutation
>;
export const updateBlueDyeResponseLog = /* GraphQL */ `mutation UpdateBlueDyeResponseLog(
  $input: UpdateBlueDyeResponseLogInput!
  $condition: ModelBlueDyeResponseLogConditionInput
) {
  updateBlueDyeResponseLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBlueDyeResponseLogMutationVariables,
  APITypes.UpdateBlueDyeResponseLogMutation
>;
export const deleteBlueDyeResponseLog = /* GraphQL */ `mutation DeleteBlueDyeResponseLog(
  $input: DeleteBlueDyeResponseLogInput!
  $condition: ModelBlueDyeResponseLogConditionInput
) {
  deleteBlueDyeResponseLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBlueDyeResponseLogMutationVariables,
  APITypes.DeleteBlueDyeResponseLogMutation
>;
