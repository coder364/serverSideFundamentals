import React from "react";
import TryThis from "../../components/TryThis";
import codeSnippets from "../../data/codeSnippets.json";

export default function GraphqlSwaggerPostman() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">GraphQL, Swagger, Postman</h2>
      <p className="mb-4 text-green-100">
        GraphQL is a query language for APIs. Swagger and Postman are tools for API documentation and testing.
      </p>
      <TryThis snippet={codeSnippets.graphql} />
    </section>
  );
}
