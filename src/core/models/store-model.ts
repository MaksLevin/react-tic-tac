import { UsersData } from './user-model';

export type StoreData = {
  reducerLoginUser: UsersData;
};

export interface ActionLogin extends UsersData {
  type: string;
}
