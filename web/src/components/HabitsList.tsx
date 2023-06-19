/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Check } from '@phosphor-icons/react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { useEffect, useState } from 'react'

import dayjs from 'dayjs'
import { api } from '../lib/axios'

interface HabitsListProps {
  date: Date
  onChangedCompleted: (completed: number) => void
}

interface HabitsInfoProps {
  possibleHabits: Array<{
    id: string
    title: string
    created_at: string
  }>
  completedHabits: string[]
}

export function HabitsList({ date, onChangedCompleted }: HabitsListProps) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfoProps>()

  const isDateInPast = dayjs(date).endOf('day').isBefore(new Date())

  async function handleToogleHabit(habitId: string) {
    await api.patch(`/habits/${habitId}/toogle`)

    const isHabitAlreadyCompleted =
      habitsInfo!.completedHabits.includes(habitId)

    let completedHabits: string[] = []

    if (isHabitAlreadyCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(
        (id) => id !== habitId,
      )
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId]
    }

    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits,
    })

    onChangedCompleted(completedHabits.length)
  }

  async function fetchHabitsDayList() {
    const response = await api.get('/day', {
      params: {
        date: date.toISOString(),
      },
    })

    setHabitsInfo(response.data)
  }

  useEffect(() => {
    fetchHabitsDayList()
  }, [])

  return (
    <div className="mt-6 flex flex-col gap-3">
      {habitsInfo?.possibleHabits.map((habit) => {
        return (
          <Checkbox.Root
            key={habit.id}
            checked={habitsInfo.completedHabits.includes(habit.id)}
            disabled={isDateInPast}
            className="flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed"
            onCheckedChange={() => handleToogleHabit(habit.id)}
          >
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:ring-2 group-focus:ring-violet-700 group-focus:ring-offset-2 group-focus:ring-offset-background">
              <Checkbox.Indicator>
                <Check size={20} className="text-white" />
              </Checkbox.Indicator>
            </div>

            <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
              {habit.title}
            </span>
          </Checkbox.Root>
        )
      })}
    </div>
  )
}
