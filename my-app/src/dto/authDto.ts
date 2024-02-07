export interface userResponseDTO {
  email: string;
}

export interface userRequestDTO extends userResponseDTO {
  email: string;
  password: string;
}
