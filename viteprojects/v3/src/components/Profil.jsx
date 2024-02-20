import {useContext} from 'react'
import UserContext from '../Context/UserContext'
function Profil() {
    const {user} = useContext(UserContext)
     if(!user) return <div>please log in</div>

     return <div>welcome  {user.username}</div>
}

export default Profil;