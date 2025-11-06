import nextStrict from "eslint-config-next/core-web-vitals"

export default [
  ...nextStrict,
  {
    ignores: ["**/node_modules/**", ".next/**"],
  },
]
