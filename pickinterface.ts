// Usando pick para reutilizar algumas props da interface criada
interface Credentials {
    name: string;
    email: string;
    password: string;
  }
  
  type LoginUser = Pick<Credentials, 'email' | 'password'>;
  type ResetPassword = Pick<Credentials, 'email'>;
