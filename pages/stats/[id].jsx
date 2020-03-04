import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { useQuery } from "react-query";
import { Card, Heading, Flex, Box } from "rebass";

import ChartSubmissions from "../../components/stats/ChartSubmissions";
import ChartDuration from "../../components/stats/ChartDuration";
import ChartStatuts from "../../components/stats/ChartStatuts";

import fetchDs from "../../lib/fetchDs";
import mergeStats from "../../lib/mergeStats";
import { Wrapper } from "../../components/commons/Grid";

const MenuLink = styled.a`
  color: ${props => props.theme.colors.text};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Menu = ({ groups, selected }) =>
  (groups &&
    groups.map(group => (
      <div key={group.id} style={{ display: "block", width: 200 }}>
        <Link href={`/stats/${group.id}`} as={`/stats/${group.id}`}>
          <MenuLink
            bg="whiteBg"
            color="black"
            style={{ textDecoration: selected === group.id ? "underline" : "none" }}
          >
            {group.title}
          </MenuLink>
        </Link>
      </div>
    ))) ||
  null;

const fetchAllData = async urls => {
  // sum up multiple results and make averages
  const result = await Promise.all(urls.map(url => fetchDs(url)));
  const summed = result.slice(1).reduce((a, c) => mergeStats(a, c), result[0]);
  return summed;
};

// fetch a single stat or merge multiple
const fetchData = urls => (urls.length === 1 ? fetchDs(urls[0]) : fetchAllData(urls));

const CardNumber = ({ title, value }) => (
  <Card style={{ textAlign: "center", border: "1px solid silver", borderRadius: 3, padding: 10 }}>
    <Heading style={{ fontSize: "0.8em" }}>{title}</Heading>
    <Heading>{value}</Heading>
  </Card>
);

const Charts = ({ group }) => {
  const { data } = useQuery("stats", () => fetchData(group.data));
  if (!data) {
    return <div>Chargement...</div>;
  }
  return (
    <div>
      <Heading>{group.title}</Heading>
      <Flex justify="center" justifyContent="space-around" mt={20}>
        <CardNumber title="Nombre de dossiers déposés" value={data.count} />
        <CardNumber
          title="Nombre de dossiers acceptés"
          value={data.status.closed && data.status.closed.count}
        />
        <CardNumber
          title="Temps de traitement moyen"
          value={Math.ceil(parseFloat(data.duration))}
          suffix={Math.ceil(parseFloat(data.duration)) > 1 ? " jours" : " jour"}
        />
      </Flex>
      <br />
      <br />
      <ChartSubmissions data={data} />
      <br />
      <br />
      <ChartDuration data={data} />
      <br />
      <br />
      <ChartStatuts data={data} />
    </div>
  );
};

const Stats = ({ id }) => {
  const { data } = useQuery("dashboard", () => fetch("/dashboard.json").then(r => r.json()));
  return (
    <Box bg="white" p={4}>
      <Head>
        <title>Work in France - Statistiques</title>
      </Head>
      <Wrapper>
        {data ? (
          <Flex flexDirection="row">
            <Box width={200}>
              <Menu groups={data.groups} selected={id} />
            </Box>
            <Box width="100%">
              <Charts group={data.groups.find(g => g.id === id)} />
            </Box>
          </Flex>
        ) : (
          <div>Chargement...</div>
        )}
      </Wrapper>
    </Box>
  );
};

Stats.getInitialProps = ({ query }) => {
  return { id: query.id || "national" };
};

export default Stats;
