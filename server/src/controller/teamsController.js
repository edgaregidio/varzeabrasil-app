var data = [
  {
    id: 1,
    name: 'Folia Futebol Clube',
    surname: 'Folia',
    avatar: '/',
    titles: {
      number: 1,
      names: ['']
    },
    members: [
      {
        name: 'Eduardo',
        avatar: '/',
        function: 'Presidente',
        goals: 0
      },
      {
        name: 'Diogenis ',
        avatar: '/',
        function: 'Atacante',
        goals: 3
      }
    ]
  },
  {
    id: 2,
    name: 'Tabajara Futebol Clube',
    surname: 'Tabajara JR10',
    avatar: '/',
    titles: {
      number: 1,
      names: ['']
    },
    members: [
      {
        name: 'Flavio',
        avatar: '/',
        function: 'Atacante',
        goals: 7
      },
      {
        name: 'Leynner',
        avatar: '/',
        function: 'Volante',
        goals: 2
      }
    ]
  },
  {
    id: 3,
    name: 'Tabajara Futebol Clube',
    surname: 'Tabajara JR10',
    avatar: '/',
    titles: {
      number: 1,
      names: ['']
    },
    members: [
      {
        name: '',
        avatar: '/',
        function: '',
        goals: 0
      },
      {
        name: '',
        avatar: '/',
        function: '',
        goals: 0
      }
    ]
  },
  {
    id: 4,
    name: 'Chopp Futebol Clube',
    surname: 'Chopp',
    avatar: '/',
    titles: {
      number: 1,
      names: ['']
    },
    members: [
      {
        name: '',
        avatar: '/',
        function: '',
        goals: 0
      },
      {
        name: '',
        avatar: '/',
        function: '',
        goals: 0
      }
    ]
  },
  {
    id: 5,
    name: 'União Baxadão',
    surname: 'Baxadão',
    avatar: '/',
    titles: {
      number: 1,
      names: ['']
    },
    members: [
      {
        name: '',
        avatar: '/',
        function: '',
        goals: 0
      },
      {
        name: '',
        avatar: '/',
        function: '',
        goals: 0
      }
    ]
  },
  {
    id: 6,
    name: 'Geração Vila Nova Futebol Clube',
    surname: 'G. Vila Nova',
    avatar: '/',
    titles: {
      number: 1,
      names: ['']
    },
    members: [
      {
        name: '',
        avatar: '/',
        function: '',
        goals: 0
      },
      {
        name: '',
        avatar: '/',
        function: '',
        goals: 0
      }
    ]
  }
]

module.exports = {
  index: async (req, res) => {
    return res.json(data)
  }
}
