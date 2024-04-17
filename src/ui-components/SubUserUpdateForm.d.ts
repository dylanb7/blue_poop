/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SubUser } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SubUserUpdateFormInputValues = {
    group?: string;
    name?: string;
    gender?: string;
    birthYear?: number;
    isControl?: boolean;
};
export declare type SubUserUpdateFormValidationValues = {
    group?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    birthYear?: ValidationFunction<number>;
    isControl?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubUserUpdateFormOverridesProps = {
    SubUserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    group?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    birthYear?: PrimitiveOverrideProps<TextFieldProps>;
    isControl?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type SubUserUpdateFormProps = React.PropsWithChildren<{
    overrides?: SubUserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    subUser?: SubUser;
    onSubmit?: (fields: SubUserUpdateFormInputValues) => SubUserUpdateFormInputValues;
    onSuccess?: (fields: SubUserUpdateFormInputValues) => void;
    onError?: (fields: SubUserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubUserUpdateFormInputValues) => SubUserUpdateFormInputValues;
    onValidate?: SubUserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SubUserUpdateForm(props: SubUserUpdateFormProps): React.ReactElement;
