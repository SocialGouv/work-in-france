import React from "react";
import { Flex, Link, Box, Text, Card, Heading } from "rebass";
import Router from "next/router";
import { DEPARTEMENTS } from "../../constants/departements";
import { CONTACTS } from "../../constants/contact";

const getContacts = (currentDepartement) => {
  const currentContacts = CONTACTS.filter((contact) => {
    return contact.departments.includes(currentDepartement);
  });
  return currentContacts;
};
const Fail = () => {
  const departements = DEPARTEMENTS.filter((departement) => {
    return departement.isAllowed;
  });
  const departementsSize = departements.length;
  const currentDepartement =
    Router.router && Router.router.query.departement ? Router.router.query.departement : null;
  const currentContacts = getContacts(currentDepartement);
  return (
    <Flex>
      <Box mb="3" p={3}>
        <Heading color="text" fontFamily="Evolventa" fontSize={[3, 4, 5]} lineHeight={1.4} mb="2">
          Demande d'autorisation provisoire de travail
        </Heading>
        <Text fontSize={[2]} fontWeight="bold" lineHeight={1.4}>
          Ce service n'est pas encore disponible dans votre département.
        </Text>
        <p>
          {`La version bêta est disponible uniquement pour les demandes concernant les départements `}
          {/* map available departement from departement list */}
          {departements.map((departement, i) => {
            if (departementsSize === i + 1) {
              return <span key={departement.value}>{`et ${departement.value}.`}</span>;
            }
            return <span key={departement.value}>{`${departement.value}, `}</span>;
          })}
        </p>
        <Heading mb="2" mt="4">
          En attendant, veuillez vous adresser à la :
        </Heading>
        {currentContacts.map((currentContact) => {
          return (
            <Card key={currentContact.slug} bg="grey" borderRadius="6px" mb="4" p={3}>
              <Heading mb="2">{`${currentContact.type} ${currentContact.name}`}</Heading>
              {currentContact.address.map((line) => {
                return <Text key={line}>{line}</Text>;
              })}
              <Text fontStyle="italic">{currentContact.post_code}</Text>
              <Text fontStyle="italic">{currentContact.city}</Text>
              <Text fontStyle="italic">
                <Link color="text" href={`tel:${currentContact.phone}`}>
                  {`Tél : ${currentContact.phone}`}
                </Link>
              </Text>
              <Text color="text" fontStyle="italic">{`Fax : ${currentContact.fax}`}</Text>
              {currentContact.email && <Text>{`Email : ${currentContact.email}`}</Text>}
              <Link color="text" href={currentContact.url} target="_blank">
                {currentContact.url}
              </Link>
            </Card>
          );
        })}
        <Link color="text" href="/" py="3">
          Revenir à l'accueil
        </Link>
      </Box>
    </Flex>
  );
};

export default Fail;
