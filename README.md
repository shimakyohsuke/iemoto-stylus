# Iemoto さんで stylus を使う

scss ファイルを勝手に stylus ファイルに変換しただけ。  
あと BrowserSync（[Browsersync + Gulp.js](http://www.browsersync.io/docs/gulp/)）とかつけたので、`$ gulp browserSync` で stylus ファイルとか js ファイルを watch して保存されたら更新したりします。

----
# Iemoto

> This is a WordPress Starter Theme based on _s and integrated with grunt.  
Iemoto follows all the fixes and feature upgrades of _s
Automate theme development process with it!  
megumiteam/iemoto  
<https://github.com/megumiteam/iemoto>

----

## Usage

```
mkdir ~/.grunt-init
git clone git@github.com:shimakyohsuke/iemoto-stylus.git ~/.grunt-init/iemoto-stylus
mkdir wp-content/themes/my-theme
grunt-init iemoto-stylus
npm install
```

### npm ls

- gulp
- gulp-jshint
- gulp-load-plugins
- gulp-notify
- gulp-plumber
- gulp-replace
- gulp-stylus
- gulp-pleeease
- BrowserSync
