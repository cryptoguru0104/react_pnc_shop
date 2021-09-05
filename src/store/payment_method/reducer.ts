import { ActionTypes } from '../../utilities/enum'

const initialState = {
  loading: false,
  methods: [] as PaymentMethod[],
  allMethods: [
    {
      Id: 1,
      Title: 'PNC 1',
      Number: '****7321',
      ImageUrl: '/assets/images/pnc-logo.png',
      Birthday: new Date(),
    },
    {
      Id: 2,
      Title: 'PNC 2',
      Number: '****7322',
      ImageUrl: '/assets/images/pnc-logo.png',
      Birthday: new Date(),
    },
    {
      Id: 3,
      Title: 'PNC 3',
      Number: '****7323',
      ImageUrl: '/assets/images/pnc-logo.png',
      Birthday: new Date(),
    }
  ] as PaymentMethod[]
}

export const payment_method = (state = initialState, action: any) => {
  const { type } = action
  switch (type) {
    case ActionTypes.ADD_PAYMENT_METHOD: {
      return {
        ...state,
        methods: [ action.payload as PaymentMethod ]
      }
    }

    default:
      return state
  }
}

export const getLoading = (state: any): boolean => state.profile.loading

export const methods = (state: any): PaymentMethod[] => state.payment_method.methods

export const allMethods = (state: any): PaymentMethod[] => state.payment_method.allMethods