import { Feather } from '@expo/vector-icons'
import clsx from 'clsx'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated'

import colors from 'tailwindcss/colors'

interface Props extends TouchableOpacityProps {
  title: string
  checked?: boolean
  semiBold?: boolean
}

export function Checkbox({
  title,
  checked = false,
  semiBold = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      {checked ? (
        <Animated.View
          className="w-8 h-8 bg-green-500 rounded-lg items-center justify-center"
          entering={ZoomIn}
          exiting={ZoomOut}
        >
          <Feather name="check" size={20} color={colors.white} />
        </Animated.View>
      ) : (
        <View className="w-8 h-8 bg-zinc-900 rounded-lg" />
      )}

      <Text
        className={clsx('text-white ml-3', {
          'font-semibold': semiBold,
        })}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
