import { useState } from "react";
import { Professor } from "../../@types/professor";

export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([
        {
          id: 1,
          nome: 'Professor 1',
          foto: 'https://github.com/eduuk15.png',
          descricao: 'descricao1',
          valor_hora: 100
        },
        {
          id: 2,
          nome: 'Professor 2',
          foto: 'https://github.com/eduuk15.png',
          descricao: 'descricao2',
          valor_hora: 100
        },
        {
          id: 3,
          nome: 'Professor 3',
          foto: 'https://github.com/eduuk15.png',
          descricao: 'descricao3',
          valor_hora: 100
        },
        {
          id: 4,
          nome: 'Professor 4',
          foto: 'https://github.com/eduuk15.png',
          descricao: 'descricao4',
          valor_hora: 100
        }
      ])

      return {
        listaProfessores
      }
}