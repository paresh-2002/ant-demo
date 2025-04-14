import { Menu } from "antd";
import React from "react";
import {
    CarryOutOutlined,
    LogoutOutlined,
    OrderedListOutlined,
    ProfileOutlined,
    SettingOutlined,
    UserOutlined
} from "@ant-design/icons";
import { FaLeaf } from "react-icons/fa";

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label
    };
}

const items = [
    getItem("Dashboard", "1", <UserOutlined />),
    getItem("My Orders", "2", <CarryOutOutlined />),
    getItem("ToDo", "3", <OrderedListOutlined />),
    getItem("Profile", "4", <ProfileOutlined />),
    getItem("Setting", "6", <SettingOutlined />),
    getItem("Logout", "5", <LogoutOutlined />)
];

function Sidebar() {

    return (
        <>
            <div className="demo-logo-vertical" style={{
                textAlign: 'center',
                height: '64px',
                background:'white'
            }}>
                <FaLeaf style={{fontSize: 'xxx-large',
                paddingTop:'10px',
                color: '#4f6f52',}}/>
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                style={{background:'white',color: 'black'}}
                items={items}
            />
        </>
    );
}

export default Sidebar;
