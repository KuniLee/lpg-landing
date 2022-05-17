<template>
  <div class="back">
    <div class="big-container">
      <div class="row">
        <div class="col-12 col-sm-6 d-flex flex-column justify-content-between">
          <h1 class="heading text-center">Противопоказания</h1>
          <div class="row">
            <ul class="list col-12 my-0">
              <template v-for="(item, index) in list" :key="item">
                <li class="list-item" v-if="index < 5">
                  {{ item }}
                </li>
              </template>
            </ul>
            <ul class="list col-12 my-0 mb-4 mb-sm-0">
              <template v-for="(item, index) in list" :key="item">
                <li class="list-item" v-if="index > 4">
                  {{ item }}
                </li>
              </template>
            </ul>
          </div>
        </div>

        <div class="col-12 col-sm-6">
          <img class="w-100" src="@/images/Contr_img.png" alt="" />
          <a class="btn btn-primary btn-lg w-100 mt-4" href="#" role="button"
            >Оставить заявку</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const list = [
      'Онкологические заболевания',
      'Беременность',
      'Нарушения гемостаза',
      'Эпилепсия',
      'Психические заболевания',
      'Варикозное расширение вен',
      'Свежие раны, шрамы на коже',
      'Грыжа внутренних органов',
      'Воспаленные лимфоузлы',
      'Раздражение на коже',
    ]
    return { list }
  },
}
</script>

<style lang="scss">
.back {
  background-color: $mint;
  padding-top: 8vh;
  padding-bottom: 8vh;
}
.list {
  list-style: none;
}

.list-item {
  line-height: 140%;
  color: $green;
  padding: 8px;
  font-size: 16px;
}
.contr-img {
}

.list-item::before {
  background-color: $green;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  content: '';
  float: left;
  margin: 2px 10px 0 0;
  overflow: hidden;
}

@include media-breakpoint-up(sm) {
}
@include media-breakpoint-up(md) {
  .list-item {
    padding: 10px;
    font-size: 18px;
  }
}
</style>
