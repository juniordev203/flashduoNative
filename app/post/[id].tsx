import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const PostDetail = () => {
  const { id } = useLocalSearchParams()
  const router = useRouter()
  
  // Mock data - sau này sẽ fetch từ API dựa vào id
  const post = {
    id: '1',
    author: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    title: 'Hỏi về toán cao cấp',
    content: 'Ai có thể giải thích cho mình về đạo hàm riêng phần không?',
    comments: [
      {
        id: '1',
        author: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        content: 'Mình có thể giúp bạn. Đạo hàm riêng phần là...',
        likes: 3,
        time: '1h'
      }
    ],
    likes: 12,
    time: '2h'
  }

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-row items-center p-4 border-b border-gray-200'>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <Text className='ml-4 text-lg font-semibold'>Bài viết</Text>
      </View>

      <ScrollView>
        {/* Post Content */}
        <View className='p-4 border-b border-gray-200'>
          <View className='flex-row'>
            <Image 
              source={{ uri: post.avatar }}
              className='w-10 h-10 rounded-full'
            />
            <View className='flex-1 ml-3'>
              <View className='flex-row items-center justify-between'>
                <Text className='font-semibold'>{post.author}</Text>
                <Text className='text-gray-500'>{post.time}</Text>
              </View>
              <Text className='font-semibold mt-2'>{post.title}</Text>
              <Text className='text-gray-600 mt-1'>{post.content}</Text>
            </View>
          </View>
        </View>

        {/* Comments Section */}
        <View className='p-4'>
          <Text className='font-semibold mb-4'>Bình luận</Text>
          {post.comments.map(comment => (
            <View key={comment.id} className='flex-row mb-4'>
              <Image 
                source={{ uri: comment.avatar }}
                className='w-8 h-8 rounded-full'
              />
              <View className='flex-1 ml-3'>
                <View className='flex-row items-center justify-between'>
                  <Text className='font-semibold'>{comment.author}</Text>
                  <Text className='text-gray-500'>{comment.time}</Text>
                </View>
                <Text className='text-gray-600 mt-1'>{comment.content}</Text>
                <View className='flex-row items-center mt-2'>
                  <Ionicons name="heart-outline" size={16} />
                  <Text className='ml-1 text-gray-600'>{comment.likes}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Comment Input */}
      <View className='p-4 border-t border-gray-200'>
        <View className='flex-row items-center bg-gray-100 rounded-full px-4 py-2'>
          <Ionicons name="chatbubble-outline" size={20} color="gray" />
          <Text className='ml-2 text-gray-500'>Viết bình luận...</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostDetail