const toLowerIfWindows = require('../functions/toLowerIfWindows')

module.exports = {
  up: async (queryInterface/*, Sequelize*/) => {
    await queryInterface.bulkInsert(toLowerIfWindows('DevPlugins'), [
      {
        'id': 'da666f27-d418-4083-908c-70a18337dd04',
        'url': 'https://marketplace.visualstudio.com/items?itemName=steoates.autoimport',
        'name': 'Auto Import',
        'description': 'Automaticamente localiza, analisa e fornece ações de código e autocompletar código para todas as importações disponíveis. Funciona com Typescript e TSX.',
        'createdAt': '2021-04-08T23:05:00',
        'updatedAt': '2021-04-08T23:05:00',
        'DevPluginTypeId': '93ac26f7-7a38-4be2-baef-b515c2767ea5',
      },
      {
        'id': 'f49fa638-eb26-43b0-8f45-bea0abc2b3c6',
        'url': 'https://www.npmjs.com/package/object-path',
        'name': 'object-path',
        'description': 'Acessa uma propriedade de um objeto dado um caminho',
        'createdAt': '2021-04-11T21:05:28',
        'updatedAt': '2021-04-11T21:05:28',
        'DevPluginTypeId': 'd0052e10-7a0a-4068-b9a9-5cdaccf7425d',
      },
      {
        'id': '78f57b43-01b0-434b-84bc-7a42721de032',
        'url': 'https://marketplace.visualstudio.com/items?itemName=sirmspencer.vscode-autohide',
        'name': 'Auto Hide',
        'description': 'Uma ferramenta para ocultar automaticamente a barra lateral e o painel do terminal',
        'createdAt': '2021-04-13T12:09:06.000Z',
        'updatedAt': '2021-04-13T12:09:06.000Z',
        'DevPluginTypeId': '93ac26f7-7a38-4be2-baef-b515c2767ea5',
      },
      {
        'id': '0e8d9ad8-98fe-4cc5-a3ca-23500034d4b2',
        'url': 'https://www.npmjs.com/package/randomstring',
        'name': 'randomstring',
        'description': 'Biblioteca para ajudá-lo a criar strings aleatórias.',
        'createdAt': '2021-04-13T12:24:05.000Z',
        'updatedAt': '2021-04-13T12:24:05.000Z',
        'DevPluginTypeId': 'd0052e10-7a0a-4068-b9a9-5cdaccf7425d',
      },
    ])

    return Promise.resolve()
  },
  down: async (/*queryInterface, Sequelize*/) => {},
}