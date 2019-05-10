// @flow
import React from "react";
import { Formik } from "formik";
import { Flex, Box, Button, Text } from "rebass";
import { Form, Input, Label } from "./Style";

type Props = {
  submitValidityCheck: Function,
};

const ValidityCheckForm = (props: Props) => {
  const { submitValidityCheck } = props;
  return (
    <Formik
      initialValues={{
        authorizationId: "",
        birthdateDay: "",
        birthdateMonth: "",
        birthdateYear: "",
      }}
      onSubmit={values => {
        submitValidityCheck({
          authorizationId: values.authorizationId,
          birthdate: `${values.birthdateYear}-${values.birthdateMonth}-${values.birthdateDay}`,
        });
      }}
      render={({ errors, values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Label>
            <span>Numéro de l'autorisation provisoire de travail </span>
            {errors.authorizationId && <Text color="red">{errors.authorizationId}</Text>}
            <Input
              border={errors.authorizationId && "1px solid red"}
              name="authorizationId"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Numéro de l'autorisation"
              type="text"
              value={values.authorizationId}
            />
          </Label>
          <Flex flexWrap="wrap">
            <Box pt="2" width={[1]}>
              <Label>Date de naissance de l'étudiant </Label>
            </Box>
            <Box pr="1" width={[1 / 3]}>
              <Label>
                <span>Jour</span>
                {errors.birthdateDay && <Text color="red">{errors.birthdateDay}</Text>}
                <Input
                  border={errors.birthdateDay && "1px solid red"}
                  name="birthdateDay"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Jour"
                  type="text"
                  value={values.birthdateDay}
                />
              </Label>
            </Box>
            <Box pr="1" width={[1 / 3]}>
              <Label>
                <span>Mois</span>
                {errors.birthdateMonth && <Text color="red">{errors.birthdateMonth}</Text>}
                <Input
                  border={errors.birthdateMonth && "1px solid red"}
                  name="birthdateMonth"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Mois"
                  type="text"
                  value={values.birthdateMonth}
                />
              </Label>
            </Box>
            <Box width={[1 / 3]}>
              <Label>
                <span>Année</span>
                {errors.birthdateYear && <Text color="red">{errors.birthdateYear}</Text>}
                <Input
                  border={errors.birthdateYear && "1px solid red"}
                  name="birthdateYear"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Année"
                  type="text"
                  value={values.birthdateYear}
                />
              </Label>
            </Box>
          </Flex>
          <Flex flexWrap="wrap" justifyContent="flex-end">
            <Button bg="blueBg" mt="4" px="5" py="3" type="submit">
              Vérifiez la validité
            </Button>
          </Flex>
        </Form>
      )}
      validate={values => {
        console.log(values);
      }}
    />
  );
};

export default ValidityCheckForm;
