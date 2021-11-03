import React, { useState, useEffect } from 'react';
import { postList } from './postlist';
import { PostAnchor, Header, HeaderTitle, Attribution, HeaderCopy, HeaderQuote, Post, PostNav, PostBottom, PostImage, PostDate, PostTop, PostTopLeft, PostTopRight, PostList, Posts as Container, PostTitle, PostLink, PostContent, Quote, CopyTop, CopyBottom, HeaderLinkList, HeaderLinkItem, HeaderLinkAnchor, HeaderLinks, Down, PostContainer } from '../../styled/posts.styled';
import { ArrowUp } from '@styled-icons/evil';

function Posts() {
    useEffect(() => {
        console.log(postList)
    }, [postList])
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
                        {/* <HeaderLinkItem>
                            <HeaderLinkAnchor href="#">🔥🔥🔥</HeaderLinkAnchor>
                        </HeaderLinkItem> */}
                    </HeaderLinkList>
                </HeaderLinks>
                <HeaderCopy>
                    <HeaderTitle>Lets get L.I.T.</HeaderTitle>
                    <CopyTop>
                        Learn, internalize, teach.
                    </CopyTop>
                    <CopyBottom>
                        <p>1. Learn: You'll experience discomfort. This is OK.</p>
                        <p>2. Internalize: Make something, break something, fix something.</p>
                        <p>3. Teach: If you can teach it, you can use it. Move on to the next concept.</p>
                        <p></p>
                    </CopyBottom>
                </HeaderCopy>
            </Header>
            <PostContainer>
                <PostNav>
                    <PostAnchor href='/'>
                        Home
                    </PostAnchor>
                    {postList.map(post => {
                        return (
                            <PostAnchor key={post.id} href={`#${post.name}`}>
                                {post.date}
                            </PostAnchor>
                        )
                    })}
                </PostNav>
                <PostList id='test'>
                    {postList.map(post => {
                        return (
                            <Post key={'key' + post.id} id={post.name}>
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
            </PostContainer>
        </Container>
    )
}

export default Posts
