import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

type Props = {
  opgToken: string;
  onSuccess?: (data: any) => void;
  onPending?: (data: any) => void;
  onFailed?: (error: any) => void;
  onClose?: () => void;
};

export const OPGSnap = ({
  opgToken,
  onSuccess,
  onPending,
  onFailed,
  onClose,
}: Props) => {
  const [visible, setVisible] = useState(true);

  const paymentUrl = `http://43.157.203.153`; // nanti: /snap/${opgToken}

  const closeModal = () => {
    setVisible(false);
    onClose?.();
  };

  const handleNavigation = (event: any) => {
    const { url } = event;

    if (url.includes('status=success')) {
      onSuccess?.({ url });
      closeModal();
      return;
    }

    if (url.includes('status=pending')) {
      onPending?.({ url });
      closeModal();
      return;
    }

    if (url.includes('status=failed')) {
      onFailed?.({ url });
      closeModal();
      return;
    }

    if (url.includes('action=close')) {
      closeModal();
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={closeModal} // Android back button
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* WebView */}
        <WebView
          source={{ uri: paymentUrl }}
          onNavigationStateChange={handleNavigation}
          startInLoadingState
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  closeButton: {
    padding: 8,
  },
  closeText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
