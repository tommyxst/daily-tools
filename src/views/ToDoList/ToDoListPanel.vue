<template>
  <section>
    <a-list class="todo-list-body" size="small" bordered :data-source="list">
      <template #renderItem="{ index, item }">
        <a-list-item
          class="todo-list-item"
          :class="{ 'todo-list-finished': item.finished }"
        >
          <a-checkbox v-model:checked="item.finished"></a-checkbox>
          {{ item.text }}
          <template #actions>
            <edit-two-tone @click="onEdit(item)" />
            <delete-two-tone @click="onDelete(index)" />
          </template>
        </a-list-item>
      </template>
    </a-list>
    <a-input-search
      v-model:value="text"
      placeholder="在这输入"
      size="large"
      @search="onSubmit"
    >
      <template #enterButton>
        <a-button>确定</a-button>
      </template>
    </a-input-search>
  </section>
</template>

<script lang="ts">
// import { Component } from 'vue-property-decorator'
import { Vue, Options } from "vue-class-component"
import { DeleteTwoTone } from "@ant-design/icons-vue"

// interface ToDoItem {
//   text: string,
//   finished: boolean,
// }

@Options({
  components: {
    DeleteTwoTone
  }
})
export default class ToDoListPanel extends Vue {
  private text = ""
  private list = [
    { text: "第一件事", finished: false },
    { text: "第二件事", finished: true }
  ]

  public onSubmit(value: string): void {
    if (value) {
      this.list.push({ text: value, finished: false })
      this.text = ""
    }
  }

  public onDelete(index: number): void {
    const temp = this.list.filter((_item, i) => {
      return i !== index
    })
    this.list = temp
  }
}
</script>

<style lang="less">
.todo-list-body {
  .todo-list-item {
    .todo-list-item-text {
      flex: 1;
      margin-left: 10px;
    }
  }
  .todo-list-finished {
    color: grey;
    text-decoration: line-through;
  }
  .todo-list-delBtn {
    float: right;
  }
}
</style>
