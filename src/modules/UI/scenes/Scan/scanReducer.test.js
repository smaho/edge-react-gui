/* eslint-disable flowtype/require-valid-file-annotation */

/* globals test expect */

import { scan as scanReducer } from './reducer.js'

test('initialState', () => {
  const expected = {
    addressModalVisible: false,
    scanEnabled: false,
    scanToWalletListModalVisibility: false,
    selectedWalletListModalVisibility: false,
    torchEnabled: false,
    legacyAddressModal: {
      isActive: false
    },
    privateKeyModal: {
      primaryModal: {
        isActive: false
      },
      secondaryModal: {
        isActive: false
      },
      error: null,
      isSweeping: false
    },
    parsedUri: null
  }
  const actual = scanReducer(undefined, {})

  expect(actual).toEqual(expected)
})
