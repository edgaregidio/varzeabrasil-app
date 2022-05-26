import React, { useEffect, useState } from 'react'
import api from '../../../api'
import Loading from '../../Loading'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react'

import './styles.css'

export default function RunningStilch({
  name,
  games,
  victory,
  draw,
  defeat,
  proGoals,
  ownGoals,
  balance,
  proGoalsAverage,
  AgaintsGolsAverage,
  use
}) {
  const [table, setTable] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    api.get('/arenasoccer').then(async data => {
      setLoading(true)
      setTable(await data.data)
      setLoading(false)
    })
  }, [])
  // console.log(loading)

  const order = table.sort((a, b) => {
    return b.victory - a.victory
  })

  return (
    <>
      <TableContainer zIndex="-1">
        <Table size="sm" bg="while">
          <Thead>
            <Tr>
              <Th zIndex="-1" bg="white" position="absolute" minWidth="11.5rem">
                {name}
              </Th>
              <Th zIndex="-2" position="relative" left="11.5rem">
                {games}
              </Th>
              <Th zIndex="-2" position="relative" left="11.5rem">
                {victory}
              </Th>
              <Th zIndex="-2" position="relative" left="11.5rem">
                {draw}
              </Th>
              <Th zIndex="-2" position="relative" left="11.5rem">
                {defeat}
              </Th>
              <Th zIndex="-2" position="relative" left="11.5rem">
                {proGoals}
              </Th>
              <Th zIndex="-2" position="relative" left="11.5rem">
                {ownGoals}
              </Th>
              <Th zIndex="-2" position="relative" left="11.5rem">
                {balance}
              </Th>
              <Th zIndex="-2" position="relative" left="11.5rem">
                {proGoalsAverage}
              </Th>
              <Th zIndex="-2" position="relative" left="11.5rem">
                {AgaintsGolsAverage}
              </Th>
              <Th zIndex="-2" position="relative" left="11.5rem">
                {use}
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {console.log(order)}
            {order.map((item, index) => (
              <Tr bg="">
                <Td
                  // zIndex="1"
                  bg={'#f9f9f9'}
                  position="absolute"
                  minWidth="11.5rem"
                  zIndex="-1"
                  color={
                    index < 8
                      ? '#1737FE'
                      : index < 16
                      ? 'var(--primary-color-text)'
                      : index < 24
                      ? '#FF8C00'
                      : '#999999'
                  }
                >
                  {' '}
                  {index + 1}
                  &nbsp; &nbsp;
                  {item.name}
                </Td>
                <Td zIndex="-2" position="relative" left="11.5rem">
                  {item.games}
                </Td>
                <Td zIndex="-2" position="relative" left="11.5rem">
                  {item.victory}
                </Td>
                <Td zIndex="-2" position="relative" left="11.5rem">
                  {item.draw}
                </Td>
                <Td zIndex="-2" position="relative" left="11.5rem">
                  {item.defeat}
                </Td>
                <Td zIndex="-2" position="relative" left="11.5rem">
                  {item.proGoals}
                </Td>
                <Td zIndex="-2" position="relative" left="11.5rem">
                  {item.ownGoals}
                </Td>
                <Td zIndex="-2" position="relative" left="11.5rem">
                  {item.proGoals - item.ownGoals}
                </Td>
                <Td zIndex="-2" position="relative" left="11.5rem">
                  {(item.proGoals / item.games).toFixed(1)}
                </Td>
                <Td zIndex="-2" position="relative" left="11.5rem">
                  {(item.ownGoals / item.games).toFixed(1)}
                </Td>
                <Td zIndex="-2" position="relative" left="11.5rem">
                  {}%
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
