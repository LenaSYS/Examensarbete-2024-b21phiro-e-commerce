import { defineConfig } from "vite";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    root: './src',
    build: {
        outDir: path.join(__dirname, 'dist')
    }
});