export interface userResponseDTO {
  email: string;
}

export interface userRequestDTO extends userResponseDTO {
  email: string;
  password: string;
}

export interface userWithTokenDTO extends userResponseDTO {
  token: string;
}
