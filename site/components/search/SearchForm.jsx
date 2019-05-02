import React, { useState } from "react";
import Select from "react-select";

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
import COUNTIES from "../../constants/counties";

function handleSubmit(currentRadio, currentCounty) {
  console.log(currentRadio);
  console.log(currentCounty);
}

const SearchForm = () => {
  const [currentRadio, setcurrentRadio] = useState("student");
  const [currentCounty, setcurrentCounty] = useState("");

  return (
    <SearchFormWrapper>
      <SearchFormLabel htmlFor="">
        L’adresse inscrite sur le titre de séjour se trouve dans le département suivant :
      </SearchFormLabel>
      <SelectWrapper>
        <Select
          isSearchable
          onChange={value => setcurrentCounty(value)}
          options={COUNTIES}
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
        <SearchButton onClick={() => handleSubmit(currentRadio, currentCounty)}>
          Je fais ma demande
        </SearchButton>
      </Col100>
    </SearchFormWrapper>
  );
};

export default SearchForm;
