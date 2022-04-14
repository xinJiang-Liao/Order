export interface AuthPasswordRequestDto {
  username: string;
  password: string;
}

export interface common {
  all?: boolean;
  username?: string;
}

export interface data {
  id?: number;
  code?: number;
  name: string;
  password: string;
  phone: string;
  post: string;
  resume: string;
  username: string;
}

export interface update {
  id: number;
  isSuper: boolean;
  data: data;
}
