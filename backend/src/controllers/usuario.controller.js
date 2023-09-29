const { Usuario } = require('../models/usuario')
const { senha } = require('../models/usuario')
const { SECRET_KEY_JWT } = require('../config/database.config')
const { config } = require('dotenv')
const { sign } = require('jsonwebtoken')
const { response } = require('express')
config()
class UsuarioController {
    async createOneUsuario(request, response) {
        try {
            const {
                nome,
                sobrenome,
                genero,
                data_nascimento,
                cpf,
                telefone,
                email,
                senha,
                status
            } = request.body;
  
            const usuarioExistente = await Usuario.findOne({
                where: { email: email }
            });

            if (usuarioExistente) {
                return response.status(400).send({
                    message: "Falha na operação de criar usuário",
                    cause: "O email informado já está em uso."
                });
            }

           
            try {
                const novoUsuario = await Usuario.create({
                  nome,
                  sobrenome,
                  genero,
                  data_nascimento,
                  cpf,
                  telefone,
                  email,
                  senha,
                  status
                });
              
                return response.status(201).send(novoUsuario);
                
              } catch (error) {
                console.error(error);
                return response.status(500).send({
                  message: "Falha na operação de criar usuário",
                  cause: "Ocorreu um erro durante a criação do usuário."
                });
              }
        } catch (error) {
            const status = error.message.status || 400
            const message = error.message.msg || error.message
            return response.status(parseInt(status)).send({
                message: "Falha na operação de criar usuário",
                cause: message
            });
        }
    }


    async loginUsuario(request, response) {
        try {
            const {
                email,
                senha
            } = request.body;

            const usuario = await Usuario.findOne({
                where: { email: email }
            })

            if (!usuario) {
                return response.status(404).send({
                    message: "Tentativa de Login Falhou",
                    cause: "E-mail não encontrado"
                });
            }

            if (usuario.senha !== senha) {
                return response.status(400).send({
                    message: "Tentativa de Login Falhou",
                    cause: "Senha inválida"
                });
            }

            const payload = { "email": usuario.email, "senha": usuario.senha }
            const token = sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '2h' })

