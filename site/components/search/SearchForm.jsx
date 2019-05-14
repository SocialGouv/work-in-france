// @flow
import React, { Component } from "react";
import Select from "react-select";
import { Card, Button, Flex, Box, Text } from "rebass";

import redirect from "../../utils/redirect";
import { RadioLabel, RadioInput } from "./Style";
import { DEPARTEMENTS } from "../../constants/departements";

type State = {
  currentRadio: string,
  currentDepartement: Object,
  hasError: boolean,
};

type Props = {};

class SearchForm extends Component<Props, State> {
  state = {
    currentRadio: "student",
    currentDepartement: {},
    hasError: false,
  };

  setcurrentRadio = (radioValue: Object) => {
    this.setState({ currentRadio: radioValue.currentTarget.value });
  };

  setcurrentDepartement = (departement: Object) => {
    this.setState({ currentDepartement: departement });
  };

  handleSubmit = () => {
    const {
      currentDepartement,
      currentDepartement: { value, student, company },
      currentRadio,
    } = this.state;
    if (currentDepartement && currentDepartement.isAllowed) {
      if (currentRadio === "student") {
        redirect({}, `/student?link=${student}`);
      } else if (currentRadio === "company") {
        redirect({}, `/company?link=${company}`);
      }
    } else {
      redirect({}, `/fail?departement=${value}`);
    }
  };

  toggleError() {
    this.setState({ hasError: true });
  }

  render() {
    const { currentRadio, currentDepartement, hasError } = this.state;
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
            onChange={this.setcurrentDepartement}
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
                onChange={this.setcurrentRadio}
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
                onChange={this.setcurrentRadio}
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
            onClick={() => (!currentDepartement ? this.toggleError() : this.handleSubmit())}
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
  }
}

export default SearchForm;
