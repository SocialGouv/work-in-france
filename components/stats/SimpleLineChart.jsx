import React from "react";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import Legend from "recharts/lib/component/Legend";
import LineChart from "recharts/lib/chart/LineChart";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import Tooltip from "recharts/lib/component/Tooltip";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";

function SimpleLineChart({ data = [], children }) {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" tick={{ fontFamily: "sans-serif" }} />
        <YAxis tick={{ fontFamily: "sans-serif" }} />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip wrapperStyle={{ fontFamily: "sans-serif" }} />
        <Legend wrapperStyle={{ paddingTop: 20, fontFamily: "sans-serif" }} />
        {children}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
