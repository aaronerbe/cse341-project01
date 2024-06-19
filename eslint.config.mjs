import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    extends: ["prettier"],
    plugins: ["prettier:recommended", "eslint:recommended"],
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "warn"
    }
  }
];