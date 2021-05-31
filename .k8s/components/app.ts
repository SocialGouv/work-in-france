import env from "@kosko/env";

import { create } from "@socialgouv/kosko-charts/components/nginx";
import { getHarborImagePath } from "@socialgouv/kosko-charts/utils"

const manifests = create("app", {
  env,
  config:{
    image: getHarborImagePath({ name:"wif-front" })
  }
});

export default manifests;
