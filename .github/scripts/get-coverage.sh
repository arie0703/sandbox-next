#!/bin/bash

RESULT=`yarn test:coverage | \
  tee | \
  sed -E "s/"$'\E'"\[([0-9]{1,2}(;[0-9]{1,2})*)?m//g"
`

list=(${RESULT//|/})

DIR_NAME=''
FILE_NAME=''
DATA=("Stmts" "Branch" "Funcs" "Lines" "Uncovered Line")
i=0
ARR=()


function send_newrelic () {
  if [[ -n "$DIR_NAME" ]] && [[ ${#ARR[*]} -gt 3 ]]; then

    FULL_PATH=''
    if [[ -n "$FILE_NAME" ]]; then
      FULL_PATH="$DIR_NAME/$FILE_NAME"
    else
      FULL_PATH=$DIR_NAME
    fi

    curl -X POST "https://insights-collector.newrelic.com/v1/accounts/$NEW_RELIC_ACCOUNT_ID/events" \
    -H "Api-Key:$NEW_RELIC_LICENSE_KEY" \
    -H "Content-Type: application/json" \
    -d \
    "{
      \"eventType\": \"${EVENT_TYPE}\",
      \"fullPath\": \"${FULL_PATH}\",
      \"directoryName\": \"${DIR_NAME}\",
      \"fileName\": \"${FILE_NAME}\",
      \"stmts\": \"${ARR[0]}\",
      \"branch\": \"${ARR[1]}\",
      \"funcs\": \"${ARR[2]}\",
      \"lines\": \"${ARR[3]}\",
      \"uncoveredLine\": \"${ARR[4]}\",
      \"repositoryName\": \"${GH_REPO}\"
    }"
  fi
}

for S in "${list[@]}"
do 
  if [[ "$S" =~ ^-?[1-9]*[0-9](\.[0-9]+)?$ ]] || [[ "$S" =~ ^[0-9]+$ ]]; then
    
    ARR[$i]=$S
    i=`expr $i + 1`

  # ALL FILE取得(一番最初に取得される)
  elif [[ "$S" =~ All ]]; then
    DIR_NAME="All files"

  # ディレクトリ名取得
  elif [[ "$S" =~ src/|app/ ]]; then
    send_newrelic

    DIR_NAME=$S
    FILE_NAME=''
    i=0
    ARR=()

  # ファイル名取得
  elif [[ "$S" == *.ts* ]]; then
    send_newrelic

    FILE_NAME=$S
    i=0
    ARR=()

  fi
done

send_newrelic
