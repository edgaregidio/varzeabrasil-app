import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import api from '../../api'

export default function Profile() {
  const [profile, setProfile] = useState()
  const { id } = useParams()

  useEffect(() => {
    api.get('teams').then(({ data }) => {
      setProfile(data)
    })
    console.log({ profile })
  }, [''])

  return (
    <div>
      {profile?.map(profile => (
        <div key={profile.id}>
          <h1>O perfil é: {profile.surname}</h1>
          <Outlet />
        </div>
      ))}
    </div>
  )
}
