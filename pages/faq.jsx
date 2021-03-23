import React from "react";
import Head from "next/head";
import { Box, Flex } from "rebass";
import { Wrapper } from "../components/commons/Grid";
import FaqContent from "../contents/faq.mdx";

const Faq = () => {
  return (
    <Box bg="white" p={4}>
      <Head>
        <title>Work in France - FAQ</title>
      </Head>
      <Wrapper>
        <Flex>
          <Box p={3}>
            <h2 id="faq-summary">FAQ</h2>
            <ul id="js-faq-summary-links">
              <li>
                <a href="#quest-ce-quune-autorisation-provisoire-de-travail-pour-etudiant-etranger">
                  Qu’est-ce qu’une autorisation provisoire de travail pour étudiant étranger ?
                </a>
              </li>
              <li>
                <a href="#dans-quel-cas-dois-je-demander-une-autorisation-provisoire-de-travail-sur-work-in-france">
                  Dans quels cas dois-je demander une autorisation provisoire de travail ?
                </a>
              </li>
              <li>
                <a href="#quels-sont-les-documents-a-fournir-pour-faire-ma-demande-dautorisation-provisoire-de-travail-sur-work-in-france">
                  Quels sont les documents à fournir pour faire ma demande d'autorisation provisoire
                  de travail ?
                </a>
              </li>
              <li>
                <a href="#qui-peut-deposer-la-demande-dautorisation-provisoire-de-travail-pourquoi-un-mandat-expres">
                  Qui peut déposer la demande d'autorisation provisoire de travail ?
                </a>
              </li>
              <li>
                <a href="#que-dois-je-faire-en-cas-de-changement-dadresse">
                  Que dois-je faire en cas de changement d'adresse ?
                </a>
              </li>
              <li>
                <a href="#mon-contrat-de-travail-a-evolue-que-dois-je-faire">
                  Mon contrat de travail a évolué : que dois-je faire ?
                </a>
              </li>
              <li>
                <a href="#comment-verifier-la-validite-dune-autorisation-provisoire-de-travail-delivree-avec-work-in-france">
                  Comment vérifier la validité d'une autorisation provisoire de travail délivrée
                  avec Work In France&nbsp;?
                </a>
              </li>
            </ul>
            <FaqContent />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Faq;
