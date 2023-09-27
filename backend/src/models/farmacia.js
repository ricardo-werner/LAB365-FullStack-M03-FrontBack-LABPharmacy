const { Sequelize } = require('sequelize');
const { INTEGER, STRING, ENUM } = require('sequelize');
const { connection } = require('../database/connection');
const { Usuario } = require('./usuario');

const Farmacia = connection.define("farmacia", {
  usuario_id: {
    type: INTEGER,
    allowNull: false,
    foreignKey: true,
    references: {
      model: {
        tableName: 'usuarios',
      },
      key: 'id'
    },
    validate: {
      notNull: {
        message: 'Usuário_id não pode ficar vazio',
      },
    },
  },
  razao_social: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Razão Social não pode ficar vazia',
      },
    },
  },
  cnpj: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'CNPJ não pode ficar vazio',
      },
      len: {
        args: [14, 14],
        message: 'CNPJ deve conter 14 números',
      },
      isNumeric: {
        message: 'CNPJ deve conter apenas números',
      },
    },
    unique: {
      message: {
        msg: 'CNPJ já existe.',
        status: "409",
      },
    },
  },
  nome_fantasia: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Nome Fantasia não pode ficar vazio',
      },
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Email não pode ficar vazio',
      },
      isEmail: {
        message: 'Email inválido',
      },
    },
    unique: {
      message: {
        msg: 'Email já existe.',
        status: "409",
      },
    },
  },
  telefone: {
    type: STRING,
    allowNull: true,
  },
  celular: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Celular não pode ficar vazio',
      },
    },
  },
  cep: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'CEP não pode ficar vazio',
      },
    },
  },
  endereco: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Endereço não pode ficar vazio',
      },
    },
  },
  numero: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Número não pode ficar vazio',
      },
    },
  },
  complemento: {
    type: STRING,
    allowNull: true,
  },
  bairro: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Bairro não pode ficar vazio',
      },
    },
  },
  cidade: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Cidade não pode ficar vazia',
      },
    },
  },
  estado: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Estado não pode ficar vazio',
      },
    },
  },
  latitude: {
    type: STRING,
    allowNull: true,
  },
  longitude: {
    type: STRING,
    allowNull: true,
  },
  status: {
    type: ENUM,
    values: ['ativo', 'inativo'],
    allowNull: false,
    defaultValue: 'ativo',
    validate: {
      notNull: {
        message: 'Status não pode ficar vazio',
      },
    },
  }
},
  {
    underscored: true,
    paranoid: true,
    timestamps: true
  });

Farmacia.belongsTo(Usuario);

module.exports = { Farmacia }