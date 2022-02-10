<template>
  <a-layout-sider>
    <a-menu v-model:selectedKeys="selectedKeys" mode="vertical">
      <a-menu-item key="today">
        <template #icon>
          <calendar-two-tone />
        </template>
        今日
      </a-menu-item>
      <a-menu-item key="important">
        <template #icon>
          <star-two-tone />
        </template>
        重要
      </a-menu-item>
      <a-menu-item key="plan">
        <template #icon>
          <profile-two-tone />
        </template>
        计划
      </a-menu-item>
      <a-menu-item key="task">
        <template #icon>
          <tags-two-tone />
        </template>
        任务
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import {
  CalendarTwoTone,
  StarTwoTone,
  ProfileTwoTone,
  TagsTwoTone
} from "@ant-design/icons-vue"

@Options({
  components: {
    CalendarTwoTone,
    StarTwoTone,
    ProfileTwoTone,
    TagsTwoTone
  }
})
export default class ToDoListGroup extends Vue {
  private selectedKeys = ["today"]
}
</script>

<style lang="less" scoped>
</style>
