import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { Home, MessageSquare, User } from "lucide-react-native";


const TabIcon = ({
  focused,
  Icon,
  title,
}: {
  focused: boolean;
  Icon: any;
  title: string;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    <Icon
    size={24} color={focused ? "#0061FF" : "#B1B1B1"}
    />
    <Text
      className={`${
        focused
          ? "text-blue font-bold text-xs"
          : "text-gray-600"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} Icon={Home} title="Trang chủ" />
          ),
        }}
      />
            <Tabs.Screen
        name="forum"
        options={{
          title: 'Forum',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} Icon={MessageSquare} title="Diễn đàn" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} Icon={User} title="Tài khoản" />
          ),
        }}
      />
    </Tabs>
  );
}
