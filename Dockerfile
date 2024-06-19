FROM node:20.11.1-alpine

RUN apk add build-base

WORKDIR /app

# Default replace vars for entrypoint
# Should be removed after we able to configure at runtime
ARG NEXT_PUBLIC_TARA_CONNECTOR_ADDRESS=NEXT_PUBLIC_TARA_CONNECTOR_ADDRESS_STRING_REPLACE
ARG NEXT_PUBLIC_ETH_CONNECTOR_ADDRESS=NEXT_PUBLIC_ETH_CONNECTOR_ADDRESS_STRING_REPLACE
ARG NEXT_PUBLIC_TARA_ERC20_MINTING_CONNECTOR_ADDRESS=NEXT_PUBLIC_TARA_ERC20_MINTING_CONNECTOR_ADDRESS_STRING_REPLACE
ARG NEXT_PUBLIC_ETH_ERC20_MINTING_CONNECTOR_ADDRESS=NEXT_PUBLIC_ETH_ERC20_MINTING_CONNECTOR_ADDRESS_STRING_REPLACE
ARG NEXT_PUBLIC_ETH_BRIDGE_ADDRESS=NEXT_PUBLIC_ETH_BRIDGE_ADDRESS_STRING_REPLACE
ARG NEXT_PUBLIC_TARA_BRIDGE_ADDRESS=NEXT_PUBLIC_TARA_BRIDGE_ADDRESS_STRING_REPLACE
ARG NEXT_PUBLIC_WTARA_TOKEN_ADDRESS=NEXT_PUBLIC_WTARA_TOKEN_ADDRESS_STRING_REPLACE
ARG NEXT_PUBLIC_WETH_TOKEN_ADDRESS=NEXT_PUBLIC_WETH_TOKEN_ADDRESS_STRING_REPLACE
ARG NEXT_PUBLIC_ETHEREUM_GRAPHQL_API=NEXT_PUBLIC_ETHEREUM_GRAPHQL_API_STRING_REPLACE
ARG NEXT_PUBLIC_TARAXA_GRAPHQL_API=NEXT_PUBLIC_TARAXA_GRAPHQL_API_STRING_REPLACE

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN yarn run build

COPY docker-files/entrypoint.sh entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["yarn", "run", "start"]
