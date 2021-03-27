<template>
  <div class="all">
    <div class="head">
      <span>购物车</span>
    </div>
    <ul class="menu">
      <li class="li">
        <input type="checkbox" id="all" v-model="checkedAll" @change="checkedAllChange()" />
        <label for="all"></label>
        全选
      </li>
      <li class="li">序号</li>
      <li class="li">名称</li>
      <li class="li">图片</li>
      <li class="li">单价</li>
      <li class="li">数量</li>
      <li class="li">库存</li>
      <li class="li">小计</li>
    </ul>
    <div>
      <ul v-for="data in data" :key="data.code" class="menu">
        <li class="li">
          <input type="checkbox" name="commodity" v-model="checked" :value="data" @change="changeAll()" />
        </li>
        <li class="li">{{ data.code }}</li>
        <li class="li">{{ data.name }}</li>
        <li class="item-img"><img :src="data.imgUrl" :alt="data.name" /></li>
        <li class="li">￥{{ data.price }}</li>
        <li class="li">
          <div @click="SubNum(data)" :disabled="data.number === 1 ? true : false">-</div>
          <input type="number" v-model.lazy="data.number" @change="numberChange(data)" />
          <div @click="AddNum(data)">+</div>
        </li>
        <li class="li">{{ data.stock }}</li>
        <li class="li">￥{{ data.number * data.price }}</li>
      </ul>
    </div>
    <div class="info">
      <p>{{ commodityNumber }}件商品</p>
      <p>
        总计：<span>￥{{ numberAll }}</span>
      </p>
      <button>结算</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkedAll: false,
      checked: [],
      totalPrice: 0,
      data: {
        one: {
          code: 1,
          name: 'bear',
          imgUrl: 'http://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/toy/bear.png',
          price: 20,
          number: 1,
          stock: 6,
        },
        two: {
          code: 2,
          name: 'cat',
          imgUrl: 'http://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/toy/cat.png',
          price: 30,
          stock: 13,
          number: 1,
        },
        three: {
          code: 3,
          name: 'dog',
          imgUrl: 'http://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/toy/dog.png',
          price: 40,
          stock: 3,
          number: 1,
        },
        four: {
          code: 4,
          name: 'pig',
          imgUrl: 'http://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/toy/pig.png',
          price: 50,
          stock: 12,
          number: 1,
        },
      },
    }
  },
  mounted() {},
  methods: {
    //判断全选事件
    checkedAllChange() {
      if (this.checkedAll) {
        for (let i in this.data) {
          this.checked.push(this.data[i])
        }
      } else {
        this.checked = []
      }
    },
    changeAll() {
      if (this.checked.length == Object.keys(this.data).length) {
        this.checkedAll = true
      } else {
        this.checkedAll = false
      }
    },
    // 加减
    SubNum(data) {
      data.number--
      if (data.number < 1) {
        data.number = 1
      }
    },
    AddNum(data) {
      data.number++
      if (data.number > data.stock) {
        data.number = data.stock
      }
    },
    //输入
    numberChange(data) {
      if (data.number > data.stock) {
        data.number = data.stock
      }
    },
  },
  computed: {
    //商品数量
    commodityNumber() {
      return this.checked.length
    },
    //总价
    numberAll() {
      var numberAll = 0
      for (let i in this.checked) {
        numberAll += this.checked[i].number * this.checked[i].price
      }
      return numberAll
    },
  },
}
</script>
<style lang="scss" scoped type="text/css">
ul,
li {
  list-style: none;
}
.all {
  width: 800px;
  height: 500px;
  background: #fff;
  border: 1px solid #9b118f;
  margin-left: 300px;
  .head {
    background: #9b118f;
    height: 36px;
    line-height: 36px;
    color: #fff;
    padding-left: 15px;
  }
  .menu {
    height: 32px;
    width: 100%;
    border-bottom: 1px solid #d4d4d4;
    padding: 0 15px;
    display: flex;
    .li {
      line-height: 32px;
      flex: 1;
      border-right: 1px solid #d4d4d4;
      text-align: center;
      input[type='number'] {
        width: 40px;
        display: inline-block;
        height: 20px;
      }
      div {
        width: 20px;
        height: 20px;
        padding: 0;
        display: inline-block;
        background: #333;
        color: #fff;
        line-height: 20px;
        text-align: center;
        cursor: pointer;
      }

      div:active {
        background: #999;
      }
    }
    .li:nth-of-type(3) {
      flex: 2;
    }
    .li:last-child {
      border: 0;
    }
  }
  .menu + div {
    height: 350px;
    margin-bottom: 20px;
    border-bottom: 1px solid #9b118f;
  }
  .info {
    text-align: right;
    margin-right: 20px;
    span {
      color: #f00;
      font-size: 20px;
      font-weight: 900;
    }
  }
  .item-img {
    flex: 1 1 0;
    img {
      width: 50%;
      height: 80%;
    }
  }
}
</style>
