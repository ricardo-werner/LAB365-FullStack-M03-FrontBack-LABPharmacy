'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('medicamentos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'usuarios',
            key: 'id'
          }
        },
      },
      farmacia_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'farmacias',
            key: 'id'
          }
        },
      },
      medicamento_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      laboratorio_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      medicamento_descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      medicamento_dosagem: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      unidade_dosagem: {
        type: Sequelize.ENUM,
        values: ['mg', 'mcg', 'g', 'mL', '%', 'Outro'],
        allowNull: false,
        defaultValue: 'mg'
      },
      medicamento_tipo: {
        type: Sequelize.ENUM,
        values: ['Controlado', 'Não Controlado'],
        allowNull: false,
        defaultValue: 'Não Controlado'
      },
      status: {
        type: Sequelize.ENUM,
        values: ['disponivel', 'indisponivel'],
        allowNull: false,
        defaultValue: 'disponivel'
      },
      preco_unitario: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('medicamentos');
  }

};
