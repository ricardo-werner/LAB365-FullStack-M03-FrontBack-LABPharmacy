import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import "../../components/User/AddUserCard.css";

const schema = yup
  .object({
    name: yup
      .string()
      .required("O nome é obrigatório"),
    sobrenome: yup
      .string()
      .required("O sobrenome é obrigatório"),
    genero: yup
      .string()
      .required("O gênero é obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    CPF: yup
      .string()
      .required("O CPF é obrigatório"),
    celular: yup
      .string()
      .required("O celular é obrigatório"),
    dataNascimento: yup
      .string(),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 digitos")
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmar a senha é obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  })
  .required();

function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(userData) {
    try {
      await axios.post('http://localhost:3333/api/createOneUsuario', userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(userData);
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Não foi possível cadastrar o usuário, por favor tente novamente.");
    };
  };

  const history = useNavigate();
  function handleGoBack() {
    history(-1);
  }

  // return (
  //   <form className="add-form-container" onSubmit={handleSubmit(onSubmit)}>
  //     <h2 className="add-titulo">Cadastro de Novo Usuário</h2>
  //     <div>
  //       <fieldset className="add-field-master">
  //         <label>
  //           Nome
  //           <input type="text" {...register("name", { required: true })} />
  //           <span>{errors.name?.message}</span>
  //         </label>
  //         <label>
  //           Email
  //           <input type="text" {...register("email")} />
  //           <span>{errors.email?.message}</span>
  //         </label>
  //         <label>
  //           Senha
  //           <input type="password" {...register("password")} />
  //           <span>{errors.password?.message}</span>
  //         </label>
  //         <label>
  //           Confirmar Senha
  //           <input type="password" {...register("confirmPassword")} />
  //           <span>{errors.confirmPassword?.message}</span>
  //         </label>
  //         <button className="btn-add-user" type="submit">Cadastrar-se</button>
  //       </fieldset>
  //     </div>
  //   </form>

  // );
  return (
    <div className="med-container mx-3 mt-1" >
      <h2>
        Cadastrar novo Usuário
      </h2>

      <form className="row g-3 mt-1 ps-4 pe-4 pt-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="col-md-6 col-lg-4 mt-3">
          <label htmlFor="name" className="form-med-label">
            Nome
          </label>
          <input type="tect"
            className="form-control"
            placeholder="Nome"
            {...register("name", { required: true })}
            aria-invalid={errors.nome ? "true" : "false"}
          />
          {errors.name?.type === 'required' && <p role="alert">Nome Obrigatório</p>}
        </fieldset>
        <fieldset className="col-md-6 col-lg-4 mt-3">
          <label htmlFor="sobrenome" className="form-med-label">
            Sobrenome
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Sobrenome"
            {...register("sobrenome", { required: "Sobrenome Obrigatório" })}
            aria-invalid={errors.sobrenome ? "true" : "false"}
          />
          {errors.sobrenome && <p role="alert">{errors.sobrenome?.message}</p>}
        </fieldset>
        <fieldset className="col-md-6 col-lg-4 mt-3">
          <label htmlFor="genero" className="form-med-label">
            Gênero
          </label>
          <div className="form-check-column">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              value="opcao1"
              {...register("feminino", { required: true })}
              aria-invalid={errors.feminino ? "true" : "false"}
            />
            <label htmlFor="exampleRadios1" className="form-check-label">Feminino</label>
          </div>
          <div className="form-check-column">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios2"
              value="opcao2"
              {...register("masculino", { required: true })}
              aria-invalid={errors.masculino ? "true" : "false"}
            />
            <label htmlFor="exampleRadios2" className="form-check-label">Masculino</label>
            {errors.genero?.type === 'required' && <p role="alert">Gênero Obrigatório</p>}
          </div>
        </fieldset>
        <fieldset className="col-md-6 col-lg-4 mt-3">
          <label htmlFor="CPF" className="form-med-label">
            CPF
          </label>
          <input
            type="CPF"
            className="form-control"
            placeholder="CPF"
            {...register("CPF", { required: "CPF Obrigatório" })}
            aria-invalid={errors.CPF ? "true" : "false"}
          />
          {errors.CPF && <p role="alert">{errors.CPF?.message}</p>}
        </fieldset>
        <fieldset className="col-md-6 col-lg-4 mt-3">
          <label htmlFor="email" className="form-med-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
            {...register("email", { required: "email Obrigatório" })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p role="alert">{errors.email?.message}</p>}
        </fieldset>
        <fieldset className="col-md-6 col-lg-4 mt-3">
          <label htmlFor="celular" className="form-med-label">
            Celular
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Celular"
            {...register("celular", { required: "Celular Obrigatório" })}
            aria-invalid={errors.celular ? "true" : "false"}
          />
          {errors.celular && <p role="alert">{errors.celular?.message}</p>}
        </fieldset>
        <fieldset className="col-md-6 col-lg-4 mt-3">
          <label htmlFor="dataNascimento" className="form-med-label">
            Data de Nascimento
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Data de Nascimento"
            {...register("dataNascimento")}
            aria-invalid={errors.dataNascimento ? "true" : "false"}
          />
          {errors.dataNascimento && <p role="alert">{errors.dataNascimento?.message}</p>}
        </fieldset>
        <fieldset className="col-md-6 col-lg-4 mt-3">
          <label htmlFor="password" className="form-med-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Senha ..."
            {...register("password", { required: "Senha Obrigatória" })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && <p role="alert">{errors.password?.message}</p>}
        </fieldset><fieldset className="col-md-6 col-lg-4 mt-3">
          <label htmlFor="confirmPassword" className="form-med-label">
            Confirmar Senha
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirmar Senha.."
            {...register("confirmPassword", { required: "Obrigatório" })}
            aria-invalid={errors.confirmPassword ? "true" : "false"}
          />
          {errors.confirmPassword && <p role="alert">{errors.confirmPassword?.message}</p>}
        </fieldset>
        <div className="col-12 mt-3">
          <button type="button" className="btn btn-danger ms-2" onClick={handleGoBack}>Voltar</button>
          <button type="submit" className="btn btn-primary ms-2">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;