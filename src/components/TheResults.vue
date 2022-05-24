<template>
  <div class="back big-container">
    <div class="row align-items-center">
      <h1 class="col-12 col-xl-3 heading text-center">
        Результаты наших клиентов
      </h1>
      <div class="col-12 col-xl-9">
        <div class="row justify-content-center position-relative">
          <div class="col-md-10">
            <div class="col-12">
              <swiper
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
                <swiper-slide v-for="(img, idx) in 8" :key="img"
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
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
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

.swiper-button-prev:after,
.swiper-button-next:after {
  content: url('@/images/results/prev.svg');
}
.swiper-button-next:after {
  transform: scale(-1, 1);
}

.swiper {
  width: 100%;
  height: 360px;
  margin-bottom: 20px;
  position: static;
}

.swiper-slide {
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
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background: $grey;
  opacity: 1;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next,
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  transform: scale(1);
  background: transparent;
  border: 1px solid $grey;
  opacity: 1;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next,
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  background: transparent;
  border: 1px solid $grey;
  opacity: 1;
}

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: -20px;
}

@include media-breakpoint-up(md) {
  .swiper {
    margin-bottom: 30px;
  }
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0;
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
  .swiper {
    margin-bottom: 40px;
  }
}
@media (min-width: 400px) {
  .swiper-slide {
    width: 360px;
  }
}
</style>
