var vm = new Vue ({
  el: '#app',
  data: {
    lists: [
      {
        id: 1,
        title: '（2014年）专题活动页作品集',
        cover: {
          'background-image': 'url("ilb/img/cover/cover01.png")'
        },
        url: 'https://www.ui.cn/detail/447564.html'
      },
      {
        id: 2,
        title: '（2015年）大澍官网设计',
        cover: {
          'background-image': 'url("ilb/img/cover/cover02.png")',
        },
        url: 'https://www.ui.cn/detail/447580.html'
      },
      {
        id: 3,
        title: '（2015~2017年）企业平面作品集',
        cover: {
          'background-image': 'url("ilb/img/cover/cover03.png")'
        },
        url: 'https://www.ui.cn/detail/447584.html'
      },
      {
        id: 4,
        title: '（2016年）谭木匠 七夕情书（梳）',
        cover: {
          'background-image': 'url("ilb/img/cover/cover03-1.png")',
        },
        url: 'https://www.zcool.com.cn/work/ZMTc2MjAwODg=.html'
      },
      {
        id: 5,
        title: '（2016年）旧电脑打不开新视界',
        cover: {
          'background-image': 'url("ilb/img/cover/cover03-2.png")',
        },
        url: 'https://huaban.com/boards/30540168/'
      },
      {
        id: 6,
        title: '（2016年）航空大世界卡通人物形象',
        cover: {
          'background-image': 'url("ilb/img/cover/cover03-3.png")',
        },
        url: 'https://www.zcool.com.cn/work/ZMTgzMDg4MDg=.html'
      },
      {
        id: 7,
        title: '（2016年）智能楼宇项目设计',
        cover: {
          'background-image': 'url("ilb/img/cover/cover04.png")',
        },
        url: 'https://www.ui.cn/detail/447587.html'
      },
      {
        id: 8,
        title: '（2017年）OA云办公项目设计',
        cover: {
          'background-image': 'url("ilb/img/cover/cover05.png")',
        },
        url: 'https://www.ui.cn/detail/447589.html'
      },
      {
        id: 9,
        title: '（2017年）AMD创意海报征集大赛',
        cover: {
          'background-image': 'url("ilb/img/cover/cover05-1.png")',
        },
        url: 'https://huaban.com/boards/40254794/'
      },
      {
        id: 10,
        title: '（2017年）智能家居项目设计',
        cover: {
          'background-image': 'url("ilb/img/cover/cover06.png")',
        },
        url: 'https://www.ui.cn/detail/447591.html'
      },
      {
        id: 11,
        title: '（2018年）易品教育项目设计',
        cover: {
          'background-image': 'url("ilb/img/cover/cover07.png")',
        },
        url: 'https://www.ui.cn/detail/447592.html'
      },
      {
        id: 12,
        title: '（2018年）企业官网设计',
        cover: {
          'background-image': 'url("ilb/img/cover/cover08.png")',
        },
        url: 'https://www.ui.cn/detail/447594.html'
      },
      {
        id: 13,
        title: '（2018年）智慧社区项目设计',
        cover: {
          'background-image': 'url("ilb/img/cover/cover09.png")',
        },
        url: 'https://www.ui.cn/detail/447595.html'
      },
      {
        id: 14,
        title: '（2019年）个人图标字体项目',
        cover: {
          'background-image': 'url("ilb/img/cover/cover10.png")',
        },
        url: 'https://d3iii.github.io/myIconfontproject/'
      },
      {
        id: 15,
        title: '（2019年）缺省页设计',
        cover: {
          'background-image': 'url("ilb/img/cover/cover11.png")',
        },
        url: 'https://www.ui.cn/detail/447599.html'
      },
      {
        id: 16,
        title: '（2019年）D³ 个人LOGO设计',
        cover: {
          'background-image': 'url("ilb/img/cover/cover12.png")',
        },
        url: 'https://www.ui.cn/detail/447602.html'
      },
      {
        id: 17,
        title: '（2019年）MG动画练习（直播类APP动画）',
        cover: {
          'background-image': 'url("ilb/img/cover/cover13.gif")',
        },
        url: 'https://d3iii.github.io/d3iiiPW//mg.html'
      },
      {
        id: 18,
        title: '（2019年）WXP办公设计练习（仿WPS）',
        cover: {
          'background-image': 'url("ilb/img/cover/cover14.gif")',
        },
        url: 'https://d3iii.github.io/d3iiiPW//wxp.html'
      }
    ]
  },
  methods: {

  },
  created() {
    this.lists.reverse();
  },
  components: {

  },
});
