/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGroupInfoInput = {
  id?: string | null,
  group?: string | null,
  owner?: string | null,
  name?: string | null,
  description?: string | null,
};

export type ModelGroupInfoConditionInput = {
  group?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelGroupInfoConditionInput | null > | null,
  or?: Array< ModelGroupInfoConditionInput | null > | null,
  not?: ModelGroupInfoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type GroupInfo = {
  __typename: "GroupInfo",
  id: string,
  group?: string | null,
  owner?: string | null,
  name?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupInfoInput = {
  id: string,
  group?: string | null,
  owner?: string | null,
  name?: string | null,
  description?: string | null,
};

export type DeleteGroupInfoInput = {
  id: string,
};

export type CreateSubUserInput = {
  id?: string | null,
  group?: string | null,
  rootEmail?: string | null,
  name?: string | null,
  gender?: string | null,
  birthYear?: number | null,
  isControl: boolean,
  blueDyeTestID?: string | null,
};

export type ModelSubUserConditionInput = {
  group?: ModelStringInput | null,
  rootEmail?: ModelStringInput | null,
  name?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  birthYear?: ModelIntInput | null,
  isControl?: ModelBooleanInput | null,
  blueDyeTestID?: ModelIDInput | null,
  and?: Array< ModelSubUserConditionInput | null > | null,
  or?: Array< ModelSubUserConditionInput | null > | null,
  not?: ModelSubUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type SubUser = {
  __typename: "SubUser",
  id: string,
  group?: string | null,
  rootEmail?: string | null,
  name?: string | null,
  gender?: string | null,
  birthYear?: number | null,
  isControl: boolean,
  blueDyeTestID?: string | null,
  blueDyeTest?: BlueDyeTest | null,
  responses?: ModelResponseConnection | null,
  detailResponses?: ModelDetailResponseConnection | null,
  blueDyeResponses?: ModelBlueDyeResponseConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type BlueDyeTest = {
  __typename: "BlueDyeTest",
  id: string,
  group?: string | null,
  stamp: string,
  finishedEating?: number | null,
  logs?: ModelBlueDyeTestLogConnection | null,
  subUserId: string,
  subUser: SubUser,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelBlueDyeTestLogConnection = {
  __typename: "ModelBlueDyeTestLogConnection",
  items:  Array<BlueDyeTestLog | null >,
  nextToken?: string | null,
};

export type BlueDyeTestLog = {
  __typename: "BlueDyeTestLog",
  id: string,
  group?: string | null,
  isBlue: boolean,
  blueDyeTestID?: string | null,
  blueDyeTest?: BlueDyeTest | null,
  detailResponseID?: string | null,
  response?: DetailResponse | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type DetailResponse = {
  __typename: "DetailResponse",
  id: string,
  group?: string | null,
  stamp: string,
  type?: string | null,
  description?: string | null,
  responses?: ModelResponseConnection | null,
  subUserId: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelResponseConnection = {
  __typename: "ModelResponseConnection",
  items:  Array<Response | null >,
  nextToken?: string | null,
};

export type Response = {
  __typename: "Response",
  id: string,
  group?: string | null,
  stamp: string,
  type: string,
  qid: string,
  textResponse?: string | null,
  selected?: number | null,
  numeric?: number | null,
  all_selected?: Array< number > | null,
  subUserId: string,
  detailResponseID?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelDetailResponseConnection = {
  __typename: "ModelDetailResponseConnection",
  items:  Array<DetailResponse | null >,
  nextToken?: string | null,
};

export type ModelBlueDyeResponseConnection = {
  __typename: "ModelBlueDyeResponseConnection",
  items:  Array<BlueDyeResponse | null >,
  nextToken?: string | null,
};

export type BlueDyeResponse = {
  __typename: "BlueDyeResponse",
  id: string,
  group?: string | null,
  stamp: string,
  finishedEating: number,
  logs?: ModelBlueDyeResponseLogConnection | null,
  subUserId: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelBlueDyeResponseLogConnection = {
  __typename: "ModelBlueDyeResponseLogConnection",
  items:  Array<BlueDyeResponseLog | null >,
  nextToken?: string | null,
};

export type BlueDyeResponseLog = {
  __typename: "BlueDyeResponseLog",
  id: string,
  group?: string | null,
  isBlue: boolean,
  blueDyeResponseID?: string | null,
  blueDyeResponse?: BlueDyeResponse | null,
  detailResponseID?: string | null,
  response?: DetailResponse | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateSubUserInput = {
  id: string,
  group?: string | null,
  rootEmail?: string | null,
  name?: string | null,
  gender?: string | null,
  birthYear?: number | null,
  isControl?: boolean | null,
  blueDyeTestID?: string | null,
};

export type DeleteSubUserInput = {
  id: string,
};

export type CreateResponseInput = {
  id?: string | null,
  group?: string | null,
  stamp: string,
  type: string,
  qid: string,
  textResponse?: string | null,
  selected?: number | null,
  numeric?: number | null,
  all_selected?: Array< number > | null,
  subUserId: string,
  detailResponseID?: string | null,
};

export type ModelResponseConditionInput = {
  group?: ModelStringInput | null,
  stamp?: ModelStringInput | null,
  type?: ModelStringInput | null,
  qid?: ModelStringInput | null,
  textResponse?: ModelStringInput | null,
  selected?: ModelIntInput | null,
  numeric?: ModelIntInput | null,
  all_selected?: ModelIntInput | null,
  subUserId?: ModelIDInput | null,
  detailResponseID?: ModelIDInput | null,
  and?: Array< ModelResponseConditionInput | null > | null,
  or?: Array< ModelResponseConditionInput | null > | null,
  not?: ModelResponseConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateResponseInput = {
  id: string,
  group?: string | null,
  stamp?: string | null,
  type?: string | null,
  qid?: string | null,
  textResponse?: string | null,
  selected?: number | null,
  numeric?: number | null,
  all_selected?: Array< number > | null,
  subUserId?: string | null,
  detailResponseID?: string | null,
};

export type DeleteResponseInput = {
  id: string,
};

export type CreateDetailResponseInput = {
  id?: string | null,
  group?: string | null,
  stamp: string,
  type?: string | null,
  description?: string | null,
  subUserId: string,
};

export type ModelDetailResponseConditionInput = {
  group?: ModelStringInput | null,
  stamp?: ModelStringInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  subUserId?: ModelIDInput | null,
  and?: Array< ModelDetailResponseConditionInput | null > | null,
  or?: Array< ModelDetailResponseConditionInput | null > | null,
  not?: ModelDetailResponseConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateDetailResponseInput = {
  id: string,
  group?: string | null,
  stamp?: string | null,
  type?: string | null,
  description?: string | null,
  subUserId?: string | null,
};

export type DeleteDetailResponseInput = {
  id: string,
};

export type CreateBlueDyeTestInput = {
  id?: string | null,
  group?: string | null,
  stamp: string,
  finishedEating?: number | null,
  subUserId: string,
};

export type ModelBlueDyeTestConditionInput = {
  group?: ModelStringInput | null,
  stamp?: ModelStringInput | null,
  finishedEating?: ModelIntInput | null,
  subUserId?: ModelIDInput | null,
  and?: Array< ModelBlueDyeTestConditionInput | null > | null,
  or?: Array< ModelBlueDyeTestConditionInput | null > | null,
  not?: ModelBlueDyeTestConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateBlueDyeTestInput = {
  id: string,
  group?: string | null,
  stamp?: string | null,
  finishedEating?: number | null,
  subUserId?: string | null,
};

export type DeleteBlueDyeTestInput = {
  id: string,
};

export type CreateBlueDyeResponseInput = {
  id?: string | null,
  group?: string | null,
  stamp: string,
  finishedEating: number,
  subUserId: string,
};

export type ModelBlueDyeResponseConditionInput = {
  group?: ModelStringInput | null,
  stamp?: ModelStringInput | null,
  finishedEating?: ModelIntInput | null,
  subUserId?: ModelIDInput | null,
  and?: Array< ModelBlueDyeResponseConditionInput | null > | null,
  or?: Array< ModelBlueDyeResponseConditionInput | null > | null,
  not?: ModelBlueDyeResponseConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateBlueDyeResponseInput = {
  id: string,
  group?: string | null,
  stamp?: string | null,
  finishedEating?: number | null,
  subUserId?: string | null,
};

export type DeleteBlueDyeResponseInput = {
  id: string,
};

export type CreateBlueDyeTestLogInput = {
  id?: string | null,
  group?: string | null,
  isBlue: boolean,
  blueDyeTestID?: string | null,
  detailResponseID?: string | null,
};

export type ModelBlueDyeTestLogConditionInput = {
  group?: ModelStringInput | null,
  isBlue?: ModelBooleanInput | null,
  blueDyeTestID?: ModelIDInput | null,
  detailResponseID?: ModelIDInput | null,
  and?: Array< ModelBlueDyeTestLogConditionInput | null > | null,
  or?: Array< ModelBlueDyeTestLogConditionInput | null > | null,
  not?: ModelBlueDyeTestLogConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateBlueDyeTestLogInput = {
  id: string,
  group?: string | null,
  isBlue?: boolean | null,
  blueDyeTestID?: string | null,
  detailResponseID?: string | null,
};

export type DeleteBlueDyeTestLogInput = {
  id: string,
};

export type CreateBlueDyeResponseLogInput = {
  id?: string | null,
  group?: string | null,
  isBlue: boolean,
  blueDyeResponseID?: string | null,
  detailResponseID?: string | null,
};

export type ModelBlueDyeResponseLogConditionInput = {
  group?: ModelStringInput | null,
  isBlue?: ModelBooleanInput | null,
  blueDyeResponseID?: ModelIDInput | null,
  detailResponseID?: ModelIDInput | null,
  and?: Array< ModelBlueDyeResponseLogConditionInput | null > | null,
  or?: Array< ModelBlueDyeResponseLogConditionInput | null > | null,
  not?: ModelBlueDyeResponseLogConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateBlueDyeResponseLogInput = {
  id: string,
  group?: string | null,
  isBlue?: boolean | null,
  blueDyeResponseID?: string | null,
  detailResponseID?: string | null,
};

export type DeleteBlueDyeResponseLogInput = {
  id: string,
};

export type ModelGroupInfoFilterInput = {
  id?: ModelIDInput | null,
  group?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGroupInfoFilterInput | null > | null,
  or?: Array< ModelGroupInfoFilterInput | null > | null,
  not?: ModelGroupInfoFilterInput | null,
};

export type ModelGroupInfoConnection = {
  __typename: "ModelGroupInfoConnection",
  items:  Array<GroupInfo | null >,
  nextToken?: string | null,
};

export type ModelSubUserFilterInput = {
  id?: ModelIDInput | null,
  group?: ModelStringInput | null,
  rootEmail?: ModelStringInput | null,
  name?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  birthYear?: ModelIntInput | null,
  isControl?: ModelBooleanInput | null,
  blueDyeTestID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubUserFilterInput | null > | null,
  or?: Array< ModelSubUserFilterInput | null > | null,
  not?: ModelSubUserFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubUserConnection = {
  __typename: "ModelSubUserConnection",
  items:  Array<SubUser | null >,
  nextToken?: string | null,
};

export type ModelResponseFilterInput = {
  id?: ModelIDInput | null,
  group?: ModelStringInput | null,
  stamp?: ModelStringInput | null,
  type?: ModelStringInput | null,
  qid?: ModelStringInput | null,
  textResponse?: ModelStringInput | null,
  selected?: ModelIntInput | null,
  numeric?: ModelIntInput | null,
  all_selected?: ModelIntInput | null,
  subUserId?: ModelIDInput | null,
  detailResponseID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelResponseFilterInput | null > | null,
  or?: Array< ModelResponseFilterInput | null > | null,
  not?: ModelResponseFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelDetailResponseFilterInput = {
  id?: ModelIDInput | null,
  group?: ModelStringInput | null,
  stamp?: ModelStringInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  subUserId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDetailResponseFilterInput | null > | null,
  or?: Array< ModelDetailResponseFilterInput | null > | null,
  not?: ModelDetailResponseFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelBlueDyeTestFilterInput = {
  id?: ModelIDInput | null,
  group?: ModelStringInput | null,
  stamp?: ModelStringInput | null,
  finishedEating?: ModelIntInput | null,
  subUserId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBlueDyeTestFilterInput | null > | null,
  or?: Array< ModelBlueDyeTestFilterInput | null > | null,
  not?: ModelBlueDyeTestFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelBlueDyeTestConnection = {
  __typename: "ModelBlueDyeTestConnection",
  items:  Array<BlueDyeTest | null >,
  nextToken?: string | null,
};

export type ModelBlueDyeResponseFilterInput = {
  id?: ModelIDInput | null,
  group?: ModelStringInput | null,
  stamp?: ModelStringInput | null,
  finishedEating?: ModelIntInput | null,
  subUserId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBlueDyeResponseFilterInput | null > | null,
  or?: Array< ModelBlueDyeResponseFilterInput | null > | null,
  not?: ModelBlueDyeResponseFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelBlueDyeTestLogFilterInput = {
  id?: ModelIDInput | null,
  group?: ModelStringInput | null,
  isBlue?: ModelBooleanInput | null,
  blueDyeTestID?: ModelIDInput | null,
  detailResponseID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBlueDyeTestLogFilterInput | null > | null,
  or?: Array< ModelBlueDyeTestLogFilterInput | null > | null,
  not?: ModelBlueDyeTestLogFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelBlueDyeResponseLogFilterInput = {
  id?: ModelIDInput | null,
  group?: ModelStringInput | null,
  isBlue?: ModelBooleanInput | null,
  blueDyeResponseID?: ModelIDInput | null,
  detailResponseID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBlueDyeResponseLogFilterInput | null > | null,
  or?: Array< ModelBlueDyeResponseLogFilterInput | null > | null,
  not?: ModelBlueDyeResponseLogFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionGroupInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupInfoFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSubUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  rootEmail?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  birthYear?: ModelSubscriptionIntInput | null,
  isControl?: ModelSubscriptionBooleanInput | null,
  blueDyeTestID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionResponseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  stamp?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  qid?: ModelSubscriptionStringInput | null,
  textResponse?: ModelSubscriptionStringInput | null,
  selected?: ModelSubscriptionIntInput | null,
  numeric?: ModelSubscriptionIntInput | null,
  all_selected?: ModelSubscriptionIntInput | null,
  subUserId?: ModelSubscriptionIDInput | null,
  detailResponseID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResponseFilterInput | null > | null,
  or?: Array< ModelSubscriptionResponseFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionDetailResponseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  stamp?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  subUserId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDetailResponseFilterInput | null > | null,
  or?: Array< ModelSubscriptionDetailResponseFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBlueDyeTestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  stamp?: ModelSubscriptionStringInput | null,
  finishedEating?: ModelSubscriptionIntInput | null,
  subUserId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlueDyeTestFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlueDyeTestFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBlueDyeResponseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  stamp?: ModelSubscriptionStringInput | null,
  finishedEating?: ModelSubscriptionIntInput | null,
  subUserId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlueDyeResponseFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlueDyeResponseFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBlueDyeTestLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isBlue?: ModelSubscriptionBooleanInput | null,
  blueDyeTestID?: ModelSubscriptionIDInput | null,
  detailResponseID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlueDyeTestLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlueDyeTestLogFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBlueDyeResponseLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isBlue?: ModelSubscriptionBooleanInput | null,
  blueDyeResponseID?: ModelSubscriptionIDInput | null,
  detailResponseID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlueDyeResponseLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlueDyeResponseLogFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateGroupInfoMutationVariables = {
  input: CreateGroupInfoInput,
  condition?: ModelGroupInfoConditionInput | null,
};

export type CreateGroupInfoMutation = {
  createGroupInfo?:  {
    __typename: "GroupInfo",
    id: string,
    group?: string | null,
    owner?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupInfoMutationVariables = {
  input: UpdateGroupInfoInput,
  condition?: ModelGroupInfoConditionInput | null,
};

export type UpdateGroupInfoMutation = {
  updateGroupInfo?:  {
    __typename: "GroupInfo",
    id: string,
    group?: string | null,
    owner?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupInfoMutationVariables = {
  input: DeleteGroupInfoInput,
  condition?: ModelGroupInfoConditionInput | null,
};

export type DeleteGroupInfoMutation = {
  deleteGroupInfo?:  {
    __typename: "GroupInfo",
    id: string,
    group?: string | null,
    owner?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubUserMutationVariables = {
  input: CreateSubUserInput,
  condition?: ModelSubUserConditionInput | null,
};

export type CreateSubUserMutation = {
  createSubUser?:  {
    __typename: "SubUser",
    id: string,
    group?: string | null,
    rootEmail?: string | null,
    name?: string | null,
    gender?: string | null,
    birthYear?: number | null,
    isControl: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    detailResponses?:  {
      __typename: "ModelDetailResponseConnection",
      nextToken?: string | null,
    } | null,
    blueDyeResponses?:  {
      __typename: "ModelBlueDyeResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateSubUserMutationVariables = {
  input: UpdateSubUserInput,
  condition?: ModelSubUserConditionInput | null,
};

export type UpdateSubUserMutation = {
  updateSubUser?:  {
    __typename: "SubUser",
    id: string,
    group?: string | null,
    rootEmail?: string | null,
    name?: string | null,
    gender?: string | null,
    birthYear?: number | null,
    isControl: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    detailResponses?:  {
      __typename: "ModelDetailResponseConnection",
      nextToken?: string | null,
    } | null,
    blueDyeResponses?:  {
      __typename: "ModelBlueDyeResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteSubUserMutationVariables = {
  input: DeleteSubUserInput,
  condition?: ModelSubUserConditionInput | null,
};

export type DeleteSubUserMutation = {
  deleteSubUser?:  {
    __typename: "SubUser",
    id: string,
    group?: string | null,
    rootEmail?: string | null,
    name?: string | null,
    gender?: string | null,
    birthYear?: number | null,
    isControl: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    detailResponses?:  {
      __typename: "ModelDetailResponseConnection",
      nextToken?: string | null,
    } | null,
    blueDyeResponses?:  {
      __typename: "ModelBlueDyeResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateResponseMutationVariables = {
  input: CreateResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type CreateResponseMutation = {
  createResponse?:  {
    __typename: "Response",
    id: string,
    group?: string | null,
    stamp: string,
    type: string,
    qid: string,
    textResponse?: string | null,
    selected?: number | null,
    numeric?: number | null,
    all_selected?: Array< number > | null,
    subUserId: string,
    detailResponseID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateResponseMutationVariables = {
  input: UpdateResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type UpdateResponseMutation = {
  updateResponse?:  {
    __typename: "Response",
    id: string,
    group?: string | null,
    stamp: string,
    type: string,
    qid: string,
    textResponse?: string | null,
    selected?: number | null,
    numeric?: number | null,
    all_selected?: Array< number > | null,
    subUserId: string,
    detailResponseID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteResponseMutationVariables = {
  input: DeleteResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type DeleteResponseMutation = {
  deleteResponse?:  {
    __typename: "Response",
    id: string,
    group?: string | null,
    stamp: string,
    type: string,
    qid: string,
    textResponse?: string | null,
    selected?: number | null,
    numeric?: number | null,
    all_selected?: Array< number > | null,
    subUserId: string,
    detailResponseID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateDetailResponseMutationVariables = {
  input: CreateDetailResponseInput,
  condition?: ModelDetailResponseConditionInput | null,
};

export type CreateDetailResponseMutation = {
  createDetailResponse?:  {
    __typename: "DetailResponse",
    id: string,
    group?: string | null,
    stamp: string,
    type?: string | null,
    description?: string | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateDetailResponseMutationVariables = {
  input: UpdateDetailResponseInput,
  condition?: ModelDetailResponseConditionInput | null,
};

export type UpdateDetailResponseMutation = {
  updateDetailResponse?:  {
    __typename: "DetailResponse",
    id: string,
    group?: string | null,
    stamp: string,
    type?: string | null,
    description?: string | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteDetailResponseMutationVariables = {
  input: DeleteDetailResponseInput,
  condition?: ModelDetailResponseConditionInput | null,
};

export type DeleteDetailResponseMutation = {
  deleteDetailResponse?:  {
    __typename: "DetailResponse",
    id: string,
    group?: string | null,
    stamp: string,
    type?: string | null,
    description?: string | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBlueDyeTestMutationVariables = {
  input: CreateBlueDyeTestInput,
  condition?: ModelBlueDyeTestConditionInput | null,
};

export type CreateBlueDyeTestMutation = {
  createBlueDyeTest?:  {
    __typename: "BlueDyeTest",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating?: number | null,
    logs?:  {
      __typename: "ModelBlueDyeTestLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    subUser:  {
      __typename: "SubUser",
      id: string,
      group?: string | null,
      rootEmail?: string | null,
      name?: string | null,
      gender?: string | null,
      birthYear?: number | null,
      isControl: boolean,
      blueDyeTestID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateBlueDyeTestMutationVariables = {
  input: UpdateBlueDyeTestInput,
  condition?: ModelBlueDyeTestConditionInput | null,
};

export type UpdateBlueDyeTestMutation = {
  updateBlueDyeTest?:  {
    __typename: "BlueDyeTest",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating?: number | null,
    logs?:  {
      __typename: "ModelBlueDyeTestLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    subUser:  {
      __typename: "SubUser",
      id: string,
      group?: string | null,
      rootEmail?: string | null,
      name?: string | null,
      gender?: string | null,
      birthYear?: number | null,
      isControl: boolean,
      blueDyeTestID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteBlueDyeTestMutationVariables = {
  input: DeleteBlueDyeTestInput,
  condition?: ModelBlueDyeTestConditionInput | null,
};

export type DeleteBlueDyeTestMutation = {
  deleteBlueDyeTest?:  {
    __typename: "BlueDyeTest",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating?: number | null,
    logs?:  {
      __typename: "ModelBlueDyeTestLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    subUser:  {
      __typename: "SubUser",
      id: string,
      group?: string | null,
      rootEmail?: string | null,
      name?: string | null,
      gender?: string | null,
      birthYear?: number | null,
      isControl: boolean,
      blueDyeTestID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBlueDyeResponseMutationVariables = {
  input: CreateBlueDyeResponseInput,
  condition?: ModelBlueDyeResponseConditionInput | null,
};

export type CreateBlueDyeResponseMutation = {
  createBlueDyeResponse?:  {
    __typename: "BlueDyeResponse",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating: number,
    logs?:  {
      __typename: "ModelBlueDyeResponseLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateBlueDyeResponseMutationVariables = {
  input: UpdateBlueDyeResponseInput,
  condition?: ModelBlueDyeResponseConditionInput | null,
};

export type UpdateBlueDyeResponseMutation = {
  updateBlueDyeResponse?:  {
    __typename: "BlueDyeResponse",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating: number,
    logs?:  {
      __typename: "ModelBlueDyeResponseLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteBlueDyeResponseMutationVariables = {
  input: DeleteBlueDyeResponseInput,
  condition?: ModelBlueDyeResponseConditionInput | null,
};

export type DeleteBlueDyeResponseMutation = {
  deleteBlueDyeResponse?:  {
    __typename: "BlueDyeResponse",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating: number,
    logs?:  {
      __typename: "ModelBlueDyeResponseLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBlueDyeTestLogMutationVariables = {
  input: CreateBlueDyeTestLogInput,
  condition?: ModelBlueDyeTestLogConditionInput | null,
};

export type CreateBlueDyeTestLogMutation = {
  createBlueDyeTestLog?:  {
    __typename: "BlueDyeTestLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateBlueDyeTestLogMutationVariables = {
  input: UpdateBlueDyeTestLogInput,
  condition?: ModelBlueDyeTestLogConditionInput | null,
};

export type UpdateBlueDyeTestLogMutation = {
  updateBlueDyeTestLog?:  {
    __typename: "BlueDyeTestLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteBlueDyeTestLogMutationVariables = {
  input: DeleteBlueDyeTestLogInput,
  condition?: ModelBlueDyeTestLogConditionInput | null,
};

export type DeleteBlueDyeTestLogMutation = {
  deleteBlueDyeTestLog?:  {
    __typename: "BlueDyeTestLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBlueDyeResponseLogMutationVariables = {
  input: CreateBlueDyeResponseLogInput,
  condition?: ModelBlueDyeResponseLogConditionInput | null,
};

export type CreateBlueDyeResponseLogMutation = {
  createBlueDyeResponseLog?:  {
    __typename: "BlueDyeResponseLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeResponseID?: string | null,
    blueDyeResponse?:  {
      __typename: "BlueDyeResponse",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating: number,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateBlueDyeResponseLogMutationVariables = {
  input: UpdateBlueDyeResponseLogInput,
  condition?: ModelBlueDyeResponseLogConditionInput | null,
};

export type UpdateBlueDyeResponseLogMutation = {
  updateBlueDyeResponseLog?:  {
    __typename: "BlueDyeResponseLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeResponseID?: string | null,
    blueDyeResponse?:  {
      __typename: "BlueDyeResponse",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating: number,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteBlueDyeResponseLogMutationVariables = {
  input: DeleteBlueDyeResponseLogInput,
  condition?: ModelBlueDyeResponseLogConditionInput | null,
};

export type DeleteBlueDyeResponseLogMutation = {
  deleteBlueDyeResponseLog?:  {
    __typename: "BlueDyeResponseLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeResponseID?: string | null,
    blueDyeResponse?:  {
      __typename: "BlueDyeResponse",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating: number,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetGroupInfoQueryVariables = {
  id: string,
};

export type GetGroupInfoQuery = {
  getGroupInfo?:  {
    __typename: "GroupInfo",
    id: string,
    group?: string | null,
    owner?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupInfosQueryVariables = {
  filter?: ModelGroupInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupInfosQuery = {
  listGroupInfos?:  {
    __typename: "ModelGroupInfoConnection",
    items:  Array< {
      __typename: "GroupInfo",
      id: string,
      group?: string | null,
      owner?: string | null,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubUserQueryVariables = {
  id: string,
};

export type GetSubUserQuery = {
  getSubUser?:  {
    __typename: "SubUser",
    id: string,
    group?: string | null,
    rootEmail?: string | null,
    name?: string | null,
    gender?: string | null,
    birthYear?: number | null,
    isControl: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    detailResponses?:  {
      __typename: "ModelDetailResponseConnection",
      nextToken?: string | null,
    } | null,
    blueDyeResponses?:  {
      __typename: "ModelBlueDyeResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSubUsersQueryVariables = {
  filter?: ModelSubUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubUsersQuery = {
  listSubUsers?:  {
    __typename: "ModelSubUserConnection",
    items:  Array< {
      __typename: "SubUser",
      id: string,
      group?: string | null,
      rootEmail?: string | null,
      name?: string | null,
      gender?: string | null,
      birthYear?: number | null,
      isControl: boolean,
      blueDyeTestID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResponseQueryVariables = {
  id: string,
};

export type GetResponseQuery = {
  getResponse?:  {
    __typename: "Response",
    id: string,
    group?: string | null,
    stamp: string,
    type: string,
    qid: string,
    textResponse?: string | null,
    selected?: number | null,
    numeric?: number | null,
    all_selected?: Array< number > | null,
    subUserId: string,
    detailResponseID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListResponsesQueryVariables = {
  filter?: ModelResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResponsesQuery = {
  listResponses?:  {
    __typename: "ModelResponseConnection",
    items:  Array< {
      __typename: "Response",
      id: string,
      group?: string | null,
      stamp: string,
      type: string,
      qid: string,
      textResponse?: string | null,
      selected?: number | null,
      numeric?: number | null,
      all_selected?: Array< number > | null,
      subUserId: string,
      detailResponseID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ResponsesBySubUserIdAndStampQueryVariables = {
  subUserId: string,
  stamp?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ResponsesBySubUserIdAndStampQuery = {
  responsesBySubUserIdAndStamp?:  {
    __typename: "ModelResponseConnection",
    items:  Array< {
      __typename: "Response",
      id: string,
      group?: string | null,
      stamp: string,
      type: string,
      qid: string,
      textResponse?: string | null,
      selected?: number | null,
      numeric?: number | null,
      all_selected?: Array< number > | null,
      subUserId: string,
      detailResponseID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ResponsesByDetailResponseIDQueryVariables = {
  detailResponseID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ResponsesByDetailResponseIDQuery = {
  responsesByDetailResponseID?:  {
    __typename: "ModelResponseConnection",
    items:  Array< {
      __typename: "Response",
      id: string,
      group?: string | null,
      stamp: string,
      type: string,
      qid: string,
      textResponse?: string | null,
      selected?: number | null,
      numeric?: number | null,
      all_selected?: Array< number > | null,
      subUserId: string,
      detailResponseID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDetailResponseQueryVariables = {
  id: string,
};

export type GetDetailResponseQuery = {
  getDetailResponse?:  {
    __typename: "DetailResponse",
    id: string,
    group?: string | null,
    stamp: string,
    type?: string | null,
    description?: string | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListDetailResponsesQueryVariables = {
  filter?: ModelDetailResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDetailResponsesQuery = {
  listDetailResponses?:  {
    __typename: "ModelDetailResponseConnection",
    items:  Array< {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DetailResponsesBySubUserIdAndStampQueryVariables = {
  subUserId: string,
  stamp?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDetailResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DetailResponsesBySubUserIdAndStampQuery = {
  detailResponsesBySubUserIdAndStamp?:  {
    __typename: "ModelDetailResponseConnection",
    items:  Array< {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlueDyeTestQueryVariables = {
  id: string,
};

export type GetBlueDyeTestQuery = {
  getBlueDyeTest?:  {
    __typename: "BlueDyeTest",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating?: number | null,
    logs?:  {
      __typename: "ModelBlueDyeTestLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    subUser:  {
      __typename: "SubUser",
      id: string,
      group?: string | null,
      rootEmail?: string | null,
      name?: string | null,
      gender?: string | null,
      birthYear?: number | null,
      isControl: boolean,
      blueDyeTestID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListBlueDyeTestsQueryVariables = {
  filter?: ModelBlueDyeTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlueDyeTestsQuery = {
  listBlueDyeTests?:  {
    __typename: "ModelBlueDyeTestConnection",
    items:  Array< {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlueDyeResponseQueryVariables = {
  id: string,
};

export type GetBlueDyeResponseQuery = {
  getBlueDyeResponse?:  {
    __typename: "BlueDyeResponse",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating: number,
    logs?:  {
      __typename: "ModelBlueDyeResponseLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListBlueDyeResponsesQueryVariables = {
  filter?: ModelBlueDyeResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlueDyeResponsesQuery = {
  listBlueDyeResponses?:  {
    __typename: "ModelBlueDyeResponseConnection",
    items:  Array< {
      __typename: "BlueDyeResponse",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating: number,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BlueDyeResponsesBySubUserIdAndStampQueryVariables = {
  subUserId: string,
  stamp?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBlueDyeResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BlueDyeResponsesBySubUserIdAndStampQuery = {
  blueDyeResponsesBySubUserIdAndStamp?:  {
    __typename: "ModelBlueDyeResponseConnection",
    items:  Array< {
      __typename: "BlueDyeResponse",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating: number,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlueDyeTestLogQueryVariables = {
  id: string,
};

export type GetBlueDyeTestLogQuery = {
  getBlueDyeTestLog?:  {
    __typename: "BlueDyeTestLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListBlueDyeTestLogsQueryVariables = {
  filter?: ModelBlueDyeTestLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlueDyeTestLogsQuery = {
  listBlueDyeTestLogs?:  {
    __typename: "ModelBlueDyeTestLogConnection",
    items:  Array< {
      __typename: "BlueDyeTestLog",
      id: string,
      group?: string | null,
      isBlue: boolean,
      blueDyeTestID?: string | null,
      detailResponseID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BlueDyeTestLogsByBlueDyeTestIDQueryVariables = {
  blueDyeTestID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBlueDyeTestLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BlueDyeTestLogsByBlueDyeTestIDQuery = {
  blueDyeTestLogsByBlueDyeTestID?:  {
    __typename: "ModelBlueDyeTestLogConnection",
    items:  Array< {
      __typename: "BlueDyeTestLog",
      id: string,
      group?: string | null,
      isBlue: boolean,
      blueDyeTestID?: string | null,
      detailResponseID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlueDyeResponseLogQueryVariables = {
  id: string,
};

export type GetBlueDyeResponseLogQuery = {
  getBlueDyeResponseLog?:  {
    __typename: "BlueDyeResponseLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeResponseID?: string | null,
    blueDyeResponse?:  {
      __typename: "BlueDyeResponse",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating: number,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListBlueDyeResponseLogsQueryVariables = {
  filter?: ModelBlueDyeResponseLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlueDyeResponseLogsQuery = {
  listBlueDyeResponseLogs?:  {
    __typename: "ModelBlueDyeResponseLogConnection",
    items:  Array< {
      __typename: "BlueDyeResponseLog",
      id: string,
      group?: string | null,
      isBlue: boolean,
      blueDyeResponseID?: string | null,
      detailResponseID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BlueDyeResponseLogsByBlueDyeResponseIDQueryVariables = {
  blueDyeResponseID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBlueDyeResponseLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BlueDyeResponseLogsByBlueDyeResponseIDQuery = {
  blueDyeResponseLogsByBlueDyeResponseID?:  {
    __typename: "ModelBlueDyeResponseLogConnection",
    items:  Array< {
      __typename: "BlueDyeResponseLog",
      id: string,
      group?: string | null,
      isBlue: boolean,
      blueDyeResponseID?: string | null,
      detailResponseID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGroupInfoSubscriptionVariables = {
  filter?: ModelSubscriptionGroupInfoFilterInput | null,
  owner?: string | null,
};

export type OnCreateGroupInfoSubscription = {
  onCreateGroupInfo?:  {
    __typename: "GroupInfo",
    id: string,
    group?: string | null,
    owner?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupInfoSubscriptionVariables = {
  filter?: ModelSubscriptionGroupInfoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGroupInfoSubscription = {
  onUpdateGroupInfo?:  {
    __typename: "GroupInfo",
    id: string,
    group?: string | null,
    owner?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupInfoSubscriptionVariables = {
  filter?: ModelSubscriptionGroupInfoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGroupInfoSubscription = {
  onDeleteGroupInfo?:  {
    __typename: "GroupInfo",
    id: string,
    group?: string | null,
    owner?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubUserSubscriptionVariables = {
  filter?: ModelSubscriptionSubUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateSubUserSubscription = {
  onCreateSubUser?:  {
    __typename: "SubUser",
    id: string,
    group?: string | null,
    rootEmail?: string | null,
    name?: string | null,
    gender?: string | null,
    birthYear?: number | null,
    isControl: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    detailResponses?:  {
      __typename: "ModelDetailResponseConnection",
      nextToken?: string | null,
    } | null,
    blueDyeResponses?:  {
      __typename: "ModelBlueDyeResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateSubUserSubscriptionVariables = {
  filter?: ModelSubscriptionSubUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSubUserSubscription = {
  onUpdateSubUser?:  {
    __typename: "SubUser",
    id: string,
    group?: string | null,
    rootEmail?: string | null,
    name?: string | null,
    gender?: string | null,
    birthYear?: number | null,
    isControl: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    detailResponses?:  {
      __typename: "ModelDetailResponseConnection",
      nextToken?: string | null,
    } | null,
    blueDyeResponses?:  {
      __typename: "ModelBlueDyeResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteSubUserSubscriptionVariables = {
  filter?: ModelSubscriptionSubUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSubUserSubscription = {
  onDeleteSubUser?:  {
    __typename: "SubUser",
    id: string,
    group?: string | null,
    rootEmail?: string | null,
    name?: string | null,
    gender?: string | null,
    birthYear?: number | null,
    isControl: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    detailResponses?:  {
      __typename: "ModelDetailResponseConnection",
      nextToken?: string | null,
    } | null,
    blueDyeResponses?:  {
      __typename: "ModelBlueDyeResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateResponseSubscriptionVariables = {
  filter?: ModelSubscriptionResponseFilterInput | null,
  owner?: string | null,
};

export type OnCreateResponseSubscription = {
  onCreateResponse?:  {
    __typename: "Response",
    id: string,
    group?: string | null,
    stamp: string,
    type: string,
    qid: string,
    textResponse?: string | null,
    selected?: number | null,
    numeric?: number | null,
    all_selected?: Array< number > | null,
    subUserId: string,
    detailResponseID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateResponseSubscriptionVariables = {
  filter?: ModelSubscriptionResponseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateResponseSubscription = {
  onUpdateResponse?:  {
    __typename: "Response",
    id: string,
    group?: string | null,
    stamp: string,
    type: string,
    qid: string,
    textResponse?: string | null,
    selected?: number | null,
    numeric?: number | null,
    all_selected?: Array< number > | null,
    subUserId: string,
    detailResponseID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteResponseSubscriptionVariables = {
  filter?: ModelSubscriptionResponseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteResponseSubscription = {
  onDeleteResponse?:  {
    __typename: "Response",
    id: string,
    group?: string | null,
    stamp: string,
    type: string,
    qid: string,
    textResponse?: string | null,
    selected?: number | null,
    numeric?: number | null,
    all_selected?: Array< number > | null,
    subUserId: string,
    detailResponseID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateDetailResponseSubscriptionVariables = {
  filter?: ModelSubscriptionDetailResponseFilterInput | null,
  owner?: string | null,
};

export type OnCreateDetailResponseSubscription = {
  onCreateDetailResponse?:  {
    __typename: "DetailResponse",
    id: string,
    group?: string | null,
    stamp: string,
    type?: string | null,
    description?: string | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateDetailResponseSubscriptionVariables = {
  filter?: ModelSubscriptionDetailResponseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDetailResponseSubscription = {
  onUpdateDetailResponse?:  {
    __typename: "DetailResponse",
    id: string,
    group?: string | null,
    stamp: string,
    type?: string | null,
    description?: string | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteDetailResponseSubscriptionVariables = {
  filter?: ModelSubscriptionDetailResponseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDetailResponseSubscription = {
  onDeleteDetailResponse?:  {
    __typename: "DetailResponse",
    id: string,
    group?: string | null,
    stamp: string,
    type?: string | null,
    description?: string | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBlueDyeTestSubscriptionVariables = {
  filter?: ModelSubscriptionBlueDyeTestFilterInput | null,
  owner?: string | null,
};

export type OnCreateBlueDyeTestSubscription = {
  onCreateBlueDyeTest?:  {
    __typename: "BlueDyeTest",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating?: number | null,
    logs?:  {
      __typename: "ModelBlueDyeTestLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    subUser:  {
      __typename: "SubUser",
      id: string,
      group?: string | null,
      rootEmail?: string | null,
      name?: string | null,
      gender?: string | null,
      birthYear?: number | null,
      isControl: boolean,
      blueDyeTestID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateBlueDyeTestSubscriptionVariables = {
  filter?: ModelSubscriptionBlueDyeTestFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBlueDyeTestSubscription = {
  onUpdateBlueDyeTest?:  {
    __typename: "BlueDyeTest",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating?: number | null,
    logs?:  {
      __typename: "ModelBlueDyeTestLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    subUser:  {
      __typename: "SubUser",
      id: string,
      group?: string | null,
      rootEmail?: string | null,
      name?: string | null,
      gender?: string | null,
      birthYear?: number | null,
      isControl: boolean,
      blueDyeTestID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteBlueDyeTestSubscriptionVariables = {
  filter?: ModelSubscriptionBlueDyeTestFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBlueDyeTestSubscription = {
  onDeleteBlueDyeTest?:  {
    __typename: "BlueDyeTest",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating?: number | null,
    logs?:  {
      __typename: "ModelBlueDyeTestLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    subUser:  {
      __typename: "SubUser",
      id: string,
      group?: string | null,
      rootEmail?: string | null,
      name?: string | null,
      gender?: string | null,
      birthYear?: number | null,
      isControl: boolean,
      blueDyeTestID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBlueDyeResponseSubscriptionVariables = {
  filter?: ModelSubscriptionBlueDyeResponseFilterInput | null,
  owner?: string | null,
};

export type OnCreateBlueDyeResponseSubscription = {
  onCreateBlueDyeResponse?:  {
    __typename: "BlueDyeResponse",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating: number,
    logs?:  {
      __typename: "ModelBlueDyeResponseLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateBlueDyeResponseSubscriptionVariables = {
  filter?: ModelSubscriptionBlueDyeResponseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBlueDyeResponseSubscription = {
  onUpdateBlueDyeResponse?:  {
    __typename: "BlueDyeResponse",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating: number,
    logs?:  {
      __typename: "ModelBlueDyeResponseLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteBlueDyeResponseSubscriptionVariables = {
  filter?: ModelSubscriptionBlueDyeResponseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBlueDyeResponseSubscription = {
  onDeleteBlueDyeResponse?:  {
    __typename: "BlueDyeResponse",
    id: string,
    group?: string | null,
    stamp: string,
    finishedEating: number,
    logs?:  {
      __typename: "ModelBlueDyeResponseLogConnection",
      nextToken?: string | null,
    } | null,
    subUserId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBlueDyeTestLogSubscriptionVariables = {
  filter?: ModelSubscriptionBlueDyeTestLogFilterInput | null,
  owner?: string | null,
};

export type OnCreateBlueDyeTestLogSubscription = {
  onCreateBlueDyeTestLog?:  {
    __typename: "BlueDyeTestLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateBlueDyeTestLogSubscriptionVariables = {
  filter?: ModelSubscriptionBlueDyeTestLogFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBlueDyeTestLogSubscription = {
  onUpdateBlueDyeTestLog?:  {
    __typename: "BlueDyeTestLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteBlueDyeTestLogSubscriptionVariables = {
  filter?: ModelSubscriptionBlueDyeTestLogFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBlueDyeTestLogSubscription = {
  onDeleteBlueDyeTestLog?:  {
    __typename: "BlueDyeTestLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeTestID?: string | null,
    blueDyeTest?:  {
      __typename: "BlueDyeTest",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating?: number | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBlueDyeResponseLogSubscriptionVariables = {
  filter?: ModelSubscriptionBlueDyeResponseLogFilterInput | null,
  owner?: string | null,
};

export type OnCreateBlueDyeResponseLogSubscription = {
  onCreateBlueDyeResponseLog?:  {
    __typename: "BlueDyeResponseLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeResponseID?: string | null,
    blueDyeResponse?:  {
      __typename: "BlueDyeResponse",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating: number,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateBlueDyeResponseLogSubscriptionVariables = {
  filter?: ModelSubscriptionBlueDyeResponseLogFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBlueDyeResponseLogSubscription = {
  onUpdateBlueDyeResponseLog?:  {
    __typename: "BlueDyeResponseLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeResponseID?: string | null,
    blueDyeResponse?:  {
      __typename: "BlueDyeResponse",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating: number,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteBlueDyeResponseLogSubscriptionVariables = {
  filter?: ModelSubscriptionBlueDyeResponseLogFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBlueDyeResponseLogSubscription = {
  onDeleteBlueDyeResponseLog?:  {
    __typename: "BlueDyeResponseLog",
    id: string,
    group?: string | null,
    isBlue: boolean,
    blueDyeResponseID?: string | null,
    blueDyeResponse?:  {
      __typename: "BlueDyeResponse",
      id: string,
      group?: string | null,
      stamp: string,
      finishedEating: number,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    detailResponseID?: string | null,
    response?:  {
      __typename: "DetailResponse",
      id: string,
      group?: string | null,
      stamp: string,
      type?: string | null,
      description?: string | null,
      subUserId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
