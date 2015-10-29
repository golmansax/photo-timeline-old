#!/bin/bash

if [ "$NODE_ENV" == "production" ]; then
  make build
fi
