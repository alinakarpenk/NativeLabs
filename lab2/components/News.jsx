import styled from "styled-components/native";
import React from "react";

const Post = styled.View`
    padding: 10px;
    flex-direction: row;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #616161;
`

const PostImage = styled.Image`
    width: 100px;
    height: 100px;
`

const PostTitle = styled.Text`
    font-weight: bold;
    font-size: 15px;
`

const PostDate = styled.Text`
    color: #838383;
`

const PostText = styled.Text`
    font-weight: 200;
    
`

const PostDetails = styled.View`
    flex-direction: column;
    justify-content: center;
    flex: 1;
    position: relative;
    left: 20px;
`

export default function News({ title, text, date, imgURL }) {
    return (
        <Post>
            <PostImage
                source={{ uri: imgURL}}
            />
            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <PostDate>{date}</PostDate>
                <PostText>{text}</PostText>
            </PostDetails>
        </Post>
    )
}