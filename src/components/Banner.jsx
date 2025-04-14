import { Button, Card, Flex, Typography } from "antd";
import React from "react";

function Banner() {
  return (
    <Flex
      justify="space-between"
      style={{ background: "white", maxWidth: "100%", borderRadius: "8px" }}
    >
      <Flex
        vertical
        align="start"
        justify="space-between"
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
        <div
          style={{
            display: "flex",
            alignContent: "center",
            gap: "10px",
            fontWeight: "600"
          }}
        >
          <Button style={{ background: "#4f6f52", color: "white" }}>
            Explore More
          </Button>
          <Button>Top Sellers</Button>
        </div>
      </Flex>
    </Flex>
  );
}

export default Banner;
