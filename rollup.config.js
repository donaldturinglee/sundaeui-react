import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import sass from 'rollup-plugin-sass';
import packageJson from './package.json' assert { type: 'json' };

export default [
    {
        input: "src/main.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
            sass(),
        ],
        external: ["react", "react-dom"],
    },
    {
        input: "src/main.ts",
        output: [{ file: "build/types.d.ts", format: "es" }],
        plugins: [dts.default()],
        external: [/\.(css|less|scss)$/]
    },
];