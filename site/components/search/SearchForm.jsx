// @flow
import React, { useState } from "react";
import Select from "react-select";
import { Card, Button, Flex, Box, Text } from "rebass";

import redirect from "../../utils/redirect";
import { RadioLabel, RadioInput } from "./Style";
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
    <Flex alignItems="center" flexDirection="column" flexWrap="wrap" justifyContent="center">
      <Box px={0} py={3} width={1}>
        <Text color="white" fontSize={2} lineHeight={1.4} textAlign="center">
          L’adresse inscrite sur le titre de séjour se trouve dans le département suivant :
        </Text>
      </Box>
      <Box alignItems="center" pb={3} pt={1} width={[1, 1 / 2, 1 / 3]}>
        <Select
          id="departement"
          isSearchable
          onChange={value => setcurrentDepartement(value)}
          options={DEPARTEMENTS}
          placeholder="Choisissez votre département"
        />
      </Box>
      <Box p={3} width={1}>
        <Text color="white" fontSize={2} textAlign="center">
          Je suis...
        </Text>
      </Box>
      <Box alignItems="center" pb={3} pt={1} width={[1, 1 / 2, 1 / 3]}>
        <Flex justifyContent="space-around">
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
        </Flex>
      </Box>
      <Box alignItems="center" pb={0} pt={1} width={[1, 1 / 2, 1 / 3]}>
        <Button
          bg="white"
          color="text"
          fontSize={2}
          onClick={() =>
            !currentDepartement ? toggleError(true) : handleSubmit(currentRadio, currentDepartement)
          }
          py={3}
          width={[1]}
        >
          Je fais ma demande
        </Button>
        {hasError && (
          <Card
            bg="red"
            border="1px solid"
            borderColor="red"
            borderRadius={3}
            color="white"
            fontSize={2}
            mt={1}
            px={3}
            py={2}
            width={1}
          >
            Merci de choisir votre département
          </Card>
        )}
      </Box>
    </Flex>
  );
};

export default SearchForm;
