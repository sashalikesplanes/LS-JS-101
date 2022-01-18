#!/bin/zsh
for var in {1.."$1"}
do
  touch "ex$var.js"
done
