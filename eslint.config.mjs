import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extiende la configuración de Next.js y TypeScript
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Desactivar reglas específicas
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Desactivar variables no usadas
      "react/no-unescaped-entities": "off", // Desactivar apóstrofes no escapados
    },
  },
];

export default eslintConfig;
