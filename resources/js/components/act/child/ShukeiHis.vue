<template>
  <table id="wariate" class="torks_com center">
    <tr v-if="his">
      <td>確認時刻</td>
      <td>確認者</td>
      <td>発注コード</td>
      <td>親形式</td>
      <td>確認数</td>
    </tr>
    <tr v-else>
      <td>確認データなし</td>
    </tr>
    <tr v-for="(item, index) in his" :key="index">
      <td>{{ item.add_time }}</td>
      <td>{{ item.user_name }}</td>
      <td>{{ item.const_code }}</td>
      <td>{{ item.assy_code }}</td>
      <td>{{ item.count_num }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ["his"]
};
</script>
