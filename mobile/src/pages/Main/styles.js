import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background:#f5f5f5;
  align-items:center;
  justify-content:space-between;
`;

export const CardContainer = styled.View`
    flex:1;
    align-self: stretch;
    justify-content:center;
    max-height:500px;

`;

export const Logo = styled.Image`
    margin-top:20px;
`;

export const Card = styled.View`
    border-width:1px;
    border-color:#ddd;
    border-radius:8px;
    margin:30px;
    overflow:hidden;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
`;

export const Avatar = styled.Image`
    flex:1;
    height:300px;
`;

export const Footer = styled.View` 
    background:#fff;
    padding:10px 20px 15px;
`;

export const Name = styled.Text`
    font-size:16px;
    font-weight:bold;
    color: #333;
    text-align:center;
`;

export const Bio = styled.Text`
    font-size:14px;
    color: #999;
    text-align:center;
    line-height:18;
`;

export const ButtonsContainer = styled.View`
    flex-direction:row;
    margin-bottom:30px;
`;

export const Buttom = styled.TouchableOpacity`
    width:50px;
    height:50px;
    border-radius:25px;
    background:#fff;
    justify-content:center;
    align-items:center;
    margin: 0 20px;
    
`;

export const Like = styled.Image`

`;

export const Dislike = styled.Image`

`;

export const Empty = styled.Text`
    align-self:center;
    color: #999;
    font-size:24px;
    font-weight:bold;
`;

export const Logout = styled.TouchableOpacity`

`;

export const MatchContainer = styled.View`

  background:rgba(0,0,0,0.7);
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  justify-content:center;
  align-items:center;
`;

export const MatchAvatar = styled.Image`
    width: 160px;
    height: 160px;;
    border-radius: 80px;
    border-width: 5px;
    border-color:#fff;
    margin: 30px 0;
`;

export const MatchImage = styled.Image.attrs({
    resizeMode:'contain',
})`
    height:60px;
`;

export const MatchName = styled.Text`
    font-weight:bold;
    font-size: 32px;
    color: #fff;
`;

export const MatchBio = styled.Text`
    margin-top: 10px;
    font-size: 20px;
    text-align:center;
    line-height: 30px;
    max-width: 400px;
    color: rgba(255, 255, 255, 0.9);
`;

export const Button = styled.TouchableOpacity`
    margin-top: 30px;
`;

export const ButtonText = styled.Text`
    color: rgba(255, 255, 255, 0.9);
    font-size: 18px;
    margin-top: 30px;
    font-weight:bold;
`;