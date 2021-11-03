import React, { useState, useEffect } from 'react';
import { postList } from './postlist';
import { Header, HeaderTitle, Attribution, HeaderCopy, HeaderQuote, Post, PostBottom, PostImage, PostDate, PostTop, PostTopLeft, PostTopRight, PostList, Posts as Container, PostTitle, PostLink, PostContent, Quote, CopyTop, CopyBottom, HeaderLinkList, HeaderLinkItem, HeaderLinkAnchor, HeaderLinks, Down } from '../../styled/posts.styled';

function Posts() {
    return (
        <Container>
            <Header>
                <HeaderQuote>
                    <Quote>
                        “To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge.”
                    </Quote>
                    <Attribution>
                        ~ Nicolaus Copernicus
                    </Attribution>
                </HeaderQuote>
                <HeaderLinks>
                    <HeaderLinkList>
                        <HeaderLinkItem>
                            <HeaderLinkAnchor href="#test">BLOG POSTS</HeaderLinkAnchor>
                        </HeaderLinkItem>
                        <HeaderLinkItem>
                            <HeaderLinkAnchor href="#">🔥🔥🔥</HeaderLinkAnchor>
                        </HeaderLinkItem>
                    </HeaderLinkList>
                </HeaderLinks>
                <HeaderCopy>
                    <HeaderTitle>Welcome to the zone.</HeaderTitle>
                    <CopyTop>
                        Learn, internalize, teach.
                    </CopyTop>
                    <CopyBottom>
                        <p>1. Learn: You'll experience discomfort. This is ok.</p>
                        <p>2. Internalize: Make something, break something, fix something.</p>
                        <p>3. Teach: If you can teach it, you can use it. Move on to the next concept.</p>
                        <p></p>
                    </CopyBottom>
                </HeaderCopy>
            </Header>
            <PostList id='test'>
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
