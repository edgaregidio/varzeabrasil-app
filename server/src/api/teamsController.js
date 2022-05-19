var data = [
  {
    id: 1,
    name: 'Lima Futebol Clube',
    tag: 'LIM',
    surname: 'Lima',
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
    id: 2,
    name: 'Folia Futebol Clube',
    tag: 'FFC',
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
    id: 3,
    name: 'Tabajara Futebol Clube',
    tag: 'TAB',
    surname: 'Tabajara JR10',
    avatar: '/',
    titles: {
      number: 1,
      names: ['']
    },
    members: [
      {
        name: 'Leynner',
        avatar: '/',
        function: 'Volante',
        goals: 2
      },
      {
        name: 'Wendel Cleyton',
        avatar: '/',
        function: 'Meio-Campo',
        goals: 3
      }
    ]
  },
  {
    id: 4,
    name: 'Chopp Futebol Clube',
    tag: 'CFC',
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
    tag: '',
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
    tag: '',
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
