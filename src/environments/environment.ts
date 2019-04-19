// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { KeycloakConfig } from 'keycloak-angular';


// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
    url: 'http://localhost:8083/auth',
    realm: 'Viralskills',
    clientId: 'angular-client-web'
};
export const environment = {
    apiUrl: 'http://localhost:8080',
    apiaccountUrl: 'http://localhost:8084',


    hmr: false,
    secure: false,
    production: false,
    assets: {
        dotaImages:
            'https://cdn-keycloak-angular.herokuapp.com/assets/images/dota-heroes/'
    },
    apis: { dota: 'http://localhost:3000' },
    keycloak: keycloakConfig
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
