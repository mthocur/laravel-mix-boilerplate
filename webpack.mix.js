let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Boilerplate for Laravel's Mix
 |--------------------------------------------------------------------------
 |
 | @author | mthocur | mthocur@gmail.com
 | jQuery(^3.4.1) and Bootstrap(^4.4.1) is ready to use.
 | 
 | Directory Structure;
 | src/             -> contains all sources including js,scss,css, imgs etc.
 | --assets/        -> img, fonts etc. NOTE: this directory will be copied directly to dist directory.
 | --css/           -> pure css directory
 | --html/          -> html directory NOTE: this boilerplate does not contains any HTML parser or etc. just using copy
 | --js/            -> all javascript sources 
 | ----app.js       -> modern js source
 | ----script.js    -> vanilla js source
 | --scss/          -> sass(scss) source directory 
 | 
 */
mix
.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery']
})
.js('src/js/app.js', 'dist/js')
.sass('src/scss/app.scss', 'dist/css')
.scripts([
    // add your vanilla javascript files here
    'src/js/script.js' 
], 'dist/js/vanilla.js')
.styles([
    // add your pure css files here
    'src/css/style.css'
], 'dist/css/all.css')
.copy('src/html', 'dist')
.copyDirectory('src/assets','dist/assets');