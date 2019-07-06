<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide>
                <img class="w-100" src="../assets/images/fd2d3e636e22ff8adf769060d15fcd21.jpeg" alt>
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/images/115508ceaf06034694207114258ac83c.jpeg" alt>
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/images/e79fcfe4c1cf569573ff75995aead39a.jpeg" alt>
            </swiper-slide>
            <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
        </swiper>
        <!-- end swiper -->
        <div class="nav-icons bg-white mt-3 text-center pt-3">
            <div class="d-flex flex-wrap">
                <div class="nav-item mb-3 text-grey-1" v-for="n in 10" :key="n">
                    <i class="sprite sprite-news"></i>
                    <div class="py-2">爆料站</div>
                </div>
            </div>
            <div class="bg-light py-2 fs-sm text-grey-1">
                <i class="sprite sprite-arrow mr-1"></i>
                <span>收起</span>
            </div>
        </div>
        <!-- end nav-icons -->

        <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
            <template #items="{category}">
                <router-link tag="div" 
                :to="`/articles/${news._id}`" 
                class="py-2 fs-lg d-flex" 
                v-for="(news,i) in category.newsList" 
                :key="i">
                    <span class="text-info">[{{news.categoryName}}]</span>
                    <span class="px-2">|</span>
                    <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
                    <span class="text-grey fs-sm">{{news.createdAt | date}}</span>
                </router-link>
            </template>
        </m-list-card>
        <!-- end newslist -->

        <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
            <template #items="{category}">
                <div class="d-flex flex-wrap" style="margin:0,-0.5rem;">
                    <router-link
                    tag="div" 
                    :to="`/heroes/${hero._id}`"
                    class="p-2 text-center"  
                    style="width:20%;"
                    v-for="(hero,i) in category.heroList" 
                    :key="i">
                        <img :src="hero.avatar" alt="" class="w-100">
                        <div>{{hero.name}}</div>
                    </router-link>
                </div>
            </template>
        </m-list-card>
        <!-- end herolist -->
        <m-card icon="menu" title="英雄列表"></m-card>
        <m-card icon="menu" title="英雄列表"></m-card>
        <m-card icon="menu" title="英雄列表"></m-card>
    </div>
</template> 

<style lang="scss">
@import "../assets/style/variables";
.pagination-home {
    .swiper-pagination-bullet {
        opacity: 1;
        border-radius: 0.1538rem;
        background-color: map-get($colors, "white");
        &.swiper-pagination-bullet-active {
            background-color: map-get($colors, "info");
        }
    }
}
.nav-icons {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item {
        width: 25%;
        border-left: 1px solid $border-color;
        &:nth-child(4n + 1) {
            border-left: none;
        }
    }
}
</style>

<script>
import dayjs from "dayjs";
export default {
    filters: {
        date(val) {
            return dayjs(val).format("MM/DD");
        }
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: ".pagination-home"
                }
            },
            newsCats: [],
            heroCats: []
        };
    },
    methods: {
        async fetchNewsCats() {
            const res = await this.$http.get("news/list");
            this.newsCats = res.data;
        },
        async fetchHeroCats() {
            const res = await this.$http.get("heroes/list");
            this.heroCats = res.data;
        }
    },
    created() {
        this.fetchNewsCats(), 
        this.fetchHeroCats();
    }
};
</script>
 