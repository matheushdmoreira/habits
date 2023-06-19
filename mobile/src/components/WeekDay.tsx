import { Text, View } from 'react-native'

import { DAY_SIZE } from './HabitDay'

interface WeekDayProps {
  day: string
}

export function WeekDay({ day }: WeekDayProps) {
  return (
    <View
      className="flex items-center justify-center mx-1"
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
    >
      <Text className="text-zinc-400 text-xl font-bold">{day}</Text>
    </View>
  )
}
