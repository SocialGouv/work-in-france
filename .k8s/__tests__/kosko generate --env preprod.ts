//

import { getEnvManifests } from "@socialgouv/kosko-charts/testing";
import { project } from "@socialgouv/kosko-charts/testing/fake/gitlab-ci.env";

jest.setTimeout(1000 * 60);
test("kosko generate --preprod", async () => {
  process.env.HARBOR_PROJECT = "wif";
  expect(
    await getEnvManifests("preprod", "", {
      ...project("work-in-france").preprod,
      KUBE_NAMESPACE: "work-in-france-50-preprod-dev2",
      RANCHER_PROJECT_ID: "c-bd7z2:p-2qlgk",
    })
  ).toMatchSnapshot();
});
