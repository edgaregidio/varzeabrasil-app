var data = [
  {
    id: 1,
    title: 'exemplo',
    description: 'Exemplo de descrição para um time de futebol',
    img: 'https://s2.glbimg.com/IZ_SabqhibZHASzi2geYYRR9GU4=/0x0:4047x2877/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/N/M/U2SuX6QB2SBhN6wH8DEw/2022-05-18t023423z-1444472817-up1ei5i075811-rtrmadp-3-soccer-libertadores-fla-uca-report.jpg'
  },
  {
    id: 2,
    title: 'exemplo',
    description: 'Exemplo de descrição para um time de futebol',
    img: 'https://s2.glbimg.com/IZ_SabqhibZHASzi2geYYRR9GU4=/0x0:4047x2877/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/N/M/U2SuX6QB2SBhN6wH8DEw/2022-05-18t023423z-1444472817-up1ei5i075811-rtrmadp-3-soccer-libertadores-fla-uca-report.jpg'
  },
  {
    id: 3,
    title: 'exemplo',
    description: 'Exemplo de descrição para um time de futebol',
    img: 'https://s2.glbimg.com/IZ_SabqhibZHASzi2geYYRR9GU4=/0x0:4047x2877/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/N/M/U2SuX6QB2SBhN6wH8DEw/2022-05-18t023423z-1444472817-up1ei5i075811-rtrmadp-3-soccer-libertadores-fla-uca-report.jpg'
  }
]

module.exports = {
  index: async (req, res) => {
    return res.json(data)
  }
}
