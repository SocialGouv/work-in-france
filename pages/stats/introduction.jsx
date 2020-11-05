import makeStatsDashboard from "../../components/stats/makeStatsDashboard";

const Introduction = makeStatsDashboard({
  queryKey: "dashboard-introduction",
  fileUrl: "/dashboard-introduction.json",
});

export default Introduction;
