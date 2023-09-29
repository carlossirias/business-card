import './App.css'
import { Card } from './components/card'

function App() {

  const cards =[{
    id: 1,
    title:"Perfect solution for small business",
    imageCard:"/hero-image-business-card.png",
    description:'Small businesses need to generate leads to grow. You can use tools like Ringy.',
    name:"Amy Burgess",
    imageAvatar:'/avatar-image-business-card.png',
    position: 'Customer Manger, Solution Oy'
  }]
  return (
    <>
      <main className='w-full h-screen flex justify-center items-center'>
        {
          cards.map((card)=>{
            return <Card key={card.id} 
          title={card.title}
          description={card.description}
          name={card.name}
          srcImageCard={card.imageCard}
          srcAvatar={card.imageAvatar}
          position={card.position}
          />
          })
        }
        
      </main>
    </>
  )
}

export default App
