import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'

export function HabitEmpit() {
  const { navigate } = useNavigation()
  return (
    <Text className="text-zinc-400 text-base">
      Você ainda não está monitorando nenhum hábito{' '}
      <Text
        className="text-violet-400 text-base underline active:via-violet-500"
        onPress={() => navigate('new')}
      >
        comece criando um.
      </Text>
    </Text>
  )
}
