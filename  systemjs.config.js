(function(global) {
  var ngVer = '@2.0.0-rc.4';
  var routerVer = '@3.0.0-beta.2';
  var formsVer = '@0.2.0';
  var routerDeprecatedVer = '@2.0.0-rc.2';
  var map = {
    'app':                        'app',
    '@angular':                   'https://npmcdn.com/@angular',
    '@angular/router':            'https://npmcdn.com/@angular/router' + routerVer,
    '@angular/forms':             'https://npmcdn.com/@angular/forms' + formsVer,
    '@angular/router-deprecated': 'https://npmcdn.com/@angular/router-deprecated' + routerDeprecatedVer,
    'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api',
    'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
    'ts':                         'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript':                 'https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js',
 };

  var packages = {
    'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'upgrade',
  ];

  ngPackageNames.forEach(function(pkgName) {
    map['@angular/'+pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVer;
  });

  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  });

  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };
  packages['@angular/forms'] = { main: 'index.js', defaultExtension: 'js' };
  packages['@angular/router-deprecated'] = { main: '/bundles/router-deprecated' + '.umd.js', defaultExtension: 'js' };

  var config = {
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    map: map,
    packages: packages
  };

  System.config(config);
})(this);
