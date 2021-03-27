<template>
  <div>
    <h2>添加任务</h2>
    <input type="text" v-model="title" @keypress.enter="add" />
    <h2>进行中的任务</h2>
    <div v-for="(item, index) in list" :key="index">
      <input v-if="!item.finished" type="checkbox" :value="item.title" @click="item.finished = !item.finished" />
      <label v-if="!item.finished">{{ item.title }}</label>
    </div>
    <hr />
    <h2>已结束的任务</h2>
    <div v-for="(item, index) in list" :key="index">
      <input v-if="item.finished" type="checkbox" :value="item.title" @click="item.finished = !item.finished" /><label
        v-if="item.finished"
        class="finished"
        >{{ item.title }}</label
      >

      <!-- 结束任务 -->
      <!-- <button v-show="!item.finished" @click="item.finished = true">结束任务</button> -->

      <!-- 任务状态的切换 -->
      <!-- <button v-show="!item.finished" @click="item.finished = true">
          切换
          </button> -->

      <!-- <button v-show="!item.finished" @click="title.finished = true">
          </button> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Todo',
  data() {
    return {
      title: '',
      list: [
        {
          title: 'HTML',
          finished: false,
        },
        {
          title: 'JavaScript',
          finished: true,
        },
        {
          title: 'Vue.js',
          finished: true,
        },
        {
          title: 'CSS',
          finished: false,
        },
      ],
    }
  },
  methods: {
    add() {
      let item = {
        title: this.title,
        finished: false,
      }
      this.list.splice(this.list.length, 1, item)
      this.title = ''
    },
  },
}
</script>

<style lang="scss" scoped>
input[type='checkbox'] {
  cursor: pointer;
}
.finished {
  text-decoration: line-through;
  color: rgb(221, 221, 221);
}
</style>
