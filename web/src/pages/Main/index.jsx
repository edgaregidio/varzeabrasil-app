import TableMain from '../../components/TableMain'
import GunnersMain from '../../components/GunnersMain'
import React from 'react'
import Logo from '../../assets/logovb.png'
import './styles.css'

export default function Main() {
  return (
    <div>
      <nav>
        <img src={Logo} alt="Logo Varzea Brasil" />
      </nav>
      <section className="news">
        <div className="card-news">
          <h1>
            Flamengo encontra caminho pelo alto para tentar sair da pressão;
            Arão é destaque
          </h1>
          <p>Cinco dos últimos seis gols da equipe foram marcados de cabeça</p>
        </div>
      </section>
      <section className="tables">
        <TableMain>Tables</TableMain>
        <GunnersMain>gunners</GunnersMain>
      </section>
      <footer>Copyright © 2022 EvoluTI - Todos os direitos reservados</footer>
    </div>
  )
}
