export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export type UserLoginDto = {
  email: string;
  password: string;
}


export type UserRegisterDto = {
  name: string;
  email: string;
  password: string;
  avatar: File;
  //role
}

export type UserUpdateDto = {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: File;

}
