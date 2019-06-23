import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import babel from "rollup-plugin-babel";

import postcss from "rollup-plugin-postcss";

import {
    terser
} from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;


const outputPath = "public/dist";

const browserConfig = {
    input: "src/main.js",
    output: {
        sourcemap: !production,
        format: "iife",
        name: "app",
        file: `${outputPath}/static/bundle.js`
    },
    plugins: [
        postcss({
            extensions: [".css", ".styl"],
            extract: `${outputPath}/static/bundle.global.css`
        }),
        svelte({
            dev: !production,
            css: css => {
                css.write(`${outputPath}/static/bundle.css`);
            }
        }),
        resolve({
            browser: true
        }),
        commonjs(),
        babel({
            exclude: "node_modules/**"
        }),
        !production && livereload("public"),
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};

const serverConfig = {
    input: "src/App.svelte",
    output: {
        sourcemap: false,
        format: "cjs",
        name: "app",
        file: "public/dist/App.js"
    },
    plugins: [
        svelte({
            generate: "ssr"
        }),
        resolve(),
        commonjs(),
        production && terser()
    ]
};

export default [browserConfig, serverConfig];