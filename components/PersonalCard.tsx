'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

export default function PersonalCard(props: IPersonalCardProps) {
  const [unfoldCard, setUnfoldCard] = useState<boolean>(false)
  const [detail, setDetail] = useState<IPersonalDetail>()
  const getDetail = useMemo(() => {
    setTimeout(() => {
      setDetail({
        isRecord: false,
        record: [
          {
            timestamp: Date.now(),
            weight: 110
          }
        ]
      })
      return () => {}
    }, 200)
  }, [])
  return (
    <div className="rounded-3xl bg-amber-900 w-full overflow-hidden shadow-2xl shadow-amber-900" onClick={() => setUnfoldCard(true)}>
      <div className="flex gap-x-1">
        <Image
          src={props.avatarSrc}
          alt={props.nickname}
          width={80}
          height={80}
          className="object-cover"
          priority
        />
        <div className="p-3 space-y-2 text-sm w-full">
          <p className="text-xl font-bold">{props.nickname}</p>
          <div className="grid grid-cols-2 gap-1">
            <p><span className="inline-block w-12">身高：</span> {props.height} cm</p>
            <p><span className="inline-block w-12">体重：</span> {props.weightToday} 斤</p>
            <p><span className="inline-block w-12">BMI：</span> {props.BMI}</p>
            <p><span className="inline-block w-12">目标：</span> {props.targetWeight} 斤</p>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}