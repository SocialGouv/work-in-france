import React from "react";
import Line from "recharts/lib/cartesian/Line";
import { format } from "date-fns";
import frLocale from "date-fns/locale/fr";
import { Heading } from "rebass";

import SimpleLineChart from "./SimpleLineChart";

const dateFormat = str => format(new Date(str), "MMM yy", { locale: frLocale });

const dateSort = (a, b) => {
  if (a.month < b.month) return -1;
  if (a.month > b.month) return 1;
  return 0;
};

const getChartData = data => {
  if (data) {
    const rows = Object.keys(data.monthly).reduce(
      (months, month) => [
        ...months,
        {
          name: dateFormat(month),
          month,
          total: parseInt(data.monthly[month].duration * 100, 10) / 100,
        },
      ],
      [],
    );
    rows.sort(dateSort);
    return rows;
  }
  return [];
};

const ChartDuration = ({ data }) => (
  <div>
    <Heading>Temps de traitement par mois</Heading>
    <br />
    <SimpleLineChart data={getChartData(data)}>
      <Line
        name="Temps de traitement moyen en jours"
        type="linear"
        dataKey="total"
        stroke="#0053b3"
      />
    </SimpleLineChart>
  </div>
);

export default ChartDuration;
