import React, { useState } from "react";
import Select from "react-select";

import redirect from "../../utils/redirect";
import {
  SearchFormWrapper,
  SearchFormLabel,
  SelectWrapper,
  RadioWrapper,
  RadioLabel,
  RadioInput,
  SearchButton,
} from "./Style";
import { Col100 } from "../commons/grid";
import { DEPARTEMENTS } from "../../constants/departements";

const handleSubmit = (currentRadio, currentDepartement) => {
  if (currentDepartement && currentDepartement.isAllowed) {
    if (currentRadio === "student") {
      redirect({}, "/student");
    } else if (currentRadio === "company") {
      redirect({}, "/company");
    }
  } else {
    redirect({}, "/fail");
  }
};

const SearchForm = () => {
  const [currentRadio, setcurrentRadio] = useState("student");
  const [currentDepartement, setcurrentDepartement] = useState("");
  const [hasError, toggleError] = useState(false);

  return (
    <SearchFormWrapper>
      <SearchFormLabel htmlFor="">
        L’adresse inscrite sur le titre de séjour se trouve dans le département suivant :
      </SearchFormLabel>
      <SelectWrapper>
        <Select
          isSearchable
          onChange={value => setcurrentDepartement(value)}
          options={DEPARTEMENTS}
          placeholder="Choisissez votre département"
        />
      </SelectWrapper>
      <SearchFormLabel htmlFor="">Je suis...</SearchFormLabel>
      <RadioWrapper>
        <RadioLabel htmlFor="studentRadio">
          <RadioInput
            checked={currentRadio === "student"}
            className="form-check-input"
            id="studentRadio"
            name="student"
            onChange={() => setcurrentRadio("student")}
            type="radio"
            value="student"
          />
          Étudiant
        </RadioLabel>
        <RadioLabel htmlFor="companyRadio">
          <RadioInput
            checked={currentRadio === "company"}
            className="form-check-input"
            id="companyRadio"
            name="company"
            onChange={() => setcurrentRadio("company")}
            type="radio"
            value="company"
          />
          Employeur
        </RadioLabel>
      </RadioWrapper>
      <Col100>
        {hasError && <p>Merci de choisir votre département</p>}
        <SearchButton
          onClick={() =>
            !currentDepartement ? toggleError(true) : handleSubmit(currentRadio, currentDepartement)
          }
        >
          Je fais ma demande
        </SearchButton>
      </Col100>
    </SearchFormWrapper>
  );
};

export default SearchForm;
