import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import itsamatch from '../assets/itsamatch.png';
import './Main.css';
import api from '../services/api';

export default function Main({match}){

    const [users, setUsers] = useState([]);
    const [matched, setMatched] = useState();

    useEffect(()=>{

        async function loadUsers(){
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            });
            setUsers(response.data);
        }

        loadUsers();
    },[match.params.id]);

    useEffect(()=>{

        const socket = io('http://localhost:3333', {
            query: { user:match.params.id }
        });

        socket.on('match', dev =>{
            setMatched(dev)
        });

    },[match.params.id]);

    async function handleLike(id){
        await api.post(`/devs/${id}/likes`,null, {
            headers:{
                user:match.params.id
            }
        });

        setUsers(users.filter(user => user._id != id ));
    }

    async function handleDislike(id){
        await api.post(`/devs/${id}/dislikes`,null, {
            headers:{
                user:match.params.id
            }
        });

        setUsers(users.filter(user => user._id != id ));
      
    }

    return (
        <div className="main-container">
            <img src={logo} alt="Tindev"/>
            {users.length > 0 ? 
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                        <img src={user.avatar} alt="avatar"/>

                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>

                        <div className="buttons" >

                            <button type="button" onClick={()=>handleLike(user._id)}>
                                <img src={like} alt="like"/>
                            </button>

                            <button type="button" onClick={()=>handleDislike(user._id)}>
                                <img src={dislike} alt="dislike"/>
                            </button>

                        </div>
                    </li>

                    ))}
                    
                </ul>
            : <div className="empty">Acabou :(</div>
            }

            {matched && (
                <div className='match-container'>
                    <img  src={itsamatch} alt='Its a match'/>

                    <img className='avatar' src={matched.avatar}/>
                    <strong>{matched.name}</strong>
                    <p>{matched.bio}</p>
                    <button onClick={()=>{setMatched(false)}}>Fechar</button>
                </div>
            )}
        </div>
        
      );
}
