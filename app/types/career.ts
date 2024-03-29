
import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";

export type FormContent = {
    inputs: InputInfo[];
    textarea: TextAreaInfo;
    policy?: CareerPolicy;
  };
  
  export type FormData = {
    name: string;
    email: string;
    position?: string;
    phone?: string;
    message: string;
    consent?: boolean;
  };
  
  export type FormDataOptions =
    | "name"
    | "email"
    | "position"
    | "phone"
    | "message"
    | "consent";
  
  export type InputInfo = {
    id: string;
    type: string;
    autoComplete: string;
    placeholder: string;
    aria: string;
    error: string | null;
    required: boolean;
    pattern?: ValidationRule<RegExp>;
    minLength?: ValidationRule<number>;
    label: string;
    formData: FormDataOptions;
  };
  
  export type InputOptions = {
    required: boolean;
    pattern?: ValidationRule<RegExp>;
    minLength?: ValidationRule<number>;
  };
  
  export type TextAreaInfo = {
    id: string;
    autoComplete: string;
    aria: string;
    label: string;
    formData: FormDataOptions;
  };
  
  export type CareerBenefit = {
    name: string;
    description: string;
  };
  
  export type CareerData = {
    sectionTitle: SectionTitle;
    description: string;
    subtitle: string;
    benefits: CareerBenefit[];
  };
  
  export type SectionTitle = {
    main: string;
    accent: string;
  };
  
  export type CareerPolicy = {
    text: string;
    error: string;
    formData: FormDataOptions;
  };
  
  export type CareerForm = {
    description: string;
    formContent: FormContent;
  };
  
  export type FormInputProps = {
    inputInfo: InputInfo;
    inputStyles?: string;
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
  };
  
  export type FormTextAreaProps = {
    textarea: TextAreaInfo;
    textAreaStyles: string;
    register: UseFormRegister<FormData>;
  };
  
  export type FormPolicyProps = {
    policy: CareerPolicy;
    register: UseFormRegister<FormData>;
  };