<template>
  <div class="back bg-light-mint">
    <div class="big-container">
      <h1 class="heading text-center">Этапы процедуры</h1>
      <div class="row">
        <div v-for="stage in stages" :key="stage.id" class="col-12">
          <div class="row">
            <div class="col-1 d-sm-block d-none"></div>
            <div
              class="col-3 col-sm-1 offset-sm-2 d-flex align-items-center position-relative"
            >
              <div class="line position-absolute"></div>
              <div
                class="circle text-center position-absolute top-50 start-50 translate-middle"
              >
                {{ stage.id }}
              </div>
            </div>
            <div class="col-9 col-sm-8">
              <span class="stage-title">{{ stage.title }}</span
              ><br />
              <p>{{ stage.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const stages = [
      {
        id: 1,
        title: 'Консультация',
        text: 'Специалист проводит осмотр проблемных участков тела',
      },
      {
        id: 2,
        title: 'Подготовка',
        text: 'Пациент надевает индивидуальный костюм',
      },
      {
        id: 3,
        title: 'Массаж',
        text: 'Обработка тела пациента манипулами',
      },
      {
        id: 4,
        title: 'Рекомендации',
        text: 'Специалист дает рекомендации как улучшить эффект от процедуры',
      },
    ]
    return { stages }
  },
}
</script>

<style lang="scss">
.bg-light-mint {
  background-color: $light-pink;
}
.circle {
  background: #f0e4e4;
  border: 1px solid $black;
  border-radius: 50%;

  width: 50px;
  height: 50px;
  font-size: 36px;
  padding: auto;
  line-height: 48px;
}
.line {
  width: 1px; /* Line width */
  background-color: black;
  height: 100%;

  left: 50%;
  position: absolute;
}

.stage-title {
  font-size: 20px;
  line-height: 140%;
  margin-top: 6px;
}
</style>
