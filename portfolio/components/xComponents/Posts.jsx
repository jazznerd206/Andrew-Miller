import React, { useState, useEffect } from 'react';
import { postList } from './postlist';
import { Header, Post, PostBottom, PostImage, PostDate, PostTop, PostTopLeft, PostTopRight, PostList, Posts as Container, PostTitle, PostLink, PostContent } from '../../styled/posts.styled';

function Posts() {
    return (
        <Container>

            <Header>
                <h1>Welcome to the zone.</h1>
                <p></p>
            </Header>
            <PostList>
                {postList.map(post => {
                    return (
                        <Post key={post.id}>
                            <PostTop>
                                <PostTopLeft>
                                    <PostImage src={post.image} alt="blog image" />
                                </PostTopLeft>
                                <PostTopRight>
                                    <PostDate>
                                        {post.date}
                                    </PostDate>
                                    <PostTitle>
                                        {post.name}
                                    </PostTitle>
                                    <PostLink href="#">
                                        {post.link}
                                    </PostLink>
                                </PostTopRight>
                            </PostTop>
                            <PostBottom>
                                <PostContent>
                                    {post.content}
                                </PostContent>
                            </PostBottom>

                            
                        </Post>
                    )
                })}
            </PostList>
        </Container>
    )
}

export default Posts
