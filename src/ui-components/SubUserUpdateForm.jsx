/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { SubUser } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function SubUserUpdateForm(props) {
  const {
    id: idProp,
    subUser: subUserModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    group: "",
    name: "",
    gender: "",
    birthYear: "",
    isControl: false,
  };
  const [group, setGroup] = React.useState(initialValues.group);
  const [name, setName] = React.useState(initialValues.name);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [birthYear, setBirthYear] = React.useState(initialValues.birthYear);
  const [isControl, setIsControl] = React.useState(initialValues.isControl);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = subUserRecord
      ? { ...initialValues, ...subUserRecord }
      : initialValues;
    setGroup(cleanValues.group);
    setName(cleanValues.name);
    setGender(cleanValues.gender);
    setBirthYear(cleanValues.birthYear);
    setIsControl(cleanValues.isControl);
    setErrors({});
  };
  const [subUserRecord, setSubUserRecord] = React.useState(subUserModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SubUser, idProp)
        : subUserModelProp;
      setSubUserRecord(record);
    };
    queryData();
  }, [idProp, subUserModelProp]);
  React.useEffect(resetStateValues, [subUserRecord]);
  const validations = {
    group: [],
    name: [{ type: "Required" }],
    gender: [{ type: "Required" }],
    birthYear: [{ type: "Required" }],
    isControl: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          group,
          name,
          gender,
          birthYear,
          isControl,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            SubUser.copyOf(subUserRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SubUserUpdateForm")}
      {...rest}
    >
      <TextField
        label="Group"
        isRequired={false}
        isReadOnly={false}
        value={group}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              group: value,
              name,
              gender,
              birthYear,
              isControl,
            };
            const result = onChange(modelFields);
            value = result?.group ?? value;
          }
          if (errors.group?.hasError) {
            runValidationTasks("group", value);
          }
          setGroup(value);
        }}
        onBlur={() => runValidationTasks("group", group)}
        errorMessage={errors.group?.errorMessage}
        hasError={errors.group?.hasError}
        {...getOverrideProps(overrides, "group")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              group,
              name: value,
              gender,
              birthYear,
              isControl,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={true}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              group,
              name,
              gender: value,
              birthYear,
              isControl,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Birth year"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={birthYear}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              group,
              name,
              gender,
              birthYear: value,
              isControl,
            };
            const result = onChange(modelFields);
            value = result?.birthYear ?? value;
          }
          if (errors.birthYear?.hasError) {
            runValidationTasks("birthYear", value);
          }
          setBirthYear(value);
        }}
        onBlur={() => runValidationTasks("birthYear", birthYear)}
        errorMessage={errors.birthYear?.errorMessage}
        hasError={errors.birthYear?.hasError}
        {...getOverrideProps(overrides, "birthYear")}
      ></TextField>
      <SwitchField
        label="Is control"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isControl}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              group,
              name,
              gender,
              birthYear,
              isControl: value,
            };
            const result = onChange(modelFields);
            value = result?.isControl ?? value;
          }
          if (errors.isControl?.hasError) {
            runValidationTasks("isControl", value);
          }
          setIsControl(value);
        }}
        onBlur={() => runValidationTasks("isControl", isControl)}
        errorMessage={errors.isControl?.errorMessage}
        hasError={errors.isControl?.hasError}
        {...getOverrideProps(overrides, "isControl")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || subUserModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || subUserModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
