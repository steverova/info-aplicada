import * as yup from "yup";
import "../assets/css/style.css";
import { UserForm } from "../interfaces/UserForm";

const userSchema = yup
  .object<Record<keyof UserForm, yup.AnySchema>>({
    id: yup.string().nullable(),
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email("Formato invalido").required(""),
    password: yup
      .string()
      .min(8, "La contraseña debe ser 8 digitos")
      .oneOf([yup.ref("password_confirm")], "La Contraseña no coincide"),
    password_confirm: yup
      .string()
      .min(8, "La contraseña debe ser 8 digitos")
      .oneOf([yup.ref("password")], "La Contraseña no coincide"),
  })
  .required();

export default userSchema;
