<template>
    <div class="details container">
      <router-link class="btn btn-default" :to="{name:'Customers'}">返回</router-link>
      <h1 class="page-header">
        {{customer.name}}
        <span class="pull-right">
          <router-link class="btn btn-primary" v-bind:to="'/edit/'+ customer.id">编辑</router-link>
          <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
        </span>
      </h1>


      <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon ">{{customer.phone}}</span></li>
        <li class="list-group-item"><span class="glyphicon ">{{customer.email}}</span></li>
        <li class="list-group-item"><span class="glyphicon ">{{customer.education}}</span></li>
        <li class="list-group-item"><span class="glyphicon ">{{customer.graduationschool}}</span></li>
        <li class="list-group-item"><span class="glyphicon ">{{customer.profession}}</span></li>
        <li class="list-group-item"><span class="glyphicon ">{{customer.profile}}</span></li>
      </ul>

    </div>
</template>
s
<script>
    export default {
        name: "customerDetails",
        data: function () {
          return {
            customer:"",
          }
        },
        methods: {
          getCustomers: function (id) {
            this.$http.get("http://localhost:3000/users/" + id)
              .then((response) => {
                this.customer = response.data;
              })
          },
          deleteCustomer:function(id){
            this.$http.delete("http://localhost:3000/users/" + id)
              .then(() => {
                this.$router.push({path: "/"});
              })
          }
        },
        created(){
          this.getCustomers(this.$route.params.id);

        }
    }
</script>

<style scoped>

</style>
