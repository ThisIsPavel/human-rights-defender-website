import * as nPath from "path";

const rootFolder = nPath.basename(nPath.resolve());
const buildFolder = "./dist";
const srcFolder = "./src";

const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    img: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    js: `${srcFolder}/js/*.js`,
    scss: `${srcFolder}/styles/*.scss`,
    html: `${srcFolder}/*.html`,
    img: `${srcFolder}/img/*.{jpg,png,jpeg}`,
    svg: `${srcFolder}/img/icons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/styles/**/*.scss`,
    img: `${srcFolder}/img/*.{jpg,png}`,
    svg: `${srcFolder}/img/icons/*.svg`,
  },
  buildFolder,
  srcFolder,
  rootFolder,
};

export { path };
