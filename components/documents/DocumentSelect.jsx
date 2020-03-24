// @flow
import React from "react";
import Select from "react-select";
import "url-search-params-polyfill";
import redirect from "../../utils/redirect";
import { DEPARTEMENTS } from "../../constants/departements";
import orderDepartement from "../../utils/orderDepartementsArray";

type Props = {
  isStudent: boolean,
};

// $FlowFixMe
const IS_BROWSER = process.browser;

const DocumentSelect = (props: Props) => {
  const { isStudent } = props;
  let currentDepartement = [];
  if (IS_BROWSER) {
    let qualify = "";
    const link = new URLSearchParams(window.location.search);
    qualify = link.get("link");
    const currentDepartementArray = DEPARTEMENTS.filter((departement) => {
      return departement.company === qualify || departement.student === qualify;
    });
    currentDepartement = currentDepartementArray.reduce((current) => {
      return current;
    });
  }
  return (
    <div>
      <Select
        id="departement"
        isSearchable
        name="departement"
        onChange={(selectedOption) => {
          redirect(
            {},
            isStudent
              ? `/student?link=${selectedOption.student}`
              : `/company?link=${selectedOption.company}`,
          );
        }}
        options={orderDepartement(DEPARTEMENTS)}
        placeholder="Département sur le titre de séjour"
        value={currentDepartement}
      />
    </div>
  );
};

export default DocumentSelect;
