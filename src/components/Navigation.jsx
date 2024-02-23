import NavItem from "./NavItem";
import {
  HomeOutlined,
  FormOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  DesktopOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  RightCircleOutlined,
  LayoutOutlined,
  StarOutlined
} from "@ant-design/icons";

function Navigation() {
  return (
    <div className="navigation">
      <img src="logo.png" className="nav-img" />
      <div className="nav-item-div">
      <NavItem txt={"Overview"}>
        <HomeOutlined />
      </NavItem>
      <NavItem txt={"My Team"}>
      <TeamOutlined />
      </NavItem>
      <NavItem txt={"My Leave"}>
        <FormOutlined />
      </NavItem>
      <NavItem txt={"My Attendance"}>
        <UserOutlined />
      </NavItem>
      <NavItem txt={"My Assets"}>
        <DesktopOutlined />
      </NavItem>
      <NavItem txt={"Recruitmnt"}>
        <UsergroupAddOutlined />
      </NavItem>
      <NavItem txt={"Expense Management"}>
      <LayoutOutlined />
      </NavItem>
      <NavItem txt={"HelpDesk"}>
        <CustomerServiceOutlined />
      </NavItem>
      <NavItem txt={"Performance"}>
      <StarOutlined />
      </NavItem>
      <NavItem txt={"OKR"}>
        <RightCircleOutlined />
      </NavItem>
      </div>
    </div>
  );
}

export default Navigation;
