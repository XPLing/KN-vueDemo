<template>
  <div class="login">
      <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="name" prop="name">
              <el-input v-model.number="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="password" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"  @keyup.enter.native="submitForm('ruleForm')"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'home',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        name: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        name: [
          { trigger: 'blur' }
        ]
      }
    };
  },
  components: {},
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    submitForm (formName) {
      console.log(11);
      this.signIn(this.ruleForm);
      this.$router.push('/');
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    ...mapMutations([
      'signIn'
    ])
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
    .login{
        width: 30%;
        margin: 0 auto;
    }
</style>
