<template>
    <div>
        <h1>{{id?'编辑':'新建'}}物品</h1>
        <el-form @submit.native.prevent="save" label-width="100px">
            <!--<el-form-item label="上级分类">
                <el-select v-model="model.parent">
                    <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id">

                    </el-option>
                </el-select>
            </el-form-item>-->
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="图标">
               <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers="getAuthHeaders()"
                :show-file-list="false"
                :on-success="afterUpload">
                <img v-if="model.icon" :src="model.icon" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<style>

</style>

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
        afterUpload(res){
            this.$set(this.model,'icon',res.url)
            // this.model.icon = res.url
        },
        async save(){     //save方法
            let res
            if(this.id){
                res = await this.$http.put(`rest/items/${this.id}`,this.model)
            }else{
                res = await this.$http.post('rest/items',this.model)
            }
            this.$router.push('/items/ItemsList')     //跳转路由到list
            this.$message({
            type:'success',
            message:'保存成功'
          })
        },
        async fetch(){  //fetch方法
            const res = await this.$http.get(`rest/items/${this.id}`)
            this.model=res.data
        },
    },
    created(){
        this.id && this.fetch()       //当存在id时执行fetch（）方法
    }
}
</script>
