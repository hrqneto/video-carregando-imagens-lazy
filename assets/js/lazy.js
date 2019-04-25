(async () => {
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll("img.js-lazy");
        images.forEach(img => img.src = img.dataset.src)
    } else {
        const lazySizesLib = await import('./lazysizes.min.js');
        window.lazySizesConfig = window.lazySizesConfig || {}
        window.lazySizesConfig.lazyClass = 'js-lazy'
        window.lazySizesConfig.loadingClass = 'is-loading'
        window.lazySizesConfig.loadedClass = 'is-loaded'
        lazySizes.init();
    }
})();
