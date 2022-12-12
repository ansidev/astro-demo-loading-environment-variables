import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

const lang = process.env.SITE_LANG
console.log('SITE_LANG =', lang);

const envPath = `.env.${lang}.local`
dotenv.config({ path: envPath })

// https://astro.build/config
export default defineConfig({});
