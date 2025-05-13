import { HttpLink } from "@apollo/client";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

if (process.env.NODE_ENV === "development") {
  loadDevMessages();
  loadErrorMessages();
}

export const { query, getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Item: {
          fields: {
            properties: {
              merge: true,
            },
          },
        },
      },
    }),
    link: new HttpLink({
      uri: "https://api.tarkov.dev/graphql",
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  });
});
