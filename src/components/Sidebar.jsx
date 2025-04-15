import { Menu } from "antd";
import React, { useState } from "react";
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
    const [selectedKey, setSelectedKey] = useState("1");

    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
    };

    return (
        <>
            <div
                className="demo-logo-vertical"
                style={{
                    textAlign: "center",
                    height: "64px",
                    background: "white"
                }}
            >
                <a href="/">
                    <FaLeaf
                        style={{
                            fontSize: "xxx-large",
                            paddingTop: "10px",
                            color: "#4f6f52"
                        }}
                    />
                </a>
            </div>
            <Menu
                theme="dark"
                selectedKeys={[selectedKey]}
                mode="inline"
                style={{ background: "white"}}
                items={items}
                onClick={handleMenuClick}
            />
        </>
    );
}

export default Sidebar;