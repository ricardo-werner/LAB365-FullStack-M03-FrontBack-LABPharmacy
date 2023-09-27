const { STRING, DATE, ENUM } = require('sequelize')
const { connection } = require('../database/connection')

const Usuario = connection.define("usuario", {
  nome: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: "Nome não se pode deixar vazio",
      },
    },
  },
  sobrenome: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: "Sobrenome não se pode deixar vazio",
      },
    },
  },
  genero: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: "Gênero não se pode deixar vazio",
      },
    },
  },
  data_nascimento: {
    type: DATE,
    allowNull: false,
    validate: {
      notNull: {
        message: "Data de Nascimento não se pode deixar vazio",
      },
    },
  },
  cpf: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: "CPF não se pode deixar vazio",
      },
      len: {
        args: [11, 11],
        message: "CPF deve conter 11 números",
      },
      isNumeric: {
        message: "CPF deve conter apenas números",
      },
    },
    unique: { message: "CPF já existe" }
  },

  telefone: {
    type: STRING,
    allowNull: true
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: { message: "Email não se pode deixar vazio" },
      isEmail: { message: "Email Inválido" },
    },
    unique: { message: "Email já existe" }
  },
  senha: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: { message: "Senha não se pode deixar vazio" },
      len: {
        args: [8, 20],
        message: "Senha precisa ter no mímino 8 letras, sendo pelo menos 1 letra maiúscula, 1 minúscula e 1 caracter especial."
      },
      is: {
        args: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/,
        message: "Senha muito fraca."
      }
    }
  },
  status: {
    type: ENUM,
    values: ['ativo', 'inativo'],
    allowNull: false,
    defaultValue: 'ativo',
    validate: {
      notNull: {
        message: "Status não se pode deixar vazio",
      },
    },
  },
},
  {
    underscored: true,
    paranoid: true,
    timestamps: true
  })

module.exports = { Usuario }
