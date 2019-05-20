// @flow
import React, { Component } from "react";
import Select from "react-select";
import { Button, Flex, Box, Text } from "rebass";

import { Formik } from "formik";
import redirect from "../../utils/redirect";
import { DEPARTEMENTS } from "../../constants/departements";

type State = {
  currentDepartement: Object,
  hasError: boolean,
};

type Props = {};

class SearchForm extends Component<Props, State> {
  setcurrentDepartement = (selected: Object, setFieldValue: Function) => {
    setFieldValue("currentDepartement", selected);
  };

  handleSubmit = (values: Object) => {
    const {
      currentDepartement,
      currentDepartement: { value, student, company },
      type,
    } = values;
    if (currentDepartement && currentDepartement.isAllowed) {
      if (type === "student") {
        redirect({}, `/student?link=${student}`);
      } else if (type === "company") {
        redirect({}, `/company?link=${company}`);
      }
    } else {
      redirect({}, `/fail?departement=${value}`);
    }
  };

  render() {
    return (
      <Formik
        enableReinitialize={false}
        initialValues={{
          currentDepartement: null,
        }}
        onSubmit={values => {
          this.handleSubmit(values);
        }}
        render={({ errors, touched, values, setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Flex
              alignItems="center"
              flexDirection="column"
              flexWrap="wrap"
              justifyContent="center"
            >
              <Box alignItems="center" pb={3} pt={1} width={[1, 1 / 2, 1 / 3]}>
                <Select
                  id="departement"
                  isSearchable
                  name="departement"
                  onChange={value => this.setcurrentDepartement(value, setFieldValue)}
                  options={DEPARTEMENTS}
                  placeholder="Département sur le titre de séjour"
                  value={values.currentDepartement}
                />
                {errors.currentDepartement && touched.currentDepartement && (
                  <Text
                    bg="red"
                    border="1px solid red"
                    borderRadius={6}
                    color="white"
                    fontSize={2}
                    mt={1}
                    px={3}
                    py={2}
                    width={1}
                  >
                    {errors.currentDepartement}
                  </Text>
                )}
              </Box>
              <Box alignItems="center" pb={0} pt={1} width={[1, 1 / 2, 1 / 3]}>
                <Button
                  bg="white"
                  color="text"
                  fontSize={2}
                  name="student"
                  onClick={() => setFieldValue("type", "student")}
                  py={2}
                  type="submit"
                  width={[1]}
                >
                  Je suis étudiant
                </Button>
              </Box>
              <Box alignItems="center" pb={0} pt={1} width={[1, 1 / 2, 1 / 3]}>
                <Button
                  bg="white"
                  color="text"
                  fontSize={2}
                  name="company"
                  onClick={() => setFieldValue("type", "company")}
                  py={2}
                  type="submit"
                  width={[1]}
                >
                  Je suis un employeur
                </Button>
              </Box>
            </Flex>
          </form>
        )}
        validate={values => {
          const errors = {};
          if (values.currentDepartement === null) {
            errors.currentDepartement = "Ce champ est obligatoire";
          }
          return errors;
        }}
      />
    );
  }
}

export default SearchForm;
