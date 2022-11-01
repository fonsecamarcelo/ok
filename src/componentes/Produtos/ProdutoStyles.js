import styled from 'styled-componentes'
import AddCardIcon from '@mui/icons-material/AddCard';

export const Container = styled( AddCardIcon )`
    align-items: center;
    display: flex;
    justify-content: space between;
    padding: 20px
    width: 100%
    div {
        align-items: center;
        display: flex;
        gap: 20px;
        p {
            font-size: 22px;
            font-weight: bold;
            padding: 5px 0 0 5px;
        }
        span{
            font-size: 16px;
        }
    }
    `;