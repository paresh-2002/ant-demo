import React from 'react'

function Users() {
    return (
        <div>
            <Typography.Title
                level={5}
                style={{ fontSize: "32px", marginTop: "15px", color: "#4f6f52" }}
            >
                Top Seller
            </Typography.Title>
            <div>
                <Avatar.Group>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <a href="https://ant.design">
                        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                    </a>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Tooltip>
                    <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                </Avatar.Group>
                
            </div>

        </div>
    )
}

export default Users