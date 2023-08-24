<template>
  <div class="my-input">
    <input
      class="my-input_inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      @input="handleInput"
      :disabled="disabled"
    />
    <span class="one-input_suffix">
      <i
        class="on-input_icon one-icon-cancel"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <i
        class="on-input_icon one-icon-visible"
        v-if="showPassword && type == 'password'"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "MyInput",
  components: {},
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleInput(e) {
      console.log(this.type);
      this.$emit("input", e.target.value);
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  },
};
</script>

<style lang="less" scoped>
.my-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .my-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.one-input_suffix {
  .one-input_inner {
    padding-right: 30px;
  }
  .one-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>