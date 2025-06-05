import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import { createProduct } from "../../../services/productService";
import { CreateProductDTO } from "../../../models/Product";
import { toast } from "react-toastify";

const ProductForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateProductDTO>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = async (data: CreateProductDTO) => {
    try {
      const imageFile = (data.image as unknown as FileList)?.[0] ?? data.image;
      const payload = { ...data, image: imageFile };

      await createProduct(payload);
      toast.success("Produto cadastrado com sucesso!");
      reset();
      setImagePreview(null);
    } catch (error) {
      toast.error("Erro ao cadastrar produto");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  return (
    <>
      <Header />
      <main>
        <Styled.MainContainer>
          <Styled.FormContainer>
            <Styled.Title>Cadastrar Produto</Styled.Title>
            <Styled.Form onSubmit={handleSubmit(onSubmit)}>
              <Styled.Label>
                Nome
                <Styled.Input
                  type="text"
                  {...register("name", { required: "Campo obrigatório" })}
                />
                {errors.name && (
                  <Styled.Error>{errors.name.message}</Styled.Error>
                )}
              </Styled.Label>
              <Styled.Label>
                Descrição
                <Styled.TextArea
                  {...register("description", {
                    required: "Campo obrigatório",
                  })}
                  rows={3}
                />
                {errors.description && (
                  <Styled.Error>{errors.description.message}</Styled.Error>
                )}
              </Styled.Label>
              <Styled.Label>
                Categoria
                <Styled.Select
                  {...register("category", { required: "Campo obrigatório" })}
                >
                  <option value="">Selecione</option>
                  <option value="lotion">Loção</option>
                  <option value="parfum">Perfume</option>
                </Styled.Select>
                {errors.category && (
                  <Styled.Error>{errors.category.message}</Styled.Error>
                )}
              </Styled.Label>
              <Styled.Label>
                Preço
                <Styled.Input
                  type="number"
                  step="0.01"
                  {...register("price", {
                    required: "Campo obrigatório",
                    min: 0,
                  })}
                />
                {errors.price && (
                  <Styled.Error>{errors.price.message}</Styled.Error>
                )}
              </Styled.Label>
              <Styled.Label>
                Imagem
                <Styled.FileInput
                  type="file"
                  accept="image/*"
                  {...register("image", { required: "Campo obrigatório" })}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    register("image").onChange(e);
                    handleImageChange(e);
                  }}
                />
                {errors.image && (
                  <Styled.Error>{errors.image.message as string}</Styled.Error>
                )}
                {imagePreview && (
                  <Styled.ImagePreview
                    src={imagePreview}
                    alt="Prévia da imagem"
                  />
                )}
              </Styled.Label>
              <Styled.SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Salvando..." : "Cadastrar"}
              </Styled.SubmitButton>
            </Styled.Form>
          </Styled.FormContainer>
        </Styled.MainContainer>
      </main>
    </>
  );
};

export default ProductForm;
