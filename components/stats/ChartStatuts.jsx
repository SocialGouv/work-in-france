import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { Heading } from "rebass";

import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";

const COLORS = {
  closed: "#00C49F",
  initiated: "#FFBB28",
  received: "#ffa629",
  refused: "#333",
  without_continuation: "#999",
};

const LABELS = {
  closed: "Accepté",
  initiated: "En construction",
  received: "En instruction",
  refused: "Refusé",
  without_continuation: "Sans suite",
};

const getChartData = (data) => {
  if (data) {
    return Object.keys(data.status)
      .reduce(
        (entries, status) => [
          ...entries,
          {
            name: LABELS[status],
            color: COLORS[status],
            count: data.status[status].count,
          },
        ],
        [],
      )
      .filter((row) => row.count > 0);
  }
  return [];
};

const renderCustomizedLabel = (props) => `${props.payload.name} : ${props.payload.count}`;

const ChartStatuts = ({ data }) => {
  const pieData = getChartData(data);
  return (
    <div>
      <Heading>Répartition des dossiers par statut</Heading>
      <br />
      <ResponsiveContainer height={400}>
        <PieChart>
          <Pie data={pieData} dataKey="count" fill="#8884d8" label={renderCustomizedLabel}>
            {pieData && pieData.map((entry) => <Cell key={entry.color} fill={entry.color} />)}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartStatuts;
