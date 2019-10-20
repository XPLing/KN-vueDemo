<template>
    <div class="home">
        <img alt="fleetup logo" src="../assets/img/favIcon.png" style="background-color: #236294; border-radius: 50%; margin-bottom: 20px;">
        <div>
            <template v-if="userInfo">
                Welcome to FleetUp, {{userInfo.name}} <el-link @click="signUp" type="primary">[Logout]</el-link>
            </template>
            <template v-else>
                <router-link to="/login">To login</router-link>
            </template>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {},
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    ...mapMutations([
      'signUp'
    ])
  }
}
</script>
