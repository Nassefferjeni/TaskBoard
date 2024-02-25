"use client";

import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";

export const Form = () => {
  const initialState = { message: null, errors: {} };

  type FormState = {
    errors?: {
      title?: string[];
    };
    message?: string;
  };
  const [state, dispatch] = useFormState<Promise<FormState>>(
    create as any,
    initialState as any
  );

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  );
};
