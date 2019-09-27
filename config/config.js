var configObj = {
  env: 'gst',
  NewApiRootUrlObj: {
    'gst': 'https://gstsc.91ygxc.com/api/',
    'dev': 'http://192.168.1.158:8050/platform_framework_war/api/',
    'default': 'https://yxgj.91ygxc.com/api/'
  },
  appidList:{
    'gst': 'wx0eac55840849e060',
    'dev': 'wxf6df8ae33021b694',
    'default': 'wxf6df8ae33021b694'
  },
  titleList:{
    'gst': '港深通驾校',
    'dev': '阳光学车',
    'default': '阳光学车'
  },
  descList:{
    'gst': '港深通驾校',
    'dev': '阳光学车',
    'default': '阳光学车'
  },
}
module.exports = {
  env:'gst',  // 环境变量
  NewApiRootUrlObj: {
    'gst': 'https://gstsc.91ygxc.com/api/',
    'dev': 'http://192.168.1.158:8050/platform_framework_war/api/',
    'default': 'https://yxgj.91ygxc.com/api/'
  },
  appidList:{
    'gst': 'wx0eac55840849e060',
    'dev': 'wxf6df8ae33021b694',
    'default': 'wxf6df8ae33021b694'
  },
  titleList:{
    'gst': '港深通驾校',
    'dev': '阳光学车',
    'default': '阳光学车'
  },
  descList:{
    'gst': '港深通驾校',
    'dev': '阳光学车',
    'default': '阳光学车'
  },
  NewApiRootUrl:configObj.NewApiRootUrlObj[configObj.env],
  appid: configObj.appidList[configObj.env],
  title: configObj.titleList[configObj.env],
  desc: configObj.descList[configObj.env],
}