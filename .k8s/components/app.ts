import env from "@kosko/env";

import { create } from "@socialgouv/kosko-charts/components/nginx";

const manifests = create("www", {
  env
});

export default manifests;
