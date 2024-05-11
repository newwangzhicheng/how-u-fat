import PersonalCard from '@/components/PersonalCard'

interface ITeamProps {
  teamId: string
}

export default function Team(props: ITeamProps) {
  const team: IPersonalCardProps[] = [
    {
      avatarSrc: '/img/feng.jpg',
      nickname: '冯晔',
      height: 170,
      weightToday: 114.6,
      BMI: 20,
      targetWeight: 90
    },
    {
      avatarSrc: '/img/zhu.jpg',
      nickname: '朱亚飞',
      height: 169,
      weightToday: 120,
      BMI: 20,
      targetWeight: 90
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="flex flex-col justify-between items-center gap-y-8 w-full">
        <h1 className="self-start text-2xl px-2">欢迎，Team 00001</h1>
        { team.map((v: IPersonalCardProps) => <PersonalCard key={v.nickname} {...v} />) }
      </div>
    </main>
  )
}