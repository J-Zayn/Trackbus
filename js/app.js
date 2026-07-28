import { checkSession, initAuth } from './auth.js';
import { initRouter } from './router.js';
import { initServices } from './services.js';

document.addEventListener('DOMContentLoaded', () => {
    initRouter();
    initAuth();
    initServices();
    checkSession();
});