<template>
    <div>
        <h1>{{id?'编辑':'新建'}}文章</h1>
        <el-form @submit.native.prevent="save" label-width="100px">
            <el-form-item label="所属分类">
                <el-select v-model="model.categories" multiple>
                    <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="model.title"></el-input>
            </el-form-item>
             <el-form-item label="详情">
                <vue-editor useCustomImageHandler @imageAdded="handleImageAdded" v-model="model.body"></vue-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import axios from "axios";
export default {
    props:{
        id:{}
    },
    data(){
        return{
            model:{},
            categories:[]
        }
    },
    components:{
        VueEditor
    },
    methods:{
        async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
        // An example of using FormData
        // NOTE: Your key could be different such as:
        // formData.append('file', file)
 
        const formData = new FormData();
        formData.append("file", file);

        const res= await this.$http.post('upload',formData)
        Editor.insertEmbed(cursorLocation, "image", res.data.url);    //应该是光标位置上传图片， 参数url
            resetUploader();
        },
        /*axios({
          url: "https://fakeapi.yoursite.com/images",
          method: "POST",
          data: formData
        })
          .then(result => {
            let url = result.data.url; // Get url from response
            Editor.insertEmbed(cursorLocation, "image", url);
            resetUploader();
          })
          .catch(err => {
            console.log(err);
          });
        },*/
        async save(){     //save方法
            let res
            if(this.id){
                res = await this.$http.put(`rest/articles/${this.id}`,this.model)
            }else{
                res = await this.$http.post('rest/articles',this.model)
            }
            this.$router.push('/articles/ArticlesList')     //跳转路由到list
            this.$message({
            type:'success',
            message:'保存成功'
          })
        },
        async fetch(){  //fetch方法
            const res = await this.$http.get(`rest/articles/${this.id}`)
            this.model=res.data
        },
        async fetchcategories(){
            const res = await this.$http.get(`rest/categories`)
            this.categories=res.data
        }
    },
    created(){
        this.fetchcategories()
        this.id && this.fetch()       //当存在id时执行fetch（）方法
    }
}
</script>
