<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>
