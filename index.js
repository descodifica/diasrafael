const { configEnvRequire, envRequire, } = require('@desco/env-require')

configEnvRequire(__dirname, {
  'development': {
    '@desco/atlas': '../../../Descodifica/NPM/atlas/src',
  },
})

envRequire('@desco/atlas')({
  Orm: {
    Db: {
      name: 'diasrafael',
      dialog: 'mysql',
      // log: true,
    },
    pool: {
      max: 10,
      min: 0,
      idle: 30000,
      acquire: 10000,
    },
    uidDefaultVersion: 4,
    perPage: 25,
  },
  Server: {
    static: 'public',
  },
  Mail: {
    host: 'br142.hostgator.com.br',
    port: 465,
    secure: true,
    user: 'noreply@rabelotour.com.br',
    password: 'g',
    tls : { 'rejectUnauthorized': false, },
  },
  Auth: {
    permission: true,
    secret: 'NK.FNVLIJGJSÇO,MGODLGF5SD1G575H1ARÇGLM',
    algorithm: 'HS256',
    model: 'Permission',
    userModel: 'User',
    groupModel: 'UserGroup',
    pswProp: 'password',
    loginProp: 'mail',
    mailProp: 'mail',
    tokenProp: 'token',
    tokenTypeProp: 'tokenType',
    userPkPprop: 'id',
    expireTokenProp: 'expireToken',
    google: {
      auth: true,
      auth_id: '450093598200-icsqg2vltkgccne17296u9ijpe8ncqd1.apps.googleusercontent.com',
      auth_key: '6y-_Gwr2Y953OnBm59dCKh-9',
      auth_scope: 'userinfo.email;userinfo.profile',
      auth_google_auth_prompt: 'consent',
    },
  },
})