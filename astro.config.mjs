// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // ... your existing integrations and settings
    vite: {
        server: {
            watch: {
                ignored: ['**/.vs/**']
            }
        }
    }
});
