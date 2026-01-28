import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { OPGSnap } from 'opg-react-native-sdk';

export default function App() {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button title="Pay with OPG" onPress={() => setShowPayment(true)} />

      {showPayment && (
        <OPGSnap
          opgToken="tok_abc123"
          onSuccess={(result) => {
            console.log('Payment success', result);
            setShowPayment(false);
          }}
          onPending={(result) => {
            console.log('Payment pending', result);
          }}
          onFailed={(error) => {
            console.log('Payment failed', error);
            setShowPayment(false);
          }}
          onClose={() => {
            console.log('Payment closed');
            setShowPayment(false);
          }}
        />
      )}
    </View>
  );
}
