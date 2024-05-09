"use client";

import { useBridgeNetwork } from "@/context/bridge-network";
import { Coin } from "@/types/bridge-networks";
import { getSingleSelectStyles } from "@/types/custom-select-styles";
import { CustomOption, CustomSingleValue } from "../ui/custom-select";
import { useThemeSwitch } from "@/context/theme-switch";
import { Form, Formik, FormikHelpers } from "formik";
import { number, object, Schema } from "yup";
import Button from "../ui/button";
import { useConnection } from "@/hooks/useConnection";
import { useBalance } from "@/hooks/useBalance";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), { ssr: false });

export type SelectCoinsProps = {
  onBack: () => void;
  onContinue: () => void;
};

type StakeForm = { value: number | null };

const validationSchema: Schema<StakeForm> = object()
  .shape({
    value: number()
      .required("Amount is required")
      .positive("Amount must be positive")
      .integer("Amount must be an integer")
      .typeError("Amount must be a number"),
  })
  .defined();

export const SelectCoins = ({ onContinue, onBack }: SelectCoinsProps) => {
  const { fromNetwork, coin, setCoin, amount, setAmount } = useBridgeNetwork();
  const { theme } = useThemeSwitch();
  const customSelectStyles = getSingleSelectStyles(theme);
  const { account } = useConnection();
  const { balance: taraBalance } = useBalance();

  const handleCoinChange = (selectedOption: any) => {
    const selectedCoin = selectedOption as Coin;
    setCoin(selectedCoin);
  };

  const submit = async (
    form: StakeForm,
    formikHelpers: FormikHelpers<StakeForm>
  ) => {
    if (form?.value) {
      const onReset = () => {
        formikHelpers.resetForm();
      };
      onContinue();
      onReset();
    }
  };

  const initialValues: StakeForm = { value: amount || null };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg">Select coin</h2>
      <Select
        id="select-coin"
        styles={customSelectStyles}
        value={coin}
        onChange={handleCoinChange}
        options={fromNetwork.coins}
        getOptionLabel={(option: any) => option.chainName}
        getOptionValue={(option: any) => option.symbol.toString()}
        components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
      />
      <div className="flex flex-col gap-5">
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values, formikHelpers) => submit(values, formikHelpers)}
        >
          {({ values, errors, handleChange, setFieldValue, resetForm }) => (
            <Form noValidate={true}>
              <div className="flex gap-4 flex-col">
                <div className="flex flex-col gap-4 items-start w-full">
                  <div className="flex sm:flex-row flex-col gap-4 items-center w-full">
                    <input
                      type="number"
                      name="value"
                      placeholder="Amount"
                      className="input input-bordered w-full"
                      value={values.value || ""}
                      disabled={!account}
                      onChange={(e) => {
                        resetForm();
                        handleChange(e);
                        setAmount(Number(e.target.value));
                      }}
                    />
                    <Button
                      type="button"
                      color="primary"
                      size="xs"
                      disabled={!account}
                      onClick={() => {
                        setFieldValue("value", taraBalance?.toFixed());
                        setAmount(Number(taraBalance?.toFixed()));
                      }}
                    >
                      Max
                    </Button>
                  </div>
                  {errors.value && (
                    <p className="text-xs text-error uppercase">
                      {errors.value?.toString()}
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
                  <Button fullWidth onClick={onBack}>
                    Back
                  </Button>
                  <Button
                    fullWidth
                    type="submit"
                    color="primary"
                    disabled={!coin || !amount}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
