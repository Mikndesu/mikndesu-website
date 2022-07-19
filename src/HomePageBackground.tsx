import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Image from './assets/lavawalker.png'

const BackGroundStyle = styled('img')({
    filter: 'brightness(50%)'
})


const HomePageBackground = () => {
    return (
        <div>
            <img src={Image} style={{width:"100%", height:"100%", objectFit:"cover", filter:"brightness(50%)"}}/>
        </div>
    );
}

export default HomePageBackground;