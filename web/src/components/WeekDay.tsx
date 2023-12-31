interface WeekDayProps {
  day: string
}

export function WeekDay({ day }: WeekDayProps) {
  return (
    <div className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
      {day}
    </div>
  )
}
