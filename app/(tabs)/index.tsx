import { Link } from "expo-router";
import { View, Text, SafeAreaView, TouchableOpacity, Image, StatusBar, ScrollView, TextInput } from "react-native";
import React from "react";

import { Bell, Book, ChevronRight, Divide, Globe, Headphones, Icon, Mic, Phone, Search } from "lucide-react-native";


const HomeScreen = () => {
  return (
    <SafeAreaView className="h-screen bg-white">
      <StatusBar barStyle="dark-content" />
      <ScrollView className="flex-1 p-4">
        {/* Header */}
        <View className="flex-row items-center mb-4">
          <Image
            source={require("@/assets/images/avatar.jpg")}
            className="w-10 h-10 rounded-full mr-2"
          />
          <View>
            <Text className="text-sm font-light text-gray-500">Hi, Guy!</Text>
            <Text className="text-xl font-bold text-gray-900">Junior203</Text>
          </View>
          <View className="ml-auto">
            <Bell size={20} color="#3B82F6" />
          </View>
        </View>

        {/* Search */}
        <View className="flex-row items-center border border-gray-200 rounded-lg px-3 py-3 mb-4">
          <Search color="black" size={22} />
          <TextInput
            className="flex-1 ml-2 text-base"
            placeholder="Tìm kiếm khóa học của bạn..."
          />
        </View>
        {/* <View className="pt-10"> */}
        <Text className="text-lg font-semibold mb-2">Học cùng <Text className="text-blue font-extrabold">Flashduo</Text></Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="h-56 p-2 mb-4">
            <View className="flex-row gap-5 h-32">
              <TouchableOpacity className="flex-1 bg-green-200 p-2 rounded-lg w-56 h-52 shadow">
                <View className="flex-1 flex-col gap-1 p-2 rounded-lg">
                  <Text className="text-2xl font-bold">Từ vựng với Flashcard</Text>
                  <Text className="text-sm text-gray-500">28 Lessons</Text>
                  <Globe size={20} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-yellow-200 p-2 rounded-lg w-56 h-52 shadow">
                <View className="flex-1 flex-col gap-1 p-2 rounded-lg">
                  <Text className="text-2xl font-bold">Luyện đọc cùng AI</Text>
                  <Text className="text-sm text-gray-500">28 Lessons</Text>
                  <Mic size={20} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-violet-200 p-2 rounded-lg w-56 h-52 shadow">
                <View className="flex-1 flex-col gap-1 bg-blue-100 p-2 rounded-lg">
                  <Text className="text-2xl font-bold">TOEIC READING</Text>
                  <Text className="text-sm text-gray-500">28 Lessons</Text>
                  <Book size={20} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-indigo-300 p-2 rounded-lg w-56 h-52 shadow">
                <View className="flex-1 flex-col gap-1 bg-blue-100 p-2 rounded-lg">
                  <Text className="text-2xl font-bold">TOEIC LISTENING</Text>
                  <Text className="text-sm text-gray-500">28 Lessons</Text>
                  <Headphones size={20} />
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        
        {/* All Courses */}
        <View className="mb-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-semibold">Tất cả khóa học</Text>
            <Text className="text-xs text-blue-500 underline decoration-gray-500">Xem thêm</Text>
          </View>
          <View className="flex-row flex-wrap gap-2">
            <TouchableOpacity className="bg-white border border-gray-200 rounded-full px-4 py-2">
              <Text className="text-sm">Luyện nói TOEIC</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-green-100 border border-green-500 rounded-full px-4 py-2">
              <Text className="text-sm text-green-500">Luyện nghe TOEIC</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white border border-gray-200 rounded-full px-4 py-2">
              <Text className="text-sm">TOEIC 800+</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-yellow-100 border border-yellow-500 rounded-full px-4 py-2">
              <Text className="text-sm text-yellow-500">IELTS</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
      {/* Chat Support */}
      <TouchableOpacity
        className="absolute bottom-28 mx-4 bg-white p-4 rounded-full flex-row items-center shadow"
        style={{
          left: 0,
          right: 0,
          elevation: 5, // cho Android
          shadowColor: '#000', // cho iOS
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Image
          source={require("@/assets/images/help-desk.png")}
          className="w-10 h-10 rounded-full mr-2"
        />
        <View className="flex-1">
          <Text className="text-lg font-semibold">Hỏi với AI</Text>
          <Text className="text-sm text-gray-500">Bắt đầu cuộc trò chuyện ngay !</Text>
        </View>
        <ChevronRight size={16} className="text-gray-500" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Helper function to render course cards
// const renderCourseCard = (title, author, files, duration) => (
//   <View style={{ flex: 1, backgroundColor: 'white', padding: 16, borderRadius: 8 }}>
//     <Image
//       source={{ uri: 'https://storage.googleapis.com/a1aa/image/gNhkTRXg3-pqgekgWqhU7b9ehkLlxilzFd3hpxVbUD4.jpg' }}
//       style={{ width: '100%', height: 96, borderRadius: 8, marginBottom: 8 }}
//     />
//     <Text style={{ fontSize: 18, fontWeight: '600' }}>{title}</Text>
//     <Text style={{ fontSize: 14, color: '#6B7280' }}>By {author}</Text>
//     <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
//       {/* <Icon name="file-alt" size={14} color="#6B7280" style={{ marginRight: 4 }} /> */}
//       <Text style={{ fontSize: 14, color: '#6B7280' }}>{files}</Text>
//       {/* <Icon name="clock" size={14} color="#6B7280" style={{ marginLeft: 16, marginRight: 4 }} /> */}
//       <Text style={{ fontSize: 14, color: '#6B7280' }}>{duration}</Text>
//     </View>
//   </View>
// );

// Helper function to render premium course cards
// const renderPremiumCard = (title, author, duration, lessons) => (
//   <View style={{ flex: 1, backgroundColor: 'white', padding: 16, borderRadius: 8 }}>
//     <Image
//       source={{ uri: 'https://storage.googleapis.com/a1aa/image/dd7adGdyf29-mRQBYlFqWR7jX8VQg7YXx-cMG_dBe8E.jpg' }}
//       style={{ width: '100%', height: 96, borderRadius: 8, marginBottom: 8 }}
//     />
//     <Text style={{ fontSize: 18, fontWeight: '600' }}>{title}</Text>
//     <Text style={{ fontSize: 14, color: '#6B7280' }}>By {author}</Text>
//     <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
//       <Icon name="clock" size={14} color="#6B7280" style={{ marginRight: 4 }} />
//       <Text style={{ fontSize: 14, color: '#6B7280' }}>{duration}</Text>
//       <Icon name="book" size={14} color="#6B7280" style={{ marginLeft: 16, marginRight: 4 }} />
//       <Text style={{ fontSize: 14, color: '#6B7280' }}>{lessons}</Text>
//     </View>
//   </View>
// );

// Helper function to render navigation items
// const renderNavItem = (iconName, label, isActive) => (
//   <TouchableOpacity style={{ alignItems: 'center' }}>
//     <Icon name={iconName} size={24} color={isActive ? '#3B82F6' : '#6B7280'} />
//     <Text style={{ fontSize: 12, color: isActive ? '#3B82F6' : '#6B7280', marginTop: 4 }}>{label}</Text>
//   </TouchableOpacity>
// );
export default HomeScreen;