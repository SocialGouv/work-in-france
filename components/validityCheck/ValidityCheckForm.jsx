// @flow
import React from "react";
import { Formik } from "formik";
import { Flex, Box, Button, Text } from "rebass";
import ValidityCheckValidStatus from "./ValidityCheckValidStatus";
import ValidityCheckInvalidStatus from "./ValidityCheckInvalidStatus";
import { Form, Input, Label } from "./Style";
import Loader from "../commons/Loader";

type Props = {
  submitValidityCheck: Function,
  validityCheck: {
    data: Object,
    error: Object,
    isLoading: boolean,
    status: string,
  },
};

const ValidityCheckForm = (props: Props) => {
  const { submitValidityCheck, validityCheck } = props;
  return (
    <Formik
      initialValues={{
        authorizationId: "",
        birthdateDay: "",
        birthdateMonth: "",
        birthdateYear: "",
      }}
      onSubmit={(values) => {
        submitValidityCheck({
          authorizationId: values.authorizationId,
          birthdate: `${values.birthdateYear}-${values.birthdateMonth}-${values.birthdateDay}`,
        });
      }}
      render={({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          {validityCheck.status === "valid" && validityCheck.data && (
            <ValidityCheckValidStatus data={validityCheck.data} status={validityCheck.status} />
          )}
          {validityCheck.status === "invalid" && <ValidityCheckInvalidStatus />}
          <Label>
            <Text mb="3">Numéro de l'autorisation de travail </Text>
            <Input
              hasError={errors.authorizationId && touched.authorizationId}
              name="authorizationId"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Ex: 123456"
              type="text"
              value={values.authorizationId}
            />
            {errors.authorizationId && touched.authorizationId && (
              <Text color="red">{errors.authorizationId}</Text>
            )}
          </Label>
          <Flex flexWrap="wrap">
            <Box pt="3" width={[1]}>
              <Label>Date de naissance du salarié </Label>
            </Box>
            <Box pr="1" width={[1 / 3]}>
              <Label>
                <span>Jour</span>
                <Input
                  hasError={errors.birthdateDay && touched.birthdateDay}
                  name="birthdateDay"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Ex: 23"
                  type="text"
                  value={values.birthdateDay}
                />
                {errors.birthdateDay && touched.birthdateDay && (
                  <Text color="red">{errors.birthdateDay}</Text>
                )}
              </Label>
            </Box>
            <Box pr="1" width={[1 / 3]}>
              <Label>
                <span>Mois</span>
                <Input
                  hasError={errors.birthdateMonth && touched.birthdateMonth}
                  name="birthdateMonth"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Ex: 12"
                  type="text"
                  value={values.birthdateMonth}
                />
                {errors.birthdateMonth && touched.birthdateMonth && (
                  <Text color="red">{errors.birthdateMonth}</Text>
                )}
              </Label>
            </Box>
            <Box width={[1 / 3]}>
              <Label>
                <span>Année</span>
                <Input
                  hasError={errors.birthdateYear && touched.birthdateYear}
                  name="birthdateYear"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Ex: 1986"
                  type="text"
                  value={values.birthdateYear}
                />
                {errors.birthdateYear && touched.birthdateYear && (
                  <Text color="red">{errors.birthdateYear}</Text>
                )}
              </Label>
            </Box>
          </Flex>
          <Flex flexWrap="wrap" justifyContent="flex-end">
            <Button bg="blueBg" mt="4" px="5" py="3" type="submit">
              {validityCheck.isLoading ? <Loader /> : <span>Vérifiez la validité</span>}
            </Button>
          </Flex>
        </Form>
      )}
      validate={(values) => {
        const errors = {};
        if (!values.authorizationId) {
          errors.authorizationId = "Ce champ est obligatoire";
        } else if (!/^[0-9]{6,}$/i.test(values.authorizationId)) {
          errors.authorizationId =
            "Votre numéro d'autorisation doit être constitué de minimum 6 chiffres";
        }
        if (!values.birthdateDay) {
          errors.birthdateDay = "Obligatoire";
        } else if (!/^[0-9]{2}$/i.test(values.birthdateDay)) {
          errors.birthdateDay = "Veuillez renseigner un jour";
        }
        if (!values.birthdateMonth) {
          errors.birthdateMonth = "Obligatoire";
        } else if (!/^[0-9]{2}$/i.test(values.birthdateMonth)) {
          errors.birthdateMonth = "Veuillez renseigner un mois";
        }
        if (!values.birthdateYear) {
          errors.birthdateYear = "Obligatoire";
        } else if (!/^[0-9]{4}$/i.test(values.birthdateYear)) {
          errors.birthdateYear = "Veuillez renseigner une année";
        }
        return errors;
      }}
    />
  );
};

export default ValidityCheckForm;
