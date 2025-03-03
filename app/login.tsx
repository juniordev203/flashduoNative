import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Device from 'expo-device';
import { useState } from 'react';

export default function LoginScreen() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleDeviceLogin = async () => {
    try {
      // Lấy deviceId
      const deviceId = Device.deviceName || 'unknown-device'; // Fallback nếu không lấy được
      console.log('Device ID:', deviceId);

      // Gọi API để tạo tài khoản anonymous
      const response = await fetch('http://localhost:5187/api/auth/device-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ deviceId }),
      });
      // debug
      // Đọc response một lần dưới dạng text để debug
      const responseText = await response.text();
      console.log('Response status:', response.status);
      console.log('Response text:', responseText);

      // Kiểm tra trạng thái trước khi parse JSON
      if (!response.ok) {
        setError(responseText || 'Đăng nhập thất bại');
        return;
      }

      // Lưu token vào AsyncStorage
      const data = JSON.parse(responseText);
      await AsyncStorage.setItem('userToken', data.token);
      router.replace('/(tabs)');
    } catch (error) {
      console.log('Device login error:', error);
      setError('Đã xảy ra lỗi, vui lòng thử lại');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Button
        title="Đăng nhập bằng thiết bị"
        onPress={handleDeviceLogin}
        color="#007AFF"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginTop: 15,
  },
});