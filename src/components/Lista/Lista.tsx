import { Button } from "@mui/material";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style";

const Lista = () => {
    return (
        <ListaStyled>
            <ItemLista>
                <Foto src="https://github.com/eduuk15.png"></Foto>
                <Informacoes>
                    <Nome>Eduardo Knopp</Nome>
                    <Valor>R$ 100,00</Valor>
                    <Descricao>Aulas de JavaScript</Descricao>
                    <Button>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
        </ListaStyled>
    )
}

export default Lista;