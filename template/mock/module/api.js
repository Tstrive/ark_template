const routers = [
  {
    type: 'get',
    url: '/xxx/xxx/getDataInfo',
    cb: function (req, res) {
      res.json({
        code: 0,
        msg: 'SUCCESS',
        data: [],
      })
    },
  },
]

module.exports = routers
