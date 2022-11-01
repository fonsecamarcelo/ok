import { Container } from './ProdutoStyles'
import { memo } from 'react'
import { IconButton } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


function Produto({
    nome,
    foto,
    id,
    valor,
    unidade
}) {
    return (
        <Container>
            <div>
                <img
                    src={'/imagens/${foto}.png'}
                    alt={'foto de ${nome}'}
                />
                <p>
                    {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
                </p>
            </div>
            <div>
                <IconButton
                    color='secondary'
                    >
                        <RemoveCircleOutlineIcon />
                    </IconButton>

                    <IconButton>
                        <AddCircleOutlineIcon />
                    </IconButton>
            </div>
        </Container>
    )
}

export default memo ( Produto )