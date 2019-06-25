#!/usr/bin/env bash

#

export BRANCH_NAME=${BRANCH_NAME:=$CI_COMMIT_REF_NAME}
export COMMIT=${COMMIT:=$CI_COMMIT_SHA}
export JOB_ID=${JOB_ID:=$CI_JOB_ID}
export HASH_SIZE=${HASH_SIZE}
BRANCH_NAME_HASHED=$(printf "${BRANCH_NAME}" | sha1sum | cut -c1-${HASH_SIZE} )
export BRANCH_HASH=${BRANCH_HASH:=$BRANCH_NAME_HASHED}

#

case ${BRANCH_NAME} in
  master)
    export ENVIRONMENT=incubateur;
    #
    export FRONTEND_HOST=work-in-france.${ENVIRONMENT}.social.gouv.fr;
    ;;
  *)
    export ENVIRONMENT=dev;
    #
    export FRONTEND_HOST=${BRANCH_HASH}.work-in-france.${ENVIRONMENT}.factory.social.gouv.fr;
    ;;
esac
