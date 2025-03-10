import { Bell, Edit, HelpCircle, LogOut, Settings2, SunMoon, User, Wallet } from 'lucide-react-native';
import { Divider } from "@rneui/base";
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
// import { updateUserName } from '../api/auth';

interface User {
  deviceId: string;
  name: string;
}


export default function ProfileScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [newName, setNewName] = useState<string>('');

  useEffect(() => {
    const loadUser = async () => {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData) as User);
      }
      };
      loadUser();
  }, []);
  // const handleUpdateName = async () => {
  //   if (newName.trim()) {
  //     const updateUser = await updateUserName(newName);
  //     if (updateUser) { 
  //       setUser(updateUser);
  //       setNewName('');
  //       await AsyncStorage.setItem("user", JSON.stringify(updateUser));
  //     }
  //   }
  // }
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      router.replace('/login');
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };
  interface SettingsItemProp {
    Icon: any;
    title: string;
    onPress?: () => void;
    textStyle?: string;
    showArrow?: boolean;
  }
  const SettingsItem = ({
    Icon,
    title,
    onPress,
    textStyle,
  }: SettingsItemProp) => (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row items-center justify-between py-3"
    >
      <View className="flex flex-row items-center gap-3">
        <Icon color="#000"/>
        <Text className={`text-lg font-medium text-gray-900 ${textStyle}`}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center gap-2">
            <User color={"#000"}/>
            <Text className="text-lg font-bold">Cá nhân</Text>
          </View>
          <Bell color={"#000"}/>
        </View>

        <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image source={require("@/assets/images/avatar.jpg")}
            style={{ width: 100, height: 100, borderRadius: 50}}/>
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Edit color={"#000"}/>
            </TouchableOpacity>
            <Text className='font-bold text-lg mt-2'>Junior</Text>
            {/* {user && <Text className="text-2xl font-bold mt-2">{user.name}</Text>}
            <TextInput className="border p-2 rounded-lg mt-4 w-64"
            placeholder="Nhập tên mới" value={newName} onChangeText={setNewName}/> */}
          </View>
        </View>
        <View className="flex flex-col mt-10">
          <SettingsItem Icon={SunMoon} title="Giao diện tối" />
          <SettingsItem Icon={Wallet} title="Thanh toán" />
        </View>
        <Divider color="#000" width={1}/>
        <View className="flex flex-col pt-5 border-blue-200">
          <SettingsItem Icon={Settings2} title="Cài đặt" />
          <SettingsItem Icon={HelpCircle} title="Trung tâm trợ giúp" />
        </View>
        <Divider color="#000" width={1}/>
        <View className="flex flex-col pt-5 border-blue-200">
          <SettingsItem
            Icon={LogOut}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
