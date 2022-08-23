import * as yup from "yup";
import "../assets/css/style.css";
import { LoginForm } from "../interfaces/LoginForm";

const loginSchema = yup
  .object<Record<keyof LoginForm, yup.AnySchema>>({
    email: yup.string().email("Formato invalido").required(""),
    password: yup.string().min(8, "La contraseña debe ser 8 digitos"),
  })
  .required();

export default loginSchema;
