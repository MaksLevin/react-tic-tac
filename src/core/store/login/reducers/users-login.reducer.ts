import { ActionLogin } from '../../../models/store-model';
import { initialState } from '../../initialState';
import { GetLoginUserSuccess, SetUserAvatarSuccess } from '../actions/users-login.action';

export function reducerLoginUser(state = initialState, action: ActionLogin) {
  switch (action.type) {
    case GetLoginUserSuccess:
      return { ...state, firstPlayer: action.firstPlayer, secondPlayer: action.secondPlayer };
    case SetUserAvatarSuccess:
      return { ...state, playerAvatar: action.playerAvatar };
    default:
      return state;
  }
}
