import { Button, Image, Space, Typography } from "antd";
import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { Card } from 'antd';

function ItemsLists() {
  return (
    <div>
      <Typography.Title
        level={5}
        style={{ fontSize: "32px", marginTop: "15px", color: "#4f6f52" }}
      >
        My Listing
      </Typography.Title>
      <div className="space-align-container">
        <Card hoverable className="space-align-block">
          <Space
            align="center"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Image
              width={200}
              height={200} // Set a fixed height
              style={{ objectFit: "cover" }} // Ensures the image fits properly
              src={img1}
            />
            <Typography.Title
              style={{ fontSize: "32px", marginTop: "15px", color: "#4f6f52" }}
              className="mock-block"
            >
              Arecaceae
            </Typography.Title>
          </Space>
        </Card>
        <Card hoverable className="space-align-block">
          <Space
            align="center"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Image
              width={200}
              height={200} // Set a fixed height
              style={{ objectFit: "cover", maxWidth:'75%' }} // Ensures the image fits properly
              src={img2}
            />
            <Typography.Title
              style={{ fontSize: "32px", marginTop: "15px", color: "#4f6f52" }}
              className="mock-block"
            >
              Indoor Potted
            </Typography.Title>
          </Space>
        </Card>
        <Card hoverable className="space-align-block">
          <Space
            align="center"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Image
              width={200}
              height={200} // Set a fixed height
              style={{ objectFit: "cover" }} // Ensures the image fits properly
              src={img3}
            />
            <Typography.Title
              style={{ fontSize: "32px", marginTop: "15px", color: "#4f6f52" }}
              className="mock-block"
            >
              Succulent
            </Typography.Title>
          </Space>
        </Card>
      </div>
    </div>
  );
}
export default ItemsLists;
