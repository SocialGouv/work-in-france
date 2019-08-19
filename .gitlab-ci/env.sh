#!/usr/bin/env bash

#

export BRANCH_NAME=${BRANCH_NAME:=$CI_COMMIT_REF_SLUG}
export COMMIT_TAG=${COMMIT_TAG:=$CI_COMMIT_TAG}
export COMMIT=${COMMIT:=$CI_COMMIT_SHA}
export ENVIRONMENT=${ENVIRONMENT:="dev.factory"};
export HASH_SIZE=${HASH_SIZE:=7}
export JOB_ID=${JOB_ID:=$CI_JOB_ID}
export PROJECT_PATH=${PROJECT_PATH:=$CI_PROJECT_PATH}
export REGISTRY=${REGISTRY:=$CI_REGISTRY_IMAGE}
export VERSION=${VERSION:=$CI_COMMIT_SHORT_SHA}

BRANCH_NAME_HASHED=$( printf "${BRANCH_NAME}" | sha1sum | cut -c1-${HASH_SIZE} )
export BRANCH_HASH=${BRANCH_HASH:=$BRANCH_NAME_HASHED}

export DOMAIN="work-in-france.${ENVIRONMENT}.social.gouv.fr";

#

#
# For master branch we keep branch name as branch hash
if [[ "${BRANCH_NAME}" = "master" ]]; then
  export BRANCH_HASH=master;
fi

if [[ -n "${COMMIT_TAG}" ]]; then
  # For versions we replace the version number v2.3.1 to v2-3-1
  export ENVIRONMENT=incubateur;
  export BRANCH_HASH=$( printf "${COMMIT_TAG}" | sed "s/\./-/g" );
fi

if [[ -n "${PRODUCTION+x}" ]]; then
  export BRANCH_HASH=prod;
  export ENVIRONMENT=incubateur;
else
  export DOMAIN="${BRANCH_HASH}.${DOMAIN}";
fi

export CERTIFICATE_NAME="${K8S_NAMESPACE}-certificate-${BRANCH_HASH}";
export FRONTEND_HOST="${DOMAIN}";

if [[ -n "${PRODUCTION+x}" ]]; then
  export BRANCH_HASH=prod;
  export FRONTEND_HOST="work-in-france.${ENVIRONMENT}.social.gouv.fr";
else
  export FRONTEND_HOST="${BRANCH_HASH}.work-in-france.${ENVIRONMENT}.social.gouv.fr";
fi

#

if [[ -n "${COMMIT_TAG}" ||  -n "${PRODUCTION+x}" ]]; then
  export FRONTEND_URL="https://${FRONTEND_HOST}"
else
  export FRONTEND_URL="http://${FRONTEND_HOST}"
fi

#

printenv | grep -E \
  "BRANCH_HASH|BRANCH_NAME|COMMIT|COMMIT_TAG|ENVIRONMENT|HASH_SIZE|JOB_ID|PROJECT_PATH|REGISTRY|VERSION" \
  | sort

printenv | grep -E \
  "FRONTEND_HOST|FRONTEND_URL" \
  | sort
