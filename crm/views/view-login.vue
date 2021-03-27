<template>
  <div class="content">
    <div class="login">
      <h1>Login</h1>
      <div class="row">
        <label for="username">Username</label>
        <input id="username" type="text" name="username" />
      </div>
      <div class="row">
        <label for="password">Password</label>
        <input type="password" name="password" />
      </div>

      <div class="row">
        <div class="group-btn">
          <w-button type="success">Submit</w-button>
          <w-button type="secondary">Cancel</w-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const username = ref("");
    const password = ref("");

    return {
      username,
      password
    };
  }
});
</script>

<style lang="less">
.content {
  .login {
    margin: 20px;

    .row {
      display: flex;
      flex-direction: column;
      padding-bottom: 10px;
		}
		
		.group-btn {
			margin-top: 15px;
			display: flex;
			flex-wrap: nowrap;
			position: absolute;
			right: 25px;
		}
  }
}
</style>