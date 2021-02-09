// @flow
import React from "react";
import ValidityCheckValidAuthorizationStatus from "./ValidityCheckValidAuthorizationStatus";
import ValidityCheckValidIntroductionStatus from "./ValidityCheckValidIntroductionStatus";

type Props = {
  data: Object,
};

const ValidityCheckValidStatus = ({ data }: Props) => {
  const { type } = data;

  return (
    <>
      {type === "authorization" ? (
        <ValidityCheckValidAuthorizationStatus data={data} />
      ) : (
        <ValidityCheckValidIntroductionStatus data={data} />
      )}
    </>
  );
};

export default ValidityCheckValidStatus;