            return response.status(200).send({ "token": token })

        } catch (error) {
            const status = error.message.status || 400
            const message = error.message.msg || error.message
            return response.status(parseInt(status)).send({
                message: "Falha na operação de criar usuário",
                cause: message
            });
        }
    }

    async listAllUsuarios(request, response) {
        try {
            const usuario = await Usuario.findAll()

            return response.status(200).send(usuario)
        } catch (error) {
            const status = error.message.status || 400
            const message = error.message.msg || error.message
            return response.status(parseInt(status)).send({
                message: "Falha na operação de listar usuários",
                cause: message
            })
        }
    }

    async listOneUsuario(request, response) {
        try {
            const { id } = request.params;
            const usuario = await Usuario.findByPk(id, {
                attributes: { exclude: ['senha'] }
            });

            if (!usuario) {
                return response.status(404).send({
                    message: "Falha na operação de listar usuário",
                    cause: "Usuário não encontrado"
                });
            }

            return response.status(200).send(usuario);
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.msg || error.message;
            return response.status(parseInt(status)).send({
                message: "Erro ao listar usuário",
                cause: message
            });
        }
    }

    async updateOneUsuario(request, response) {
        try {
            const { id } = request.params;
            const {
                nome,
                sobrenome,
                genero,
                telefone
            } = request.body;

            const usuario = await Usuario.findByPk(id);

            if (!usuario) {
                return response.status(404).send({
                    message: "Falha na operação de atualizar usuário",
                    cause: "Usuário não encontrado"
                });
            }

            // Verifica se pelo menos um campo está presente na requisição para permitir a atualização
            if (!nome && !sobrenome && !genero && !telefone) {
                return response.status(400).send({
                    message: "Falha na operação de atualizar usuário",
                    cause: "Nenhum campo para atualizar foi fornecido"
                });
            }

            // Atualiza apenas os campos fornecidos na requisição
            if (nome !== undefined) {
                usuario.nome = nome;
            }
            if (sobrenome !== undefined) {
                usuario.sobrenome = sobrenome;
            }
            if (genero !== undefined) {
                usuario.genero = genero;
            }
            if (telefone !== undefined) {
                usuario.telefone = telefone;
            }

            // Salva as alterações no banco de dados
            await usuario.save();

            return response.status(202).send(usuario);

        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.msg || error.message;
            return response.status(parseInt(status)).send({
                message: "Falha na operação de atualizar usuário",
                cause: message // Retorna a mensagem de erro específica
            });
        }
    }


    async updateOneStatus(request, response) {
        try {
            const { id } = request.params;
            const { status } = request.body;

            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                return response.status(404).send({
                    message: "Falha na operação de atualizar status",
                    cause: "Usuário não encontrado"
                });
            }

            if (status !== 'ativo' && status !== 'inativo') {
                return response.status(404).send({
                    message: "Falha na operação de atualizar status",
                    cause: "Status não encontrado"
                });
            }

            await Usuario.update({ status }, { where: { id } });

            // Recupera o usuário atualizado para retornar na resposta
            const usuarioAtualizado = await Usuario.findByPk(id);

            return response.status(200).send(usuarioAtualizado);
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.msg || error.message;
            return response.status(parseInt(status)).send({
                message: "Falha na operação de atualizar status",
                cause: message
            });
        }
    }

    async updateOneSenha(request, response) {
        try {
            const { id } = request.params;
            const { senha } = request.body;

            if (!usuario) {
                return response.status(404).send({
                    message: "Falha na operação de atualizar senha",
                    cause: "Usuário não encontrado"
                })
            }

            const usuario = await senha.update({
                senha
            }, {
                where: { id: id, senha: senha }
            })

            return response.status(200).send(usuario)
        } catch (error) {
            const status = error.message.status || 400
            const message = error.message.msg || error.message
            return response.status(parseInt(status)).send({
                message: "Falha na operação de atualizar senha",
                cause: message
            });
        }
    }
    // //Definir o endpoint para deletar usuário (deleção física)

    // async deleteOneUsuario(request, response) {
    //     try {
    //         const { id } = request.params;
    //         const usuario = await Usuario.findByPk(id);

    //         if (!usuario) {
    //             return response.status(404).send({
    //                 message: "Falha na operação de deletar usuário",
    //                 cause: "Usuário não encontrado"
    //             });
    //         }

    //         await Usuario.destroy({ where: { id }, force: true });

    //         return response.status(200).send({
    //             message: "Usuário deletado com sucesso"
    //         });
    //     } catch (error) {
    //       const status = error.message.status || 400
    //       const message = error.message.msg || error.message
    //       return response.status(parseInt(status)).send({
    //            message: "Falha na operação de deletar usuário",
    //            cause: message
    //        });
    //    }
    // }


    //Definir o endpoint para deletar usuário (deleção lógica)
    async deleteOneUsuario(require, response) {
        try {
            const { id } = require.params;

            const usuario = await Usuario.findByPk(id, { paranoid: true });
            if (!usuario) {
                return response.status(404).send({ error: 'Usuário não encontrado' });
            }

            if (usuario.status === 'ativo') {
                usuario.status = 'inativo';
                await usuario.destroy(); // Realiza o Soft Delete
            }

            return response.status(200).send(usuario);

        } catch (error) {
            const status = error.message.status || 400
            const message = error.message.msg || error.message
            return response.status(parseInt(status)).send({
                message: "Falha na operação de deletar usuário",
                cause: message
            });
        }
    }

    //Definir o endpoint para restaurar usuário (retauração lógica)
    async restoreOneUsuario(require, response) {
        try {
            const { id } = require.params;

            const usuario = await Usuario.findByPk(id, { paranoid: false });
            if (!usuario) {
                return response.status(404).send({ error: 'Usuário não encontrado' });
            }

            await usuario.restore(); // Realiza o Soft Delete
            usuario.status = 'ativo';
            await usuario.save();

            return response.status(200).send(usuario);

        } catch (error) {
            const status = error.message.status || 400
            const message = error.message.msg || error.message
            return response.status(parseInt(status)).send({
                message: "Falha na operação de restaurar usuário",
                cause: message
            });
        }
    }
}

module.exports = new UsuarioController()