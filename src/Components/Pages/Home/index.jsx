import React from 'react';
import { Layout } from 'antd';
import { Card } from './Blocks/Card';
import { BackgroundDiv, LayoutWrapper } from './styles'

const { Header, Footer, Sider, Content } = Layout;


const data = [
    {
        id: 1,
        name: 'LG K40',
        image: "https://cdn-files.kimovil.com/phone_front/0003/02/thumb_201010_phone_front_big.jpeg",
        price: 20
    },

    {
        id: 2,
        name: 'iPhone 11 Pro',
        image: 'https://icdn2.digitaltrends.com/image/digitaltrends/iphone-11-pro-review-2-768x768.jpg',
        price: 35
    }
];

export const Home = () => {
    // const [title, changeTitle] = useState('Hello!')

    // const clickCard = () => {
    //     changeTitle('clicked')
    // }
    return (
        <Layout>
            <Header>Header</Header>
            <LayoutWrapper>
                <Sider>Sider</Sider>
                <Content>
                    <BackgroundDiv color={'green'} primary>New Button</BackgroundDiv>
                    {
                        data.map(el => {
                            return (
                                <Card item={el}/>
                            )
                        })
                    }
                </Content>
            </LayoutWrapper>
            <Footer>Footer</Footer>
        </Layout>
    )
}

