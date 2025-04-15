import { Flex, Typography } from "antd";
import React from "react";
import img2 from "../assets/img2.png";

function RightBanner() {
    return (

        <Flex
            align="center"
            justify="center"
            style={{ background: "white", maxWidth: "100%", borderRadius: "8px", padding:'32px'}}
            className="right-banner"
        >
            <div className="right-banner-left">
                <Typography.Title level={3} style={{ marginTop: 0 }}>
                    Create ans Sell Products
                </Typography.Title>
                <Typography.Title
                    level={5}
                    style={{ marginTop: 0, color: "#b5b5b5", fontWeight: "400" }}
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Typography.Title>
            </div>
            <div className="plant-image">
                <img src={img2} alt="plant" width={'70%'} />
            </div>

        </Flex>
    );
}

export default RightBanner;
