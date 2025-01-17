import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material"
import Search from "./Search"
import CustomButton from "./CustomButton"

const StyleHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`
const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const Header = () => {

    const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
    const subLogoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'
    
    return (
        <StyleHeader>
            <Toolbar style={{minHeight: 55}}>
                <Component>
                    <img src={logoUrl} alt="logo" style={{width: 75}} />
                    <Box style={{display: 'flex'}}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color: '#FFE500'}}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subLogoUrl} alt="sub logo" />
                    </Box>
                </Component>
                <Search />
                <CustomButton />
            </Toolbar>
        </StyleHeader>
    )
}

export default Header