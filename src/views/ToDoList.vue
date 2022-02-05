<template>
  <section>
      <a-input-search
        :value="text"
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
import { Vue } from 'vue-class-component'

export default class ToDoList extends Vue {
  private text = ''

  public onSubmit(): void {
    console.log(this.text)
  }
}
</script>

<style>

</style>
