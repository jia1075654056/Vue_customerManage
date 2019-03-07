<template>
  <div class="customers container">
    <Alert v-if="test" v-bind:message="test"></Alert>
    <h1>用户管理系统</h1>

    <input type="text" placeholder="搜索" class="form-control" v-model="filterInput">
    <br>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in filterBy(customers, filterInput)">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td><router-link v-bind:to="'/customer/'+customer.id" class="btn btn-default">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  import Alert from "./Alert"
  // import route from "vue-router"
    export default {
        name: "customers",
        data: function () {
          return {
            customers: [],
            test:"",
            filterInput: ""
          }
        },
        methods: {
          getCustomers: function () {
            this.$http.get("http://localhost:3000/users")
              .then((response) => {
                this.customers = response.data;
              })
          },
          filterBy: function (customers, value) {
            return customers.filter(function (cunstomer) {
              return cunstomer.name.match(value)
            })
          }
        },
        created(){
          //警告框
          if (this.$route.query.test) {
            this.test = this.$route.query.test;
          }
          this.getCustomers();
        },
        updated(){
          this.getCustomers();
        },
        components:{
          Alert
        }
    }
</script>

<style scoped>

</style>
