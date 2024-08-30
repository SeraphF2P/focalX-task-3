import React from "react";
import { Btn } from "./../btn/Btn";
import { useSearchParams } from "react-router-dom";

export const QueryBtn = ({ queryKey, value, children, selected }) => {
  const defaultValue = selected
    ? new URLSearchParams({ [queryKey]: value })
    : undefined;
  const [searchParams, setSearchParams] = useSearchParams(defaultValue);
  return (
    <Btn
      data-active={searchParams.get(queryKey) === value}
      onClick={() => setSearchParams({ [queryKey]: value })}
    >
      {children}
    </Btn>
  );
};
