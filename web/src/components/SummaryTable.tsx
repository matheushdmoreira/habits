import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { generateDatesFromYearBeginning } from '../utils/generateDatesFromYearBeginning'

import { api } from '../lib/axios'

import { HabitDay } from './HabitDay'
import { WeekDay } from './WeekDay'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDatesSizes = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSizes - summaryDates.length

type SummaryProps = Array<{
  id: string
  date: string
  amount: number
  completed: number
}>

export function SummaryTable() {
  const [summary, setSummary] = useState<SummaryProps>([])

  async function fetchSummary() {
    const response = await api.get('/summary')

    setSummary(response.data)
  }

  useEffect(() => {
    fetchSummary()
  }, [])

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, index) => (
          <WeekDay key={`${day}-${index}`} day={day} />
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summary.length > 0 &&
          summaryDates.map((date) => {
            const dayInSummary = summary.find((day) => {
              return dayjs(date).isSame(day.date, 'day')
            })

            return (
              <HabitDay
                key={date.toString()}
                date={date}
                amount={dayInSummary?.amount}
                defaultCompleted={dayInSummary?.completed}
              />
            )
          })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          ))}
      </div>
    </div>
  )
}
