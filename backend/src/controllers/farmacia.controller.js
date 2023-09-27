const { Farmacia } = require('../models/farmacia')
const { Medicamento } = require('../models/medicamento')
const { response } = require('express')
const { config } = require('dotenv')
config()

class FarmaciaController {
    async createOneFarmacia(request, response) {
        try {
            const {
                usuario_id,
                razao_social,
                cnpj,
                nome_fantasia,
                email,
                telefone,
                celular,
                cep,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                latitude,
                longitude,
                status
            } = request.body;

            // Verifica se a farmácia já existe
            const farmaciaExistente = await Farmacia.findOne({
                where: {
                    cnpj: cnpj
                }
            });

            if (farmaciaExistente) {
                return response.status(409).send({
                    message: "Falha na operação de criar farmácia",
                    cause: "Farmácia já existe"
                });
            }

            const novaFarmacia = await Farmacia.create({
                usuario_id,
                razao_social,
                cnpj,
                nome_fantasia,
                email,
                telefone,
                celular,
                cep,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                latitude,
                longitude,
                status
            });

            return response.status(201).send(novaFarmacia);
        } catch (error) {
            const status = error.message.status || 400
            const message = error.message.msg || error.message
            return response.status(parseInt(status)).send({
                message: "Falha na operação de criar a farmácia",
                cause: message
            });
            console.log(error)
        }
    }

    async listAllFarmacias(request, response) {
        try {
            const farmacia = await Farmacia.findAll()

            return response.status(200).send(farmacia)
        } catch (error) {
            const status = error.message.status || 400
            const message = error.message.msg || error.message
            return response.status(parseInt(status)).send({
                message: "Falha na operação de listar as farmácia",
                cause: message
            });
        }
    }

    async listAllFarmaciasStatus(request, response) {
        try {
            const { status } = request.params;

            let whereCondition = {};
            if (status === 'ativo' || status === 'inativo') {
                whereCondition = { status };
            }

            const farmacia = await Farmacia.findAll({
                where: whereCondition,
            });

            return response.status(200).send(farmacia);
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.msg || error.message;
            return response.status(parseInt(status)).send({
                message: "Falha na operação de listar as farmácias",
                cause: message
            });
        }
    }

    async listOneFarmacia(request, response) {
        try {
            const { id } = request.params
            const farmacia = await Farmacia.findByPk(id);

            if (!farmacia) {
                return response.status(404).send({
                    message: "Falha na operação de listar a farmácia",
                    cause: "Farmácia não encontrado"
                })
            }

            return response.status(200).send(farmacia)
        } catch (error) {
            const status = error.message.status || 400
            const message = error.message.msg || error.message
            return response.status(parseInt(status)).send({
                message: "Falha na operação de listar a farmácia",
                cause: message
            });
        }
    }

    async updateOneFarmacia(request, response) {
        try {
            const { id } = request.params;
            const {
                nome_fantasia,
                contato,
                email,
                telefone,
                celular,
                cep,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                latitude,
                longitude
            } = request.body;

            const farmacia = await Farmacia.findByPk(id);

            if (!id) {
                return response.status(404).send({
                    message: "Falha na operação de atualizar a farmácia",
                    cause: "Farmácia não encontrada"
                })
            }

            // Verifica se pelo menos um campo está presente na requisição para permitir a atualização
            if (!nome_fantasia &&
                !contato &&
                !email &&
                !telefone &&
                !celular &&
                !cep &&
                !endereco &&
                !numero &&
                !complemento &&
                !bairro &&
                !cidade &&
                !estado &&
                !latitude &&
                !longitude) {

                return response.status(400).send({
                    message: "Falha na operação de atualizar a Farmácia",
                    cause: "Nenhum campo para atualizar foi fornecido"
                });
            }

            // Atualiza apenas os campos fornecidos na requisição
            if (nome_fantasia !== undefined) {
                farmacia.nome_fantasia = nome_fantasia;
            }
            if (contato !== undefined) {
                farmacia.contato = contato;
            }
            if (email !== undefined) {
                farmacia.email = email;
            }
            if (telefone !== undefined) {
                farmacia.telefone = telefone;
            }
            if (celular !== undefined) {
                farmacia.celular = celular;
            }
            if (cep !== undefined) {
                farmacia.cep = cep;
            }
            if (endereco !== undefined) {
                farmacia.endereco = endereco;
            }
            if (numero !== undefined) {
                farmacia.numero = numero;
            }
            if (bairro !== undefined) {
                farmacia.bairro = bairro;
            }
            if (cidade !== undefined) {
                farmacia.cidade = cidade;
            }
            if (estado !== undefined) {
                farmacia.estado = estado;
            }
            if (complemento !== undefined) {
                farmacia.complemento = complemento;
            }
            if (latitude !== undefined) {
                farmacia.latitude = latitude;
            }
            if (longitude !== undefined) {
                farmacia.longitude = longitude;
            };

            // Salva as alterações no banco de dados
            await farmacia.save();

            return response.status(204).send(farmacia);
        } catch (error) {
            const status = error.message.status || 400
            const message = error.message.msg || error.message
            return response.status(parseInt(status)).send({
                message: "Falha na operação de atualizar a farmácia",
                cause: message
            });
        }
    }

