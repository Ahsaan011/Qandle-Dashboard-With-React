import { Col, Row, Dropdown } from "antd";
import { Button, Space } from "antd";
import { useState } from "react";

function LineDiv() {
  return (
    <div
      style={{ width: "100%", border: "1px solid gray", marginTop: "15px" }}
    ></div>
  );
}

function Period() {
  const [days, setdays] = useState("7 days");
  const items = [
    {
      label: "7 Days",
      key: "1",
      onClick: () => {
        setdays("7 days");
      },
    },
    {
      label: "15 Days",
      key: "2",
      onClick: () => {
        setdays("15 days");
      },
    },
    {
      label: "30 Days",
      key: "3",
      onClick: () => {
        setdays("30 days");
      },
    },
  ];
  const menuProps = {
    items,
  };
  return (
    <div className="period">
      <Row>
        <Col span={8}>
          <LineDiv />
        </Col>
        <Col span={8}>
          <Row className="period-div">
            <div>Period:</div>
            <Dropdown menu={menuProps}>
              <Button style={{ border: "0px" }}>
                <Space>{days}</Space>
              </Button>
            </Dropdown>
          </Row>
          {/* </div> */}
        </Col>
        <Col span={8}>
          <LineDiv />
        </Col>
      </Row>
    </div>
  );
}

export default Period;
