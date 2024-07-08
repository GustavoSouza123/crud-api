#!/usr/bin/bash

url=http://localhost:8000

echo "sending request to $url\n"

# GET home page
curl $url/

# POST products
# curl -X POST \
#     -H "Content-Type: application/json" \
#     -d '{"name": "Gustavo Souza", "quantity": 1}' \
#     $url/api/products