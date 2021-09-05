import { ActionTypes } from '../../utilities/enum'

const initialState = {
  loading: false,
  user: undefined as (User | undefined),
}

export const profile = (state = initialState, action: any) => {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.GET_USER_BY_TOKEN: {
      return {
        ...state,
        user: payload as User,
      }
    }

    case ActionTypes.SET_PROFILE_LOADING: {
      return {
        ...state,
        loading: payload,
      }
    }

    default:
      return state
  }
}

export const getLoading = (state: any) => state.profile.loading

export const getProfile = (state: any) => state.profile.user