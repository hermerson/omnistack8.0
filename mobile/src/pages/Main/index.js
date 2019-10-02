import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import { Container, CardContainer, Card, Footer, Name, Bio, Avatar, Logo, ButtonsContainer, Like, Dislike, Buttom, Empty, Logout, Button, ButtonText, MatchAvatar, MatchBio,MatchContainer, MatchImage, MatchName } from './styles';
import { Modal } from 'react-native';
import itsamatch from '../../assets/itsamatch.png';
import io from 'socket.io-client';

export default function Main({navigation}) {

  const id = navigation.getParam('user');
  const [users, setUsers] = useState([]);
  const [matched, setMatched] = useState(null);
  const [isMatched, setIsMatched] = useState(false);

    useEffect(()=>{

        async function loadUsers(){
            const response = await api.get('/devs', {
                headers: {
                    user: id,
                }
            });
            setUsers(response.data);
        }

        loadUsers();
    },[id]);

    useEffect(()=>{

      const socket = io('http://localhost:3333', {
          query: { user:id }
      });

      socket.on('match', dev =>{
          setMatched(dev);
          setIsMatched(true);
      });

    },[id]);

    async function handleLike(){
        const [user, ...rest] = users;
        await api.post(`/devs/${user._id}/likes`,null, {
            headers:{
                user:id
            }
        });

        setUsers(rest);
    }

    async function handleDislike(){
        const [user, ...rest] = users;
        await api.post(`/devs/${user._id}/dislikes`,null, {
            headers:{
                user:id
            }
        });

        setUsers(rest);
    }

    async function handleLogout(){
      await AsyncStorage.clear().then(res=>{
        navigation.navigate('Login');
      })
    }

  return (
    <Container>
      <Logout onPress={handleLogout}>
        <Logo source={logo}/>
      </Logout>
      

      <CardContainer>
        {users.length===0 ? <Empty>Sem mais usuários</Empty>:
          users.map((user, index)=>(
            <Card key={user._id} style={{zIndex:users.length - index}}>
            <Avatar source={{uri:user.avatar}} />
            <Footer>
              <Name>{user.name}</Name>
              <Bio numberOfLines={3}>{user.bio}</Bio>
            </Footer>
          </Card>
          ))
        }
      </CardContainer>

      {users.length>0 && 
        <ButtonsContainer>
          <Buttom style={{elevation:4}} onPress={handleLike}>
            <Like source={like}/>
          </Buttom>
          
          <Buttom style={{elevation:4}} onPress={handleDislike}>
            <Dislike source={dislike}/>
          </Buttom>
        </ButtonsContainer>
      }
      {matched && (
        <Modal visible={isMatched} transparent>
          <MatchContainer>
            <MatchImage source={itsamatch}/>
            <MatchAvatar source={{uri:matched.avatar}}/>
            <MatchName>{matched.name}</MatchName>
            <MatchBio>{matched.bio}</MatchBio>
            <Button onPress={()=>{
              setIsMatched(false);
              setMatched(null);
              }}>
              <ButtonText>Fechar</ButtonText>
            </Button>
          </MatchContainer>
        </Modal>
      )}
      
    </Container>
  );
}
