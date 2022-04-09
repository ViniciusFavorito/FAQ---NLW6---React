import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'
// import { useAuth } from '../hooks/useAuth'

export function NewRoom(){
    // const {user} = useAuth()



    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustra��o simbolizando perguntas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as d�vidas da sua audi�ncia em tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logo} alt="LetMeAsk" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                            type="text" 
                            placeholder='Nome da sala'
                            //value={}
                        />
                        <Button type="submit" >Criar sala</Button>
                    </form>
                    <p>
                      Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>  
                    </p>
                </div>
            </main>
        </div>
    )
}