import { type Config } from "tailwindcss"

const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  important: false,
  plugins: [require("tailwindcss-react-aria-components")],
} satisfies Config

export default config
