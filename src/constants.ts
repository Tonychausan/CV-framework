export const IS_PRODUCTION = import.meta.env.MODE === 'production';
export const CONTENT_BASE = IS_PRODUCTION
    ? 'https://raw.githubusercontent.com/Tonychausan/CV-framework/master/public/content/'
    : '/CV-framework/content/';