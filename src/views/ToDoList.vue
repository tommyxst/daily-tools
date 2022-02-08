<template>
  <section>
    <a-input-search
      placeholder="在这输入"
      size="large"
      @search="onSubmit"
    >
      <template #enterButton>
        <a-button>确定</a-button>
      </template>
    </a-input-search>

    <a-list class="todo-list-body" size="small" bordered :data-source="list">
      <template #renderItem="{ index, item }">
          <a-list-item class="todo-list-item" :class="{ 'todo-list-finished': item.finished }">
            <a-checkbox v-model:checked="item.finished"></a-checkbox>
            <span v-if="!item.editing" class="todo-list-item-text">{{ item.text }}</span>
            <a-input v-else v-model:value="item.text" bordered="false" @blur="onEdit(item)" />
            <template #actions>
              <edit-two-tone @click="onEdit(item)" />
              <delete-two-tone @click="onDelete(index)" />
            </template>
          </a-list-item>
      </template>
    </a-list>
  </section>
</template>

<script lang="ts">
// import { Component } from 'vue-property-decorator'
import { Vue, Options } from 'vue-class-component'
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons-vue'

interface ToDoItem {
  text: string,
  finished: boolean,
  editing: boolean,
}

@Options({
  components: {
    DeleteTwoTone,
    EditTwoTone
  }
})
export default class ToDoList extends Vue {
  private list = [
    { text: '第一件事', finished: false, editing: false },
    { text: '第二件事', finished: true, editing: false }
  ]

  public onSubmit(value: string): void {
    if (value) {
      this.list.push({ text: value, finished: false, editing: false })
    }
  }

  public onDelete(index: number): void {
    const temp = this.list.filter((_item, i) => {
      return i !== index
    })
    this.list = temp
  }

  public onEdit(item: ToDoItem): void {
    item.editing = !item.editing
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
    text-decoration:line-through;
  }
  .todo-list-delBtn {
    float: right;
  }
}

</style>
