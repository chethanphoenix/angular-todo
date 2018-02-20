// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAYhwZzyJp8TJTNL_jvCHFGLfCKDDznSH8',
    authDomain: 'todoapp-9885d.firebaseapp.com',
    databaseURL: 'https://todoapp-9885d.firebaseio.com',
    projectId: 'todoapp-9885d',
    storageBucket: 'todoapp-9885d.appspot.com',
    messagingSenderId: '753684989752'
  }
};
