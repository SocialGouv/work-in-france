// @flow
import React, { useState } from "react";
import Select from "react-select";
import { Button, Flex, Box, Link } from "rebass";

import { DEPARTEMENTS } from "../../constants/departements";

const IntroductionSearchForm = () => {
  const activeDepartements = DEPARTEMENTS.filter((elm) => elm.introduction);
  const DEPARTEMENT_OPTIONS = activeDepartements.map((elm) => ({
    label: elm.label,
    value: elm.value,
  }));

  const [departement, setDepartement] = useState(false);
  const qualify = DEPARTEMENTS.find((dep) => dep.value === departement.value);
  return (
    <Flex alignItems="center" flexDirection="column" flexWrap="wrap" justifyContent="center">
      <Box alignItems="center" pb={3} pt={1} width={[1, 0.7, 1 / 2]}>
        <Select
          id="departement"
          isSearchable
          name="departement"
          onChange={(option) => setDepartement(option)}
          options={DEPARTEMENT_OPTIONS}
          placeholder="Département de l'établissement de rattachement"
          value={departement}
        />
      </Box>
      {qualify && (
        <Box alignItems="center" pb={0} pt={1} width={[1, 0.7, 1 / 2]}>
          <Link
            href={`https://www.demarches-simplifiees.fr/commencer/${qualify.introduction}`}
            pt={2}
            width={1}
          >
            <Button bg="blueBg" color="white" fontSize={2} py={2} width={[1]}>
              Je fais une introduction
            </Button>
          </Link>
        </Box>
      )}
    </Flex>
  );
};

export default IntroductionSearchForm;
