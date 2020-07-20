const Fs = require('fs')
const Path = require('path')
const Sass = require('node-sass')

const result = Sass.renderSync({
    data: Fs.readFileSync(
        Path.resolve('src/global.scss')
    ).toString(),
    outputStyle: 'expanded',
    includePaths: [Path.resolve('src')]
})

Fs.writeFileSync(
    Path.resolve('src/lib/global.css'),
    result.css.toString()
)
