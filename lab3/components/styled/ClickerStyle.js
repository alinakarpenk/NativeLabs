import styled from 'styled-components/native'


export const Clicker = styled.View`
    flex: 1;
    background-color: #f0f2f5;
    padding: 50px
`
export const Score = styled.View`
    margin-top: 20px;
    font-size: 10px;
    background-color: rgba(102, 102, 102, 0.31);
    padding: 20px;
    align-items: center;
    border-radius: 15px;
    margin-bottom: 25px;
    border-width: 8px;
    border-color: rgba(255, 255, 255, 0.34)
`

export const Title = styled.Text`
    font-size: 14px;
    color: rgba(26, 26, 26, 0.82);
    font-weight: 900
`

export const Value = styled.Text`
    font-size: 40px;
    font-weight: 900;
    color: rgba(26, 26, 26, 0.82),
`

export const Container = styled.View`
    align-items: center;
`
export const ButtonClicker = styled.TouchableOpacity`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: #205170;
    justify-content: center;
    align-items: center;
    elevation: 12;
    border-width: 8px;
    border-color: rgba(255, 255, 255, 0.34)
`

export const Panel = styled.View`
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    margin-bottom: 50px;
    border-width: 1px;
    border-color: rgba(97, 97, 97, 0.34);
    justify-content: center;
    flex-direction: column;
    padding: 25px;
    text-align: right;
    gap: 15;
    margin-top: 25px;
`

export const CircleText = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: 900px
`

export const InfoText = styled.Text`
    font-size: 14px;
    color: #2d3436;
    font-weight: 600px
`