System.config({
    transpiler: "babel",
	packages: { 
        'modules': { main: 'react-seed.js' }
    },
    paths: {
        'react:*': '../libs/react/*.js'
    },
    map: {
        'react': 'react:react',
        'react-dom': 'react:react-dom',
    }
});
System.import('modules').catch(console.error.bind(console));