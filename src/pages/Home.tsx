import {useNavigate} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'

export function Home(){
    const history = useNavigate()

    function navigateToNewRoom(){
        history('/rooms/new')
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logo} alt="LetMeAsk" />
                    <button className='create-room'onClick={navigateToNewRoom}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie uma sala com o Google.
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text" 
                            placeholder='Digite o código da sala'
                            //value={}
                        />
                        <Button type="submit" >Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}


