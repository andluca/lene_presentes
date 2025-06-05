import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import { LoginRequest } from "../../../models/Auth";
import * as Styled from "./styles";
import { toast } from "react-toastify";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { signIn, isAuthenticated, signOut } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<LoginRequest>();
  const [showPassword, setShowPassword] = useState<Boolean>(false);

const handleSignOut = () => {
    signOut();
    toast.info("Você saiu da sua conta.");
    onClose();
    reset();
};

  const onSubmit = async (data: LoginRequest) => {
    try {
      await signIn(data.email, data.password);
      toast.success("Login realizado com sucesso!");
      onClose();
      reset();
    } catch (error) {
      setError("password", {
        message: error instanceof Error ? error.message : "Erro ao fazer login",
      });
      toast.error("Usuário ou senha inválidos!");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {isAuthenticated ? (
        <>
          <Styled.Title>Você já está logado!</Styled.Title>
          <Styled.Button onClick={handleSignOut}>Sair</Styled.Button>
        </>
      ) : (
        <>
          <Styled.Title>Login</Styled.Title>
          <Styled.Form onSubmit={handleSubmit(onSubmit)}>
            <Styled.Label>
              <div
                style={{
                  justifyContent: "flex-start",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                E-mail
              </div>
              <Styled.Input
                type="email"
                {...register("email", { required: "Campo obrigatório" })}
                autoComplete="username"
              />
              {errors.email && (
                <Styled.Error>{errors.email.message}</Styled.Error>
              )}
            </Styled.Label>
            <Styled.Label>
              <div
                style={{
                  justifyContent: "flex-start",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                Senha
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Styled.Input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: "Campo obrigatório" })}
                  autoComplete="current-password"
                  style={{ paddingRight: 40 }}
                />
                <Styled.TogglePasswordButton
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? "🙈" : "👁️"}
                </Styled.TogglePasswordButton>
              </div>
              {errors.password && (
                <Styled.Error>{errors.password.message}</Styled.Error>
              )}
            </Styled.Label>
            <Styled.SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Entrando..." : "Entrar"}
            </Styled.SubmitButton>
          </Styled.Form>
        </>
      )}
    </Modal>
  );
};

export default LoginModal;
