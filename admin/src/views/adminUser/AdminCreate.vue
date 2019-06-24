<template>
    <div>
        <h1>{{id?'编辑':'新建'}}管理员</h1>
        <el-form @submit.native.prevent="save">
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="model.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    props:{
        id:{}
    },
    data(){
        return{
            model:{},
        }
    },
    methods:{
        async save(){     //save方法
            let res
            if(this.id){
                res = await this.$http.put(`rest/adminUser/${this.id}`,this.model)
            }else{
                res = await this.$http.post('rest/adminUser',this.model)
            }
            this.$router.push('/adminUser/AdminList')     //跳转路由到list
            this.$message({
            type:'success',
            message:'保存成功'
          })
        },
        async fetch(){  //fetch方法
            const res = await this.$http.get(`rest/AdminUser/${this.id}`)
            this.model=res.data
        },
    },
    created(){
        this.id && this.fetch()       //当存在id时执行fetch（）方法
    }
}
</script>
