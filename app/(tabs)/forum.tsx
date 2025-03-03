import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

interface Post {
  id: string
  author: string
  avatar: string
  title: string
  content: string
  comments: number
  likes: number
  time: string
}
const posts : Post[] = [
  {
    id: '1',
    author: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    title: 'Hỏi về toán cao cấp',
    content: 'Ai có thể giải thích cho mình về đạo hàm riêng phần không?',
    comments: 5,
    likes: 12,
    time: '2h'
  },
  {
    id: '2',
    author: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    title: 'Lập trình Python cơ bản',
    content: 'Mình đang học Python, ai có tài liệu tốt chia sẻ với mình được không?',
    comments: 3,
    likes: 8,
    time: '4h'
  },
]
interface PostItemProps {
  post: Post
  onPress: () => void
}

const PostItem: React.FC<PostItemProps> = ({ post, onPress }) => (
  <Pressable 
    className='p-4 border-b border-gray-200'
    onPress={onPress}
  >
    <View className='flex-row'>
      <Image
        source={{ uri: post.avatar }}
        className='w-10 h-10 rounded-full'
      />
      <View className='flex-1 ml-3'>
        <View className='flex-row items-center justify-between'>
          <Text className='font-semibold'>{post.author}</Text>
          <View className='flex-row items-center'>
            <Text className='text-gray-500'>{post.time}</Text>
            <Ionicons name="ellipsis-horizontal" size={16} className='ml-2' />
          </View>
        </View>

        <Text className='font-semibold mt-2'>{post.title}</Text>
        <Text className='text-gray-600 mt-1'>{post.content}</Text>

        <View className='flex-row gap-3 items-center mt-3 space-x-4'>
          <View className='flex-row items-center'>
            <Ionicons name="heart-outline" size={20} />
            <Text className='ml-1 text-gray-600'>{post.likes}</Text>
          </View>
          <View className='flex-row items-center'>
            <Ionicons name="chatbubble-outline" size={20} />
            <Text className='ml-1 text-gray-600'>{post.comments}</Text>
          </View>
          <Ionicons name="share-social-outline" size={20} />
        </View>
      </View>
    </View>
  </Pressable>
)

const ForumScreen = () => {
  const router = useRouter()

  const handleNewPost = () => {
    // Xử lý tạo bài viết mới
    router.push('/post/new')
  }

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-row items-center justify-between p-4 border-b border-gray-200'>
        <Text className='text-2xl font-bold'>Flashduo Media</Text>
        <Pressable onPress={handleNewPost}>
          <Ionicons name="add" size={24} />
        </Pressable>
      </View>

      <ScrollView>
        {posts.map(post => (
          <PostItem
            key={post.id}
            post={post}
            onPress={() => router.push(`/post/${post.id}`)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForumScreen