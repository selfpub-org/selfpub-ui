import nodeResolve from "rollup-plugin-node-resolve";
import commonJs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import builtins from "rollup-plugin-node-builtins";
import embedCSS from "rollup-plugin-embed-css";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

const peerDependencies = pkg.peerDependencies;

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "production";
const isProduction = NODE_ENV === "production";

const plugins = [
  embedCSS(),
  nodeResolve({
    extensions: [".js", ".json"],
    mainFields: ["jsNext", "module", "main"],
    preferBuiltins: true,
  }),
  babel({
    exclude: ["node_modules/**"], // only transpile our source code
  }),
  commonJs({
    include: "node_modules/**",
    namedExports: {
      "node_modules/react/index.js": [
        "Children",
        "Component",
        "PureComponent",
        "Fragment",
        "PropTypes",
        "createElement",
        "cloneElement",
        "createContext",
        "useRef",
        "useState",
        "useEffect",
      ],
      "node_modules/react-dom/index.js": ["render"],
      "node_modules/react-is/index.js": [
        "isElement",
        "isValidElementType",
        "ForwardRef",
      ],
      "node_modules/esrever/esrever.js": ["reverse"],
    },
  }),
  builtins(),
  isProduction && terser(),
  replace({
    "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
  }),
];

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: "src/components/index.js",
    external: peerDependencies,
    output: [
      {
        name: pkg.name,
        file: pkg.main,
        format: "cjs",
        exports: "named",
      },
      {
        name: pkg.name,
        file: pkg.module,
        format: "es",
        exports: "named",
      },
    ],
    plugins: plugins,
  },
];
