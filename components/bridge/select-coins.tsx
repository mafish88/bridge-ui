"use client";

import { useBridgeNetwork } from "@/context/bridge-network";
import { useState } from "react";
import { Coin } from "@/types/bridge-networks";
import { useIsMounted } from "@/hooks/useIsMounted";
import Select from "react-select";
import { getSingleSelectStyles } from "@/types/custom-select-styles";
import { CustomOption, CustomSingleValue } from "../ui/custom-select";
import { useThemeSwitch } from "@/context/theme-switch";
import { Wallet } from "../wallet";
import { Form, Formik, FormikHelpers } from "formik";
import { number, object, Schema } from "yup";
import Button from "../ui/button";
import { useConnection } from "@/hooks/useConnection";
import { useBalance } from "@/hooks/useBalance";

export type SelectCoinsProps = {
  setStep: () => void;
};

type StakeForm = { value: number | "" };
const initialValues: StakeForm = { value: "" };
const validationSchema: Schema<StakeForm> = object()
  .shape({
    value: number()
      .required("Amount is required")
      .positive("Amount must be positive")
      .integer("Amount must be an integer")
      .typeError("Amount must be a number"),
  })
  .defined();

export const SelectCoins = ({ setStep }: SelectCoinsProps) => {
  const { selectedFromNetwork } = useBridgeNetwork();
  const [coin, setCoin] = useState<Coin>();
  const { theme } = useThemeSwitch();
  const isMounted = useIsMounted();
  const [inputValue, setInputValue] = useState<number>(0);
  const customSelectStyles = getSingleSelectStyles(theme);
  const { account, shortAddress } = useConnection();
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
      setStep();
    }
  };

  return (
    isMounted && (
      <div className="flex flex-col gap-3">
        <h2 className="ftext-lg">Select coin</h2>
        <Select
          id="select-coin"
          styles={customSelectStyles}
          value={coin}
          onChange={handleCoinChange}
          options={selectedFromNetwork.coins}
          getOptionLabel={(option) => option.chainName}
          getOptionValue={(option) => option.symbol.toString()}
          components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
        />
        <div className="flex flex-col gap-5">
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values, formikHelpers) => submit(values, formikHelpers)}
          >
            {({
              submitForm,
              values,
              errors,
              handleChange,
              setFieldValue,
              resetForm,
            }) => (
              <Form noValidate={true}>
                <div className="flex gap-4 flex-col">
                  <div className="flex flex-col gap-4 items-start w-full">
                    <div className="flex sm:flex-row flex-col gap-4 items-center w-full">
                      <input
                        type="number"
                        name="value"
                        placeholder="Amount"
                        className="input input-bordered w-full"
                        value={values.value}
                        disabled={!account}
                        onChange={(e) => {
                          resetForm();
                          handleChange(e);
                          setInputValue(Number(e.target.value));
                        }}
                      />
                      <Button
                        type="button"
                        color="primary"
                        size="xs"
                        disabled={!account}
                        onClick={() => {
                          setFieldValue("value", taraBalance?.toFixed());
                          setInputValue(Number(taraBalance?.toFixed()));
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
                  <div className="text-sm">
                    <p>Notice:</p>
                    <p>
                      Once you confirm, the transfer will start. Transfers from
                      Ethereum to Taraxa take about 30 minutes.
                    </p>
                  </div>
                  <Wallet
                    actionBtn={{
                      disabled: !coin || !inputValue,
                      action: submitForm,
                      btnColor: "primary",
                      btnName: "Confirm",
                    }}
                  />
                </div>
              </Form>
            )}
          </Formik>
          {shortAddress && (
            <div className="flex flex-col sm:flex-row justify-between gap-4 items-start">
              <p className="text-sm">Wallet address</p>
              <p className="text-sm font-medium">{shortAddress}</p>
            </div>
          )}
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-start">
            <p className="text-sm">Current balance</p>
            <p className="text-sm font-medium">
              {taraBalance} {selectedFromNetwork.chainName}
            </p>
          </div>
        </div>
      </div>
    )
  );
};
