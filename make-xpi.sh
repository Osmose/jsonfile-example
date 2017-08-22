#!/usr/bin/env bash

set -eu

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TMP_DIR=$(mktemp -d)
DEST="${TMP_DIR}/bootstrap-example"

mkdir -p $DEST

# deletes the temp directory
function cleanup {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

while read -r LINE || [[ -n "${LINE}" ]]; do
  mkdir -p "$(dirname "${DEST}/${LINE}")"
  cp -r "${BASE_DIR}/${LINE}" "$(dirname "${DEST}/${LINE}")"
done < "${BASE_DIR}/build-includes.txt"

pushd $DEST
zip -r bootstrap-addon-example.xpi *
mv bootstrap-addon-example.xpi $BASE_DIR
popd
