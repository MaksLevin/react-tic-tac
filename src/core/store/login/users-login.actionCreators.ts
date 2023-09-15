import { ActionLogin } from '../../models/store-model';
import { UsersData } from '../../models/user-model';
import {
  FetchUserAvatarSuccess,
  GetLoginUserSuccess,
  PostUserAvatarSuccess,
  SetUserAvatarSuccess,
} from './users-login.action';

export function getLoginUserSuccess(value: UsersData): ActionLogin {
  return {
    type: GetLoginUserSuccess,
    firstPlayer: value.firstPlayer,
    secondPlayer: value.secondPlayer,
  };
}

export function postUserAvatarSuccess(value: string) {
  return {
    type: PostUserAvatarSuccess,
    playerAvatar: value,
  };
}

export function fetchUserAvatarSuccess() {
  return {
    type: FetchUserAvatarSuccess,
  };
}

export function setUserAvatarSuccess(value: string) {
  return {
    type: SetUserAvatarSuccess,
    playerAvatar: value,
  };
}