    //Definir o endpoint para alterar o status da farmácia
    async updateOneFarmaciaStatus(request, response) {
        try {
            const { id } = request.params;

            const farmacia = await Farmacia.findOne({ where: { id } });
            if (!farmacia) {
                return response.status(404).send({
                    message: "Falha na operação de atualizar status da farmácia",
                    cause: "Farmácia não encontrada"
                });
            }

            const status = (farmacia.status === "ativo") ? 'inativo' : 'ativo'

            await Farmacia.update({ status }, { where: { id } });

            // Recuperar a farmácia atualizado para retornar na resposta
            const farmaciaAtualizado = await Farmacia.findByPk(id);

            return response.status(204).send(farmaciaAtualizado)
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.msg || error.message;
            return response.status(parseInt(status)).send({
                message: "Falha na operação de atualizar status",
                cause: message
            });
        }
    }

    //Definir o endpoint para deletar Farmácia (deleção lógica)
    // async deleteOneFarmacia(require, response) {
    //     try {
    //         const { id } = require.params;

    //         // Verifica se o depósito existe
    //         const farmacia = await Farmacia.findByPk(id, { paranoid: true });
    //         if (!deposito) {
    //             return response.status(404).send({ error: 'Farmácia não encontrado' });
    //         }

    //         // Verifica se existe medicamentos associado a farmácia
    //         const medicamentos = await Medicamento.findAll({
    //             where: { farmacia_id: id }
    //         });

    //         if (medicamentos.length > 0) {
    //             return response.status(400).send({
    //                 message: "Falha na operação de deletar a farmácia",
    //                 cause: "Existem medicamentos associados a farmácia"
    //             });
    //         }

    //         // Verifica se a farmácia já está inativo
    //         if (farmacia.status !== 'inativo') {
    //             return response.status(400).send({
    //                 message: "Falha na operação de deletar a farmácia",
    //                 cause: "A farmácia deve estar com status inativo para ser deletado"
    //             });
    //         }

    //         // Realiza o Soft Delete
    //         await farmácia.destroy();

    //         return response.status(204).send(farmácia);
    //     } catch (error) {
    //         const status = error.message.status || 400
    //         const message = error.message.msg || error.message
    //         return response.status(parseInt(status)).send({
    //             message: "Falha na operação de deletar a farmácia",
    //             cause: message
    //         });
    //     }
    // }

    async deleteOneFarmacia(request, response) {
        try {
            const { id } = request.params;
            const { status, medicamento_id } = request.body;

            const medicamentos = await Medicamento.findAll({
                where: { farmacia_id: id }
            });

            if (medicamentos.length > 0) {
                // Verifica se algum medicamento está com status "disponivel"
                const hasMedicamentoDisponivel = medicamentos.some(medicamento => medicamento.status === 'disponivel');
                if (hasMedicamentoDisponivel) {
                    return response.status(400).send({
                        message: "Falha na operação de deletar a farmacia",
                        cause: "Existem medicamentos com status disponivel associados a farmácia"
                    });
                }
            }
            // Verifica se a farmácia existe
            const farmacia = await Farmacia.findByPk(id, { paranoid: true });
            if (!farmacia) {
                return response.status(404).send({ error: 'Farmácia não encontrado' });
            }

            // Verifica se a farmácia já está inativa
            if (farmacia.status !== 'inativo') {
                return response.status(400).send({
                    message: "Falha na operação de deletar a farmácia",
                    cause: "A farmácia deve estar com status inativo para ser deletado"
                });
            }

            // Realiza o Soft Delete
            await farmacia.destroy({ where: { id } });

            return response.status(204).send();
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.msg || error.message;
            return response.status(parseInt(status)).send({
                message: "Falha na operação de deletar a farmácia",
                cause: message,
            });
        }
    }


    //Definir o endpoint para restaurar usuário (restauração lógica)
    async restoreOneFarmacia(require, response) {
        try {
            const { id } = require.params;

            const farmacia = await Farmacia.findByPk(id, { paranoid: false });
            if (!farmacia) {
                return response.status(404).send({ error: 'Farmácia não encontrada' });
            }

            await farmacia.restore(); // Realiza o Soft Delete
            farmacia.status = 'ativo';
            await farmacia.save();

            return response.status(200).send(farmacia);
        } catch (error) {
            const status = error.message.status || 400
            const message = error.message.msg || error.message
            return response.status(parseInt(status)).send({
                message: "Falha na operação de restaurar a farmácia",
                cause: message
            });
        }
    }
}

module.exports = new FarmaciaController()