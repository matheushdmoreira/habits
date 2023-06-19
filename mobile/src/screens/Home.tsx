import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { Alert, ScrollView, View } from 'react-native'

import { api } from '../lib/axios'

import { generateDatesFromYearBeginning } from '../utils/generateDatesFromYearBeginning'

import dayjs from 'dayjs'
import { DAY_SIZE, HabitDay } from '../components/HabitDay'
import { Header } from '../components/Header'
import { Loading } from '../components/Loading'
import { WeekDay } from '../components/WeekDay'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDatesSizes = 18 * 5
const amountOfDaysToFill = minimumSummaryDatesSizes - summaryDates.length

type SummaryProps = Array<{
  id: string
  date: string
  amount: number
  completed: number
}>

export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [summary, setSummary] = useState<SummaryProps>([])

  const { navigate } = useNavigation()

  function handleOpenHabitDay(date: string) {
    navigate('habit', { date })
  }

  async function fetchHabits() {
    try {
      setIsLoading(true)

      const response = await api.get('/summary')

      setSummary(response.data)
    } catch (error) {
      Alert.alert('Ops', 'Não foi possível carregar o sumário de hábitos.')
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchHabits()
    }, []),
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row mt-4 mb-2">
          {weekDays.map((day, index) => (
            <WeekDay key={`${day}-${index}`} day={day} />
          ))}
        </View>

        <View className="flex-row flex-wrap">
          {summaryDates.map((date) => {
            const dayWithHabits = summary.find((day) => {
              return dayjs(date).isSame(day.date, 'day')
            })

            return (
              <HabitDay
                key={date.toString()}
                date={date}
                amount={dayWithHabits?.amount}
                completed={dayWithHabits?.completed}
                onPress={() => handleOpenHabitDay(date.toISOString())}
              />
            )
          })}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <View
                key={index}
                className="bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40"
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  )
}
