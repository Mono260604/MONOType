import Image from 'next/image'
import NavBar from './components/navBar'
import TypingCard from './components/typingCard'
import MenuButton from './components/menuButton'

export default function Home() {
  return (
    <main className="w-full bg-bgColor pb-8">
      <div>
        <NavBar />
      </div>
      <div>
        <MenuButton />
      </div>
      <div>
        <TypingCard />
      </div>
    </main>
  )
}
