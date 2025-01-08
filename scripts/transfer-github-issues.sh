#!/usr/bin/env bash

source_repo="owner/repo"
target_repo="owner/repo"
issue_limit=5

gh issue list -R $source_repo -s all -L $issue_limit --json number | jq -r '.[] | .number' | xargs -I% gh issue transfer -R $source_repo % $target_repo

echo "Script finished. Press Enter to exit."
read
