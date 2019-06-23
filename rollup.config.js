import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import babel from "rollup-plugin-babel";
// import { eslint } from "rollup-plugin-eslint";

import {
    terser
} from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/main.js",
    output: {
        sourcemap: true,
        format: "iife",
        name: "app",
        file: "public/bundle.js"
    },
    plugins: [
        // eslint({ exclude: [ "public/**", "assets/**"]}),
        svelte({
            dev: !production,
            css: css => {
                css.write("public/bundle.css");
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