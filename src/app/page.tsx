"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "numeric",
  year: "numeric",
  month: "long",
};

const hourOptions: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
};

export default function Home() {
  const router = useRouter();

  const [date, setDate] = useState<Date>(new Date());

  const dateFormat = new Intl.DateTimeFormat(undefined, dateOptions);
  const hourFormat = new Intl.DateTimeFormat(undefined, hourOptions);
  const dateString = dateFormat.format(date);
  const timeString = hourFormat.format(date);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="font-mono relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="flex flex-col items-end gap-2">
          <div>{dateString}</div>
          <div>{timeString}</div>
        </div>
      </div>
    </main>
  )
}
