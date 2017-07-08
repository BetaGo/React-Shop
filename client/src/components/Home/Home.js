import React, { Component } from 'react';
import GoodsGridList from './GoodsGridList';
import GoodsDetailModal from './GoodsDetailModal';

/**
 * mock data
 */

const goodsList = [
  {
    "_id": "5933c7565f61e206ad047295",
    "author": {
      "_id": "5933c5cc5f61e206ad047291",
      "name": "sowhat",
      "gender": "m",
      "bio": "苟利国家生死以，岂因祸福避趋之。",
      "avatar": "avatar-sowhat.jpg"
    },
    "name": "Bird - Cloud",
    "desc": "The bird wishes it were a cloud. The cloud wishes it were a bird.",
    "cover": "cover-1496565590453.png",
    "price": 999,
    "remain": 9,
    "created_at": "2017-06-04 16:39"
  },
  {
    "_id": "5933c6465f61e206ad047292",
    "author": {
      "_id": "5933c5cc5f61e206ad047291",
      "name": "sowhat",
      "gender": "m",
      "bio": "苟利国家生死以，岂因祸福避趋之。",
      "avatar": "avatar-sowhat.jpg"
    },
    "name": "飞鸟",
    "desc": "Stray birds of summer come to my window to sing and fly away. And yellow leaves of autumn, which have no songs, flutter and fall there with a sign.",
    "cover": "cover-1496565318571.jpg",
    "price": 98,
    "remain": 1,
    "created_at": "2017-06-04 16:35"
  },
  {
    "_id": "5933c53f5f61e206ad047290",
    "author": {
      "_id": "5933c3445f61e206ad04728b",
      "name": "noone",
      "gender": "m",
      "bio": "Valar Morghulis",
      "avatar": "avatar-noone.jpg"
    },
    "name": "北客有来初未识",
    "desc": "南金无价喜新尝。含滋嚼句齿牙香。",
    "cover": "cover-1496565055653.jpg",
    "price": 99,
    "remain": 2,
    "created_at": "2017-06-04 16:30"
  },
  {
    "_id": "5933c4b25f61e206ad04728f",
    "author": {
      "_id": "5933c3445f61e206ad04728b",
      "name": "noone",
      "gender": "m",
      "bio": "Valar Morghulis",
      "avatar": "avatar-noone.jpg"
    },
    "name": "江南好，风景旧曾谙。",
    "desc": " 日出江花红胜火， 春来江水绿如蓝， 能不忆江南？",
    "cover": "cover-1496564914978.jpg",
    "price": 998,
    "remain": 2,
    "created_at": "2017-06-04 16:28"
  },
  {
    "_id": "5933c39f5f61e206ad04728c",
    "author": {
      "_id": "5933c3445f61e206ad04728b",
      "name": "noone",
      "gender": "m",
      "bio": "Valar Morghulis",
      "avatar": "avatar-noone.jpg"
    },
    "name": "昨夜西风凋碧树",
    "desc": "独上高楼，望尽天涯路。",
    "cover": "cover-1496564639548.jpg",
    "price": 999,
    "remain": 1,
    "created_at": "2017-06-04 16:23"
  }
];

/**
 * mock data
 */
const goodsDetailDate = {
  "name": "Bird - Cloud",
  "desc": "The bird wishes it were a cloud. The cloud wishes it were a bird.",
  "cover": "cover-1496565590453.png",
  "price": 999,
  "remain": 9,
  "images": [
    {
      "src": 'http://placeimg.com/640/480/animals',
      "alt": 'animals'
    },{
      "src": 'http://placeimg.com/640/480/tech',
    },{
      "src": 'http://placeimg.com/640/480/arch',
      "alt": 'arch'
    },{
      "src": 'http://placeimg.com/640/480/people',
      "alt": 'people'
    },{
      "src": 'http://placeimg.com/640/480/nature',
      "alt": 'nature'
    }
  ],
}


class Home extends Component {
  render() {
    return (
      <div>
        <GoodsDetailModal />
        <GoodsGridList />
      </div>
    );
  }
}

export default Home;