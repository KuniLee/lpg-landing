<template>
  <a class="anchor" :id="$attrs.anchId"></a>
  <div class="back-margin">
    <h1 class="heading text-center">Отзывы</h1>
    <div class="bg-monstera">
      <div class="big-container">
        <div class="row justify-content-center position-relative unselectable">
          <div class="col-12 col-sm-8 col-md-6 col-lg-10">
            <div class="col-12">
              <swiper
                class="swiper-review"
                :pagination="{
                  dynamicBullets: true,
                }"
                :navigation="true"
                :modules="modules"
                :loop="true"
                :slidesPerView="1"
                :spaceBetween="16"
                :breakpoints="{
                  '1024': {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  '1400': {
                    slidesPerView: 2,
                    spaceBetween: 200,
                  },
                  '1900': {
                    slidesPerView: 2,
                    spaceBetween: 300,
                  },
                }"
              >
                >
                <swiper-slide
                  class="swiper-slide-review bg-mint"
                  v-for="review in reviews"
                  :key="review.id"
                >
                  <img
                    :src="require(`@/images/reviews/${review.id}.png`)"
                    :alt="`review_image${review.id}`"
                  />
                  <p class="subheading">{{ review.name }}</p>
                  <p>{{ review.text }}</p>
                </swiper-slide>
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
    const reviews = [
      {
        id: 1,
        name: 'Ира',
        text: 'Это самый быстрый и результативный способ похудения!  После родов у меня область живота и талии никак не поддавалась корректрировке. В течение трех месяцев я бегала по утрам и занималась в спортзале, но живот меня все равно не устраивал. Решила пройти курс LPG массажа. Делала курс из 8 процедур 3 раза в неделю. Эффект потрясающий, похудела на 7 см в талии. Кроме массажа заметно подтянулась кожа. Стала упругая. А самое главное поднялось настроение, ведь я снова стройная.',
      },
      {
        id: 2,
        name: 'Илона',
        text: 'Я посетила уже 6 сеансов. Честно, результатом довольна очень. Похудела по весам на 6 кг за 1,5 недели. Заметно ушли объемы, что не может не радовать. Бока и живот заметно подуменьшились. Так что советую LPG массаж всем, кого волнует проблема великолепной и подтянутой фигуры. Уходит целлюлит, кожа разглаживается. Думаю, через месяц добьюсь своей идеальной фигуры. Единственное но, что эта процедура не из дешевых, но красота требует жертв. И, самое главное, попасть к хорошему мастеру, это 100 % успеха.',
      },
      {
        id: 3,
        name: 'Юлия',
        text: 'По окончании курса в 10 процедур, особо не обременяя себя диетами я за три недели похудела на 4 кг и «уменьшилась» в объемах на 2 размера. Оккупировавший меня всю зиму целлюлит исчез бесследно, кожа стала упругой.Процедура, безусловно, дорогостоящая, но она стоит того. Но результат превосходный!Обработка тела пациента манипулами',
      },
      {
        id: 4,
        name: 'Олеся',
        text: 'Встретили хорошо, все обьяснили и рассказали. Салон занимается только похудением, лично для меня это плюсик.  Первое впечатление не понятное, как бы всасывает вакуумом,а потом привыкла. Мы совмещали разные процедуры, так как от этого эффект усиливается, как мне сказали. Синяков от процедур у меня не было. Итог: отходила пятнадцать раз и мне все очень нравится! подруги говорят, что я заметно преобразилась. Скинула 7 кг. Хочу еще 3. Заметно подтянулась фигура и кожа выглядит более плотной и молодой.',
      },
      {
        id: 6,
        name: 'Айнагуль',
        text: 'Отличный способ подправить фигуру за несколько сеансов. После 10 процедур убрались сантиметры в талии и, самое главное, на бедрах. Заметно разгладился целлюлит.',
      },
      {
        id: 5,
        name: 'Анастасия',
        text: 'Очень эффективная процедура! По окончании курса в 10 процедур, особо не обременяя себя диетами я за три недели похудела на 4 кг и «уменьшилась» в объемах на 2 размера. Оккупировавший меня всю зиму целлюлит исчез бесследно, кожа стала упругой. Процедура, безусловно, дорогостоящая, но она стоит того. Но результат превосходный!',
      },
    ]

    return {
      modules: [Navigation, Pagination],
      reviews,
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style lang="scss">
.bg-monstera {
  background-image: url(@/images/reviews/MonsteraSm.png);
  background-size: 768px;
  background-position: center 0;
  background-repeat: no-repeat;
  padding-top: 30px;
}
.swiper-review {
  .swiper-button-prev,
  .swiper-button-next {
    width: 56px;
    height: 57px;
    top: 35px;
  }
  .swiper-button-prev {
    left: 20px;
  }
  .swiper-button-next {
    right: 20px;
  }
  @include media-breakpoint-up(sm) {
    .swiper {
      margin-bottom: 30px;
    }
    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
      bottom: -20px;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
      content: url('@/images/results/prev-black.svg');
    }
    .swiper-button-prev {
      left: 20px;
    }
    .swiper-button-next {
      right: 20px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      top: 50%;
    }
  }
  @include media-breakpoint-up(md) {
    .swiper-button-prev {
      left: 10px;
    }
    .swiper-button-next {
      right: 10px;
    }
    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
      bottom: 0;
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
.swiper-slide-review {
  text-align: center;
  height: auto;

  border-radius: 20px;
  padding: 38px 29px;
  .subheading {
    margin-top: 24px;
    margin-bottom: 38px;
  }
  p {
    margin: 0;
  }
}
@include media-breakpoint-up(sm) {
  .bg-monstera {
    padding-top: 38px;
  }
}
@include media-breakpoint-up(xl) {
  .bg-monstera {
    padding-top: 50px;
  }
}
@include media-breakpoint-up(md) {
  .bg-monstera {
    background-image: url(@/images/reviews/monstera.png);
    background-size: contain;
  }
}
</style>
