
import Image from "next/image";

import { FormPolicyProps } from '../../types/types';
import React from "react";

const FormPolicy: React.FC<FormPolicyProps> = ({ policy, register }) => {

  return (
    <div className="xl:pt-[10px] relative">
      <input
        type="checkbox"
        id="career-policy"
        className="policy-check"
        aria-label="Policy agreement checkbox"
        {...register(policy.formData, {
          required: true,
        })}
      />
      <label htmlFor="career-policy"
        className="policy-agreement text-white pl-8 relative flex text-xs 
        font-extralight leading-[22px] xl:leading-6">
        <Image
          src="/icons/unchecked.svg"
          alt="Empty checkbox icon"
          width={24}
          height={24}
          className="policy-checkbox policy-checkbox-empty"
        />
        <Image
          src="/icons/checked.svg"
          alt="Filled checkbox icon"
          width={24}
          height={24}
          className="policy-checkbox policy-checkbox-filled"
        />
        {policy.text}
      </label>
    </div>
  );
};

export default FormPolicy;