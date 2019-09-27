var app = getApp();
var WxParse = require('../../lib/wxParse/wxParse.js');
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
const config = require('../../config/config.js');
import HtmlToJson from '../../lib/wxParse/html2json.js';

Page({
    data: {
        id: 0,
        topic: {},
        topicList: [],
        commentCount: 0,
        commentList: [],
        imageUrls:[],
    },
    onShareAppMessage: function() {
        return {
            title: config.titleList[config.env],
            desc: config.descList[config.env],
            path: '/pages/topicDetail/topicDetail?id=' + this.data.id
        }
    },
    onLoad: function(options) {
        // 页面初始化 options为页面跳转所带来的参数
        var that = this;
        that.setData({
            id: parseInt(options.id)
        });

        util.request(api.TopicDetail, { id: that.data.id }).then(function(res) {
            if (res.errno === 0) {
              // var transData = HtmlToJson.html2json(res.data.content, 'wxParseData');
              // var imageUrls= transData.imageUrls;
                that.setData({
                    topic: res.data,
                    // imageUrls: imageUrls,
                });
                WxParse.wxParse('topicDetail', 'html', res.data.content, that);
              // console.log('transdata:', transData.imageUrls);
            }
        });

        util.request(api.TopicRelated, { id: that.data.id }).then(function(res) {
            if (res.errno === 0) {

                that.setData({
                    topicList: res.data
                });
            }
        });
    },
    getCommentList() {
        let that = this;
        util.request(api.CommentList, { valueId: that.data.id, typeId: 1, size: 5 }).then(function(res) {
            if (res.errno === 0) {

                that.setData({
                    commentList: res.data.data,
                    commentCount: res.data.count
                });
            }
        });
    },
    postComment() {
        wx.navigateTo({
            url: '/pages/commentPost/commentPost?valueId=' + this.data.id + '&typeId=1',
        })
    },
    wxParseImgTap(e) {
      var that = this;
      var nowImgUrl = e.target.dataset.src;
      var tagFrom = e.target.dataset.from;
      if (typeof (tagFrom) != 'undefined' && tagFrom.length > 0) {
        wx.previewImage({
          current: nowImgUrl, // 当前显示图片的http链接
          urls: that.data.imageUrls // 需要预览的图片http链接列表
        })
      }
    },
    onReady: function() {

    },
    onShow: function() {
        // 页面显示
        this.getCommentList();
    },
    onHide: function() {
        // 页面隐藏

    },
    onUnload: function() {
        // 页面关闭

    }
})