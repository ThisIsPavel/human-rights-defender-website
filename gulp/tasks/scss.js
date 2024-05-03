import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import GulpCleanCss from "gulp-clean-css";
import groupCssMediaQueries from "gulp-group-css-media-queries";
const sass = gulpSass(dartSass);

const scss = () => {
  return app.gulp
    .src(app.path.src.scss)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      autoPrefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(GulpCleanCss())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.css));
};

export { scss };
