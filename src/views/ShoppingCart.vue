<template>
  <div class="container">
    <h2>购物车页面</h2>
    <div v-for="(goods, index) in goodsList" :key="index" class="item">
      <div class="item-id">
        {{ goods.id }}
      </div>
      <div class="item-name">
        {{ goods.name }}
      </div>
      <div class="item-img">
        <img :src="goods.imgUrl" :alt="goods.name" />
      </div>
      <div class="item-price">￥{{ goods.price }}</div>
      <div class="item-count">
        <button @click="goods.count -= 1" :disabled="goods.count === 1 ? true : false">-</button>
        <input type="text" v-model="goods.count" class="item-count" />
        <button @click="goods.count += 1">+</button>
      </div>
    </div>

    <h2>总价: ￥{{ totalPrice }}</h2>
    <button>结算</button>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data() {
    return {
      goodsList: [
        {
          id: 1,
          name: 'bear',
          imgUrl: 'http://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/toy/bear.png',
          price: 20,
          count: 1,
        },
        {
          id: 2,
          name: 'cat',
          imgUrl: 'http://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/toy/cat.png',
          price: 30,
          count: 1,
        },
        {
          id: 3,
          name: 'dog',
          imgUrl: 'http://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/toy/dog.png',
          price: 40,
          count: 1,
        },
        {
          id: 4,
          name: 'pig',
          imgUrl: 'http://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/toy/pig.png',
          price: 50,
          count: 1,
        },
      ],
    }
  },
  methods: {},
  computed: {
    totalPrice: function () {
      let total = 0
      let len = this.goodsList.length
      for (let i = 0; i < len; i++) {
        const item = this.goodsList[i]
        total += item.price * item.count
      }
      return total
    },
  },
}
</script>

<style lang="scss" scope="scoped">
input[type='checkbox'] {
  cursor: pointer;
}
.container {
  width: 400px;
  font-size: 18px;
  .item {
    display: flex;
    border: 1px solid #eee;
    border-radius: 10px;
    width: 90%;
    margin: 0 auto;
    height: 100px;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    .item-id {
      flex: 1 1 10px;
      color: brown;
    }
    .item-name {
      flex: 1 1 20%;
    }
    .item-img {
      flex: 1 1 20%;
      img {
        width: 90%;
        height: 90%;
      }
    }
    .item-price {
      flex: 1 1 15%;
    }
    .item-count {
      flex: 1 1 35%;
      display: flex;
      input {
        width: 80px;
      }
    }
  }
}
</style>
