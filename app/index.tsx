import { Colors } from '@/constants/Colors'
import { StyleSheet, Text, View } from 'react-native'

export default function PlayerPage() {
  return (
    <View style={s.container}>
      <Text style={{ color: Colors.dark.text }}>PLAYER</Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
