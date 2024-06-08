import { FunctionComponent, useState } from 'react'
import { HomeFilled, ExclamationCircleFilled, TeamOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import { NavLink } from 'react-router-dom'

const { Header } = Layout;

const items: MenuProps['items'] = [
    {
        label: (<NavLink to={'/'}>
            <img src="src\assets\img\Laytontophat.webp" height="64" width="64" alt="logo"></img>
        </NavLink>),
        key: 'Icon',
    },
    {
        label: (<NavLink to={'/'}>Home</NavLink>),
        key: 'Home',
        icon: <HomeFilled />,
    },
    {
        label: (
            <NavLink to={'/Characters'}>Characters</NavLink>
        ),
        key: 'Characters',
        icon: <TeamOutlined />,
    },
    {
        label: (
            <NavLink to={'/Game'}>Game</NavLink>
        ),
        key: 'Game',
        icon: <ExclamationCircleFilled />,
    },
];

interface NavigationProps {
}
const Navigation: FunctionComponent<NavigationProps> = () => {
    const [current, setCurrent] = useState('Home');

    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key == 'Icon') {
            setCurrent('Home')
        }
        else {
            setCurrent(e.key);
        }
    };
    return (
        <>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </Header>

        </>
    )
}
export default Navigation