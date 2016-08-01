
const fs = require('fs')
const paths = require('./src')

const keys = Object.keys(paths)

const createSvg = (key, path) => {
  const svg = `
  <svg xmlns="http://www.w3.org/2000svg"
    viewBox="0 0 32 32"
    width="32"
    height="32"
    class="geomicon geomicon-${key}"
    fill="currentcolor">
    <path d="${path}" />
  </svg>
  `.replace(/\s\s+|\n/g, ' ')
  .trim()

  return svg
}

const writeFile = (key, svg) => {
  fs.writeFileSync(`./dist/svg/${key}.svg`, svg)
  console.log(key + '.svg written')
}

const svgs = keys.map(key => ({
  key,
  svg: createSvg(key, paths[key])
}))

svgs.forEach(({ key, svg }) => {
  writeFile(key, svg)
})

