import { Button, Card, Flex, Typography } from "antd";
import React from "react";

function Banner() {
  return (
    <Flex
      justify="start"
      style={{ background: "white", maxWidth: "100%", borderRadius: "8px", height:'30%' }}
      className="banner-left"
    >
      <Flex
        vertical
        align="start"
        justify="start"
        gap={'20px'}
        style={{ padding: 32 }}
      >
        <Typography.Title level={3} style={{ marginTop: 0 }}>
          Create ans Sell Products
        </Typography.Title>
        <Typography.Title
          level={5}
          style={{ marginTop: 0, color: "#b5b5b5", fontWeight: "400" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Typography.Title>
        <div className="top-banner-btn"
          style={{
            display: "flex",
            alignContent: "center",
            gap: "10px",
            fontWeight: "600"
          }}
        >
          <Button style={{ background: "#4f6f52", color: "white" }} className="banner-btn">
            Explore More
          </Button>
          <Button>Top Sellers</Button>
        </div>
      </Flex>
    </Flex>
  );
}

export default Banner;
