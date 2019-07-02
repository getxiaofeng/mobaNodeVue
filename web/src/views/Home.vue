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
                <div class="py-2" v-for="(news,i) in category.newsList" :key="i">
                    <span>[{{news.categoryName}}]</span>
                    <span>|</span>
                    <span>{{news.title}}</span>
                    <span>{{news.date}}</span>
                </div>
            </template>
        </m-list-card>
        <m-card icon="menu" title="英雄列表"></m-card>
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
export default {
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: ".pagination-home"
                }
            },
            newsCats: [
                {
                    name: "热门",
                    newsList: new Array(5).fill(1).map(v => ({
                        categoryName: "公告",
                        title: "7月1日抢先服不停机更新公告",
                        date: "07/01"
                    }))
                },
                {
                    name: "新闻",
                    newsList: new Array(5).fill({}).map(v => ({
                        categoryName: "新闻",
                        title: "7月1日抢先服不停机更新公告",
                        date: "07/01"
                    }))
                },
                {
                    name: "热门",
                    newsList: new Array(5).fill({}).map(v => ({
                        categoryName: "公告",
                        title: "7月1日抢先服不停机更新公告",
                        date: "07/01"
                    }))
                },
                {
                    name: "热门",
                    newsList: new Array(5).fill({}).map(v => ({
                        categoryName: "公告",
                        title: "7月1日抢先服不停机更新公告",
                        date: "07/01"
                    }))
                },
                {
                    name: "热门",
                    newsList: new Array(5).fill({}).map(v => ({
                        categoryName: "公告",
                        title: "7月1日抢先服不停机更新公告",
                        date: "07/01"
                    }))
                }
            ]
        };
    }
};
</script>
 