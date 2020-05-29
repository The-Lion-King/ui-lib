const fs = require('fs')

const path = require('path');

const rootPath = path.resolve(__dirname,'../src/components');

const libComponentsScssWritePath = path.resolve(__dirname,'../lib/styles/components.scss');

const libStylesPath = path.resolve(__dirname,'../lib/styles');

const needScssFileName = 'style.scss';

const { name } = require('../package.json');

const distScssWritePath = path.resolve(__dirname,`../dist/${name}.scss`);

const dirs = fs.readdirSync(rootPath);

const styles = [];
dirs.forEach(item=>{
    const componentPath = path.resolve(rootPath,`./${item}`);
    if(fs.lstatSync(componentPath).isDirectory() && componentPath !== 'styles') {
        fs.readdirSync(componentPath).forEach(componentFile=>{
            if(componentFile === needScssFileName){
                styles.push(`@import "../${item}/${componentFile}";`)
            }
        })
    }
});


fs.writeFileSync(libComponentsScssWritePath, styles.join('\n'), 'utf8');

const allScss = [];

fs.readdirSync(libStylesPath).forEach(item=>{
    if(item === 'components.scss' || item === 'index.scss'){
        allScss.push(`@import "../lib/styles/${item}";`)
    }
})


fs.writeFileSync(distScssWritePath, allScss.join('\n'), 'utf8');