//

import { getEnvManifests } from "@socialgouv/kosko-charts/testing";
import { project } from "@socialgouv/kosko-charts/testing/fake/gitlab-ci.env";

jest.setTimeout(1000 * 60);
test("kosko generate --dev", async () => {
  process.env.HARBOR_PROJECT = "wif";
  expect(
    await getEnvManifests("dev", "", {
      ...project("work-in-france").dev,
      KUBE_NAMESPACE: "work-in-france-50-master-dev2",
      RANCHER_PROJECT_ID: "c-bd7z2:p-2qlgk",
    })
  ).toMatchSnapshot();
});
