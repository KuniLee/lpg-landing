<template>
  <div class="back big-container">
    <a class="anchor" :id="$attrs.anchId"></a>
    <div class="row align-items-center">
      <h1 class="col-12 col-xl-3 heading text-center">
        Результаты наших клиентов
      </h1>
      <div class="col-12 col-xl-9">
        <div class="row justify-content-center position-relative unselectable">
          <div class="col-md-10">
            <div class="col-12">
              <swiper
                class="swiper-result"
                :pagination="{
                  dynamicBullets: true,
                }"
                :navigation="true"
                :modules="modules"
                :loop="true"
                :slidesPerView="'auto'"
                :spaceBetween="16"
              >
                >
                <swiper-slide
                  class="swiper-slide-result"
                  v-for="(img, idx) in 8"
                  :key="img"
                  ><img
                    :src="require(`@/images/results/${idx + 1}.png`)"
                    :alt="`result_image${idx + 1}`"
                /></swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { Navigation, Pagination } from 'swiper'
export default {
  setup() {
    return {
      modules: [Navigation, Pagination],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/slider';

.swiper-button-prev,
.swiper-button-next {
  width: 56px;
  height: 57px;
}
.swiper-button-prev {
  left: 20px;
}
.swiper-button-next {
  right: 20px;
}

.swiper-result {
  height: 360px;

  @include media-breakpoint-up(md) {
    .swiper {
      margin-bottom: 30px;
    }

    .swiper-button-prev:after,
    .swiper-button-next:after {
      content: url('@/images/results/prev-black.svg');
    }
    .swiper-button-prev {
      left: 10px;
    }
    .swiper-button-next {
      right: 10px;
    }
  }
  @include media-breakpoint-up(lg) {
    .swiper-button-prev {
      left: 30px;
    }
    .swiper-button-next {
      right: 30px;
    }
  }
}
.swiper-slide-result img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  text-align: center;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
@media (min-width: 400px) {
  .swiper-slide-result {
    width: 360px;
  }
}
</style>
