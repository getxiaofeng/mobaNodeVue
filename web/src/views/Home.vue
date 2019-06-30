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

        <m-card icon="menu" title="新闻资讯">
            <div class="card-body pt-3">
                <div class="nav jc-between">
                    <div class="nav-item active">
                        <div class="nav-link">热门</div>
                    </div>
                    <div class="nav-item">
                        <div class="nav-link">新闻</div>
                    </div>
                    <div class="nav-item">
                        <div class="nav-link">新闻</div>
                    </div>
                    <div class="nav-item">
                        <div class="nav-link">新闻</div>
                    </div>
                    <div class="nav-item">
                        <div class="nav-link">新闻</div>
                    </div>
                </div>
                <div class="pt-3">
                    <swiper>
                        <swiper-slide v-for="s in 5" :key="s">
                            <div class="py-2" v-for="n in 5" :key="n">
                                <span>[新闻]</span>
                                <span>|</span>
                                <span>【已开服】6月26日正式服“稷下星之队”版本更新公告</span>
                                <span>6/30</span>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </m-card>
        <m-card icon="menu" title="英雄列表"></m-card>
        <m-card icon="menu" title="精彩视频"></m-card>
        <m-card icon="menu" title="图文攻略"></m-card>
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
            swiperSlides: [1, 2, 3, 4, 5]
        };
    }
};
</script>
