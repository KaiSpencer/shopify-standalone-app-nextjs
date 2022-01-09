import { Button, Heading, Page } from "@shopify/polaris";
import { useState } from "react";

const Index = () => {
  const [data, setData] = useState();
  const queryString = `{
    products (first: 3) {
      edges {
        node {
          id
          title
        }
      }
    }
  }`;

  const handleClick = async () => {
    /**
     * You can now make requests without backend, client only needed.
     * Use fetch like below and be sure to use {credentials: "include"}
     * as this is using the server to get the current active shop session and retrieve the token under the hood.
     */
    const res = await fetch("/graphql", {
      credentials: "include",
      body: queryString,
      method: "POST",
    });
    if (res.status === 200) {
      setData(await res.json());
    }
  };
  return (
    <Page>
      <Heading>Shopify app with Node and React 🎉</Heading>
      <Button onClick={handleClick}>Fetch</Button>
      <br />
      <br />
      {data &&
        data.data.products.edges.map((product) => {
          console.log(product);
          return (
            <>
              <Heading>Product Name: {product.node.title}</Heading>
              Product id: {product.node.id}
            </>
          );
        })}
    </Page>
  );
};

export default Index;
