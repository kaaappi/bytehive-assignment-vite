import { defineConfig } from "orval";

const apiURL = "https://interview-api-8icc.onrender.com";

export default defineConfig({
  orvalVite: {
    output: {
      mode: "tags-split",
      target: "src/api/endpoints/index.ts",
      schemas: "src/api/types",
      client: "react-query",
      baseUrl: "https://interview-api-8icc.onrender.com",
      prettier: true,
      override: {
        mutator: {
          path: "./src/api/mutator/useCustomInstance.ts",
          name: "useCustomInstance",
        },
      },
    },
    input: {
      target: `${apiURL}/api-docs-config`,
    },
  },
});
