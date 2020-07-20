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

    mix.js('resources/admin/js/app.js', 'public/admin/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/admin/js/src'),
                '@assets': path.resolve(__dirname, 'resources/admin/assets'),
                '@sass': path.resolve(__dirname, 'resources/admin/sass')
            }
        }
    })
    .sass('resources/admin/sass/app.scss', 'public/admin/css').options({
        postCss:[require('autoprefixer'), require('postcss-rtl')]
    })
    .postCss('resources/admin/assets/css/main.css', 'public/admin/css', [
        tailwindcss('tailwind.js'), require('postcss-rtl')()
    ])
    .copy('node_modules/vuesax/dist/vuesax.css', 'public/admin/css/vuesax.css') // Vuesax framework css
    .copy('resources/admin/assets/css/iconfont.css', 'public/admin/css/iconfont.css') // Feather Icon Font css
    .copyDirectory('resources/admin/assets/fonts', 'public/admin/fonts') // Feather Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont', 'public/admin/css/material-icons') // Material Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont/material-icons.css', 'public/admin/css/material-icons/material-icons.css') // Material Icon fonts css
    .copy('node_modules/prismjs/themes/prism-tomorrow.css', 'public/admin/css/prism-tomorrow.css') // Prism Tomorrow theme css
    .copyDirectory('resources/admin/assets/images', 'public/admin/images'); // Copy all images from resources to public folder

mix.webpackConfig({
    output: {
        chunkFilename: 'admin/js/chunks/[name].js',
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

