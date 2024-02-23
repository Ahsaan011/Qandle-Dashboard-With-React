import { Button, Flex } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';


function NavItem({txt,children}){
    return(
        
            <Button style={{width:"100%",height:"50px",fontSize:"14.5px"}} size='large' type="text">
                 {children} {txt}
                 </Button>
        
    )
}

export default NavItem