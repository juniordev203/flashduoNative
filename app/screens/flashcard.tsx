import { Link } from 'expo-router';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
export default function FlashcardScreen() {
    return (
        <SafeAreaView className="h-screen bg-white">
            <ScrollView className="flex-1 p-4">
                <View className="flex-row items-center mb-4 p-4">
                    <Link href="/">Back</Link>
                    <Text>Flashcard</Text>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
