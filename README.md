# Content of this REPO

an angular workspace with 3 projects:

- test-lib - a library with a single module, which contains a single component (a stack component, which is simply a container with flex-layout with direction column and input-parameters for gap, align-items and justify-content).
- mfe - a micro-front-end application, which uses the StackComponent from test-lib running on port 4201
- shell - the shell, to test native federation running on port 4200


# Branch master

In this branch the native federation has not been applied. To start the mfe application, you have to

1. run `ng build test-lib`
2. run `npm run start:mfe`
3. browse to http://localhost:4201  => this works fine


# Branch add-native-federation-to-mfe

In this branch native federation has been added by executing the following command:

`ng add @angular-architects/native-federation --project mfe --port 4201 --type remote`

Now try the same as in branch master:

1. run `ng build test-lib`
2. run `npm run start:mfe`
3. browse to http://localhost:4201  

This doesn't work anymore. The following runtime error occurs (as seen in the browsers console):

```
Error: Unable to resolve specifier '@angular/common/locales/de' imported from http://localhost:4201/test_lib.js
```

If you remove the imports from `@angular/common/locales/de` and `@angular/common/locales/extras/de` and the call of the function `registerLocaleData` from the file `library.module.ts` it works again.