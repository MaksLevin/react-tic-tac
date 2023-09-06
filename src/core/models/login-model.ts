import { UsersData } from './user-model';

export interface FormValues {
  firstPlayer: string;
  secondPlayer: string;
}

export type LoginPropsType = {
  onUsersLogin(usersData: UsersData): any;
};
