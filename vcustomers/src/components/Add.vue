<template>
    <div class="add container">
      <Alert v-if="test" v-bind:message="test"></Alert>
      <h1 class="page-header">添加用户</h1>
      <form v-on:submit="addCustomer">
        <div class="well">
          <h4>用户信息</h4>
          <div class="form-group">
            <label>姓名</label>
            <input type="text" class="form-control" placeholder="name" v-model="customer.name">
          </div>
          <div class="form-group">
            <label>电话</label>
            <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
          </div>
          <div class="form-group">
            <label>邮箱</label>
            <input type="text" class="form-control" placeholder="email" v-model="customer.email">
          </div>
          <div class="form-group">
            <label>学历</label>
            <input type="text" class="form-control" placeholder="education" v-model="customer.education">
          </div>
          <div class="form-group">
            <label>毕业学校</label>
            <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
          </div>
          <div class="form-group">
            <label>职业</label>
            <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
          </div>
          <div class="form-group">
            <label>个人简介</label>
            <textarea  rows="10" class="form-control" placeholder="profile" v-model="customer.profile"></textarea>
          </div>
          <button class="btn btn-primary" type="submit">确认提交</button>
        </div>
      </form>
    </div>
</template>

<script>
  import Alert from "./Alert"
    export default {
        name: "add",
        data: function () {
          return {
            test:"",
            customer:{

            }
          }
        },
        methods: {
          addCustomer: function (event) {
            if (!this.customer.name || !this.customer.phone || !this.customer.email) {
              this.test = "Error!!!!"
            } else {
              let newCustomer = {
                name: this.customer.name,
                phone: this.customer.phone,
                email: this.customer.email,
                eduction: this.customer.education,
                graduationschool: this.customer.graduationschool,
                profession: this.customer.profession,
                profile: this.customer.profile
              };

              this.$http.post("http://localhost:3000/users",newCustomer)
                .then(() => {
                  this.$router.push({path: "/",query:{test:"添加成功!"}})
                  // this.$router.push({path:"/", query: {alert: "添加成功!!!"}});
                });
              event.preventDefault();//阻止默认事件
            }
            event.preventDefault();//阻止默认事件
          }
        },
        components: {
          Alert
        }
    }
</script>

<style scoped>

</style>
