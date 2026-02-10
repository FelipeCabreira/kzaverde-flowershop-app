import { createSwaggerSpec } from "next-swagger-doc";

export function getSwaggerSpec() {
  return createSwaggerSpec({
    apiFolder: "pages/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "KzaVerde BFF API",
        version: "1.0.0",
        description: "API documentation for the KzaVerde BFF",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Local development",
        },
      ],
    },
  });
}
