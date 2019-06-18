// @flow
import React from "react";
import Select from "react-select";
import Router from "next/router";
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
    const qualifyLink = Router.router && Router.router.query.link ? Router.router.query.link : null;
    const currentDepartementArray = DEPARTEMENTS.filter(departement => {
      return departement.company === qualifyLink || departement.student === qualifyLink;
    });
    currentDepartement = currentDepartementArray.reduce(current => {
      return current;
    });
  }
  return (
    <div>
      <Select
        id="departement"
        isSearchable
        name="departement"
        onChange={selectedOption => {
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
