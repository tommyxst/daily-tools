<template>
  <section>
    <a-layout style="height: 100vh">
      <a-layout-header class="header">
        <div class="header-logo" id="logo"></div>
        <span class="header-text">My Todo List</span>
      </a-layout-header>
      <a-layout>
        <to-do-list-group></to-do-list-group>
        <a-layout-content>
          <to-do-list-panel></to-do-list-panel>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import {
  CalendarTwoTone,
  StarTwoTone,
  ProfileTwoTone,
  TagsTwoTone
} from "@ant-design/icons-vue"
import ToDoListPanel from "./ToDoListPanel.vue"
import ToDoListGroup from "./ToDoListGroup.vue"

@Options({
  components: {
    CalendarTwoTone,
    StarTwoTone,
    ProfileTwoTone,
    TagsTwoTone,
    ToDoListPanel,
    ToDoListGroup
  }
})
export default class ToDoList extends Vue {
  private selectedKeys = ["today"]
}
</script>

<style lang="less" scoped>
.header {
  background-color: gray;
  height: 48px;
  display: flex;
  .header-text {
    display: flex;
    align-items: center;
  }
}
</style>
