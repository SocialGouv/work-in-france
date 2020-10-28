import makeStatsDashboard from "../../components/stats/makeStatsDashboard";

const Stats = makeStatsDashboard({ queryKey: "dashboard", fileUrl: "/dashboard.json" });

export default Stats;
