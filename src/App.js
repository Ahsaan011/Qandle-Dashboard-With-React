import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { Layout, Flex,Input,Select,Card } from "antd";
import MainPage from "./components/MainPage";



const { Header, Sider, Content } = Layout;

const headerStyle = {
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor:"rgb(0, 126, 229)"
};
const contentStyle = {
};
const siderStyle = {
  backgroundColor:"#fff",
};

const layoutStyle = {
  overflow: "hidden",
  width: "calc(100%)",
  height:"calc(100vh)",
  maxWidth: "calc(100%)",
};
const { Option } = Select;

const selectBefore = (
  <Select style={{width:"120px"}} defaultValue="People">
    <Option value="People">People</Option>
    <Option value="Location">Location</Option>
    <Option value="Department">Department</Option>
    <Option value="Designation">Designation</Option>
  </Select>
);

function App() {
  return (
    <div className="App">
      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <Sider width="12%" style={siderStyle}>
            <Navigation />
          </Sider>
          <Layout>
            <Header style={headerStyle}>
              <Input className="header-input" addonBefore={selectBefore} size="large" placeholder="Search Here" styles={{
                input:{borderTopRightRadius:'20px',borderBottomRightRadius:"20px"},
                }} />
            </Header>
            <Content style={contentStyle}>
              <MainPage />
            </Content>
          </Layout>
        </Layout>
      </Flex>
    </div>
  );
}

export default App;
