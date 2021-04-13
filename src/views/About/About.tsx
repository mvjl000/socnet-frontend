import React from 'react';
import { Wrapper, Heading, ContentWrapper, Article, Title, Content } from './About.styles';
import GitHubIcon from '@material-ui/icons/GitHub';

const About: React.FC = () => {
    return (
        <Wrapper>
            <Heading>
                About Socnet
            </Heading>
            <ContentWrapper>
                <Article>
                    <Title>What Is Socnet?</Title>
                    <Content>It is a fullstack social media app built for study purpose. Allows to create account, add posts, interact with other users by commenting their activity.
                        <br/>
                        <br/>
                    In the future I would like to add some new features, for example live chat and stuff like that.
                    </Content>
                </Article>
                <Article>
                    <Title>Tech stack</Title>
                    <Content>As I said in the first article, this is a Fullstack App - let me start with frontend.
                        <br/>
                        <br/>
                        For this project chose Javascript framework - React (CRA) combined with Typescript, styled components and some third party solutions for animations etc.
                        <br/>
                        <br/>
                        On the backend I used NodeJS with Express framework. For storing data - MongoDB, NoSQL database.
                    </Content>
                </Article>
                <Article>
                    <Title>Contanct</Title>
                    <Content>To see more interesting projects, necessarily check my GitHub account - <a href="https://github.com/mvjl000">mvjl000</a><GitHubIcon/>
                    <br/>
                    <br/>
                    Here is my email adress: milosz.devmail@gmail.com
                    <br/>
                    <br/>
                    I highly recommend to see <a href="https://github.com/mvjl000">Socnet Repos</a>, look for socnet-frontend and socnet-backend
                    <br/>
                    <br/>
                    Made By Milosz Piskadlo
                    </Content>
                </Article>
            </ContentWrapper>
        </Wrapper>
    )
}

export default About
