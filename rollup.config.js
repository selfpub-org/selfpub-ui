import nodeResolve from "rollup-plugin-node-resolve";
import commonJs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import embedCSS from "rollup-plugin-embed-css";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

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
        "useCallback",
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
  isProduction &&
    terser({
      // Use multi-process parallel running to improve the build speed
      // Default number of concurrent runs: os.cpus().length - 1
      // reduce count for performance on stage
      numWorkers: 4,
      parse: {
        // we want terser to parse ecma 8 code. However, we don't want it
        // to apply any minfication steps that turns valid ecma 5 code
        // into invalid ecma 5 code. This is why the 'compress' and 'output'
        // sections only apply transformations that are ecma 5 safe
        ecma: 8,
      },
      compress: {
        ecma: 5,
        warnings: false,
        // Disabled because of an issue with Uglify breaking seemingly valid code:
        // https://github.com/facebook/create-react-app/issues/2376
        // Pending further investigation:
        // https://github.com/mishoo/UglifyJS2/issues/2011
        comparisons: false,
        // Disabled because of an issue with Terser breaking valid code:
        // https://github.com/facebook/create-react-app/issues/5250
        // Pending futher investigation:
        // https://github.com/terser-js/terser/issues/120
        inline: 2,
      },
      mangle: {
        safari10: true,
      },
      output: {
        ecma: 5,
        comments: false,
        // Turned on because emoji and regex is not minified properly using default
        // https://github.com/facebook/create-react-app/issues/2488
        ascii_only: true,
      },
    }),
  replace({
    "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
  }),
];

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: "src/components/index.js",
    external: ["react", "react-dom", "styled-components"],
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
