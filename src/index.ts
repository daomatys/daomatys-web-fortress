const omniImport = (resolve: any): void => resolve.keys().forEach(resolve);

omniImport( require.context('../src/', true, /\.ts$|\.scss$/) );
