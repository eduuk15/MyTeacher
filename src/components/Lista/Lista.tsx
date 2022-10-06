import { Button } from "@mui/material";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style";

const Lista = () => {
    return (
        <ListaStyled>
            <ItemLista>
                <Foto src="https://github.com/eduuk15.png"></Foto>
                <Informacoes>
                    <Nome>Eduardo Knopp</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de JavaScript</Descricao>
                    <Button sx={{ width: '70%' }}>Marcar Aula com Eduardo</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/eduuk15.png"></Foto>
                <Informacoes>
                    <Nome>Eduardo Knopp</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de JavaScript</Descricao>
                    <Button sx={{ width: '70%' }}>Marcar Aula com Eduardo</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/eduuk15.png"></Foto>
                <Informacoes>
                    <Nome>Eduardo Knopp</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de JavaScript</Descricao>
                    <Button sx={{ width: '70%' }}>Marcar Aula com Eduardo</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/eduuk15.png"></Foto>
                <Informacoes>
                    <Nome>Eduardo Knopp</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de JavaScript</Descricao>
                    <Button sx={{ width: '70%' }}>Marcar Aula com Eduardo</Button>
                </Informacoes>
            </ItemLista>
        </ListaStyled>
    )
}

export default Lista;