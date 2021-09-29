import authInfo from '../../auth_config.json';


export const environment = {
  production: false,
  apiBaseUrl:  'http://localhost:8070',
  auth : {
    domain:authInfo.domain ,
    clientId:authInfo.clientId,
    redirectUri: window.location.origin,
  }
};
