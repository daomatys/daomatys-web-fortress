const omniImport = (resolve: any) => resolve.keys().forEach(resolve);

const context: any = require.context('../src/', true, /\.js$|\.scss$/)

omniImport( context );
