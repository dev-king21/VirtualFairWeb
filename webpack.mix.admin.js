const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');
let tailwindcss = require('tailwindcss');
require('dotenv').config();


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

    mix.js('resources/admin/js/app.js', 'public/admin-app/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/admin/js/src'),
                '@assets': path.resolve(__dirname, 'resources/admin/assets'),
                '@sass': path.resolve(__dirname, 'resources/admin/sass')
            }
        }
    })
    .sass('resources/admin/sass/app.scss', 'public/admin-app/css').options({
        postCss:[require('autoprefixer'), require('postcss-rtl')]
    })
    .postCss('resources/admin/assets/css/main.css', 'public/admin-app/css', [
        tailwindcss('tailwind.js'), require('postcss-rtl')()
    ])
    .copy('node_modules/vuesax/dist/vuesax.css', 'public/admin-app/css/vuesax.css') // Vuesax framework css
    .copy('resources/admin/assets/css/iconfont.css', 'public/admin-app/css/iconfont.css') // Feather Icon Font css
    .copyDirectory('resources/admin/assets/fonts', 'public/admin-app/fonts') // Feather Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont', 'public/admin-app/css/material-icons') // Material Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont/material-icons.css', 'public/admin-app/css/material-icons/material-icons.css') // Material Icon fonts css
    .copy('node_modules/prismjs/themes/prism-tomorrow.css', 'public/admin-app/css/prism-tomorrow.css') // Prism Tomorrow theme css
    .copyDirectory('resources/admin/assets/images', 'public/admin-app/images'); // Copy all images from resources to public folder

mix.webpackConfig({
    output: {
        chunkFilename: 'admin-app/js/chunks/[name].js',
    }
});
//mix.browserSync({ proxy: 'localhost:8000' });
mix.mergeManifest();

// Change below options according to your requirement
// if (mix.inProduction()) {
//     mix.version();
//     mix.webpackConfig({
//         output: {
//             publicPath: '/demo/vuexy-vuejs-laravel-admin-template/demo-1/',
//             chunkFilename: 'js/chunks/[name].[chunkhash].js',
//         }
//     });
//     mix.setResourceRoot("/demo/vuexy-vuejs-laravel-admin-template/demo-1/");
// }
// else{
//     mix.webpackConfig({
//         output: {
//             chunkFilename: 'js/chunks/[name].js',
//         }
//     });
// }

// mix.webpackConfig({
//     output: {
//         chunkFilename: 'js/chunks/[name].js',
//     }
// });

