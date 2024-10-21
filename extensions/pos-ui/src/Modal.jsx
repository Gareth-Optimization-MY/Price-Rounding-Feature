import React from 'react'

import { Text, Screen, ScrollView, Navigator, reactExtension, useApi, useCartSubscription } from '@shopify/ui-extensions-react/point-of-sale'

const SmartGridTile = () =>{
  const cart = useCartSubscription();

  return (
    <Navigator>
      <Screen name="HelloWorld" title="Hello World!">
        <ScrollView>
          <Text>Welcome to the extension!</Text>
          <Text>Number of Items in Cart: {cart.lineItems.length}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  )
}

export default reactExtension('pos.home.modal.render', () => <SmartGridTile />);