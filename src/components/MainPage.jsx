import { Card, Button, Row, Col } from "antd";
import HeadingText from "./HeadingText";
import "./MainPage.css";
import Period from "./Period";
import ClockTime from "./ClockTime";
import Graph from "./Graph";
import useTimer from "../hooks/useTimer";
import useIsWorking from "../hooks/useIsWorking";

const ClockinBtn = ({ clickFunc }) => {
  return (
    <Button onClick={clickFunc} type="primary" shape="round" size="large">
      Clock-In
    </Button>
  );
};
const ClockoutBtn = ({ clickFunc }) => {
  return (
    <Button
      onClick={clickFunc}
      type="primary"
      danger
      shape="round"
      size="large"
    >
      Clock-out
    </Button>
  );
};

function MainPage() {

  const {isWorking,startWorking,stopWorking} = useIsWorking(false)
  const clocktime = useTimer(isWorking);


  const formatTime = (time) => {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    let hours = Math.floor(time / (60 * 60));
    let completetime = `${hours}:${minutes}:${seconds}`;
    return completetime;
  };

  return (
    <div className="main-page">
      <h1>Overview </h1>

      <Card bordered={false}>
        <HeadingText text={"Time & Attendance"} />
        <Row>
          <Col span={12}>
            <div className="inner-time-container">
              <div>
                <h1 className="clock-time">{formatTime(clocktime)}</h1>
                <p style={{ marginTop: "0px" }}> 05-Feb-2024</p>
              </div>
              <div className="break-outer">
                <div className="break-box">
                  <div>00:00:00</div>
                  <div>Clock In Time</div>
                </div>
                <div className="break-box break-box2">
                  <div>00:00:00</div>
                  <div>Break Duration</div>
                </div>
              </div>
            </div>
            {isWorking === false ? (
              <ClockinBtn clickFunc={startWorking} />
            ) : (
              <ClockoutBtn clickFunc={stopWorking} />
            )}

            <Period />
            <ClockTime />
          </Col>
          <Col span={12}>
            <Graph />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default MainPage;
