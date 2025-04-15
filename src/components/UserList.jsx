import React, { useState } from 'react';
import { Avatar, List, Skeleton, Typography } from 'antd';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const UserList = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 2000);

    return (
        <>
            <Typography.Title
                level={6}
                style={{ fontSize: '32px', marginTop: '15px', color: '#4f6f52' }}
            >
                Recent Activity
            </Typography.Title>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <Skeleton loading={loading} active avatar>
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                title={<a href="/" style={{color:'#4f6f52'}}>{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    </Skeleton>
                )}
            />
        </>
    );
};

export default UserList;