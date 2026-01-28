# opg-react-native-sdk

SDK resmi React Native untuk **Ojire Payment Gateway (OPG)**.  
Memudahkan integrasi pembayaran OPG menggunakan WebView dalam aplikasi React Native (Android & iOS).


## Installation

Menggunakan npm:
```sh
npm install opg-react-native-sdk
```

atau yarn:
```sh
yarn add opg-react-native-sdk
```

### Peer Dependencies
Pastikan dependency berikut sudah terpasang:
```sh
yarn add react-native-webview
```

---

## Usage

### Basic Example

```tsx
import { OPGSnap } from 'opg-react-native-sdk';

export default function App() {
  return (
    <OPGSnap
      opgToken="tok_abc123"
      onSuccess={(result) => console.log('Success', result)}
      onPending={(result) => console.log('Pending', result)}
      onFailed={(error) => console.log('Failed', error)}
      onClose={() => console.log('Closed')}
    />
  );
}
```

---

## Props

| Prop Name   | Type                     | Required | Description |
|------------|--------------------------|----------|-------------|
| opgToken   | string                   | ✅       | Token pembayaran dari backend Ojire |
| onSuccess  | (data: any) => void      | ❌       | Dipanggil ketika pembayaran berhasil |
| onPending  | (data: any) => void      | ❌       | Dipanggil ketika pembayaran pending |
| onFailed   | (error: any) => void     | ❌       | Dipanggil ketika pembayaran gagal |
| onClose    | () => void               | ❌       | Dipanggil ketika user menutup modal |

---

## Payment Flow

1. Aplikasi memanggil backend untuk mendapatkan `opgToken`
2. `OPGSnap` membuka halaman pembayaran OPG
3. User menyelesaikan pembayaran
4. SDK mengembalikan status melalui callback
5. Modal otomatis atau manual ditutup

---

## Notes

- Modal tampil **fullscreen**
- Close button tersedia di header
- SDK tidak menangani networking backend
- Disarankan memverifikasi status pembayaran di backend

## License

MIT © Ojire

---

Made with ❤️ using create-react-native-library
