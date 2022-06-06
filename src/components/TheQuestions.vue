<template>
  <a class="anchor" :id="$attrs.anchId"></a>
  <div class="back-margin">
    <h1 class="heading text-center">Часто задаваемые вопросы</h1>

    <div class="big-container">
      <div class="row justify-content-center position-relative unselectable">
        <div
          class="accordion col-12 col-lg-10 col-xl-8"
          id="accordionFlushExample"
        >
          <div
            v-for="question in questions"
            :key="question.id"
            class="accordion-item"
          >
            <h2 class="accordion-header" :id="`flush-heading${question.id}`">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#flush-collapse${question.id}`"
                aria-expanded="false"
                :aria-controls="`flush-collapse${question.id}`"
              >
                <span class="subheading"> {{ question.title }}</span>
              </button>
            </h2>
            <div
              :id="`flush-collapse${question.id}`"
              class="accordion-collapse collapse"
              :aria-labelledby="`flush-heading${question.id}`"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <p class="mb-0">{{ question.text }}</p>
              </div>
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
    const questions = [
      {
        id: 1,
        title: 'Сколько надо процедур?',
        text: 'Стандартный курс массажа - 10 сеансов. Все зависит от  ваших исходных данных и тех целей, к которым стремитесь, а также от обмена веществ, физиологии и образа жизни',
      },
      {
        id: 2,
        title: 'Зачем нужен костюм?',
        text: 'Костюм позволяет безболезненно работать на больших мощностях и не растягивать кожу. К тому же он обеспечивает гигиеничность процедуры.',
      },
      {
        id: 3,
        title: 'Это больно?',
        text: 'Боли и синяков быть не должно! При возникновении болевых ощущений нужно рекомендуется уменьшать мощность аппарата.',
      },
    ]
    return { questions }
  },
}
</script>

<style lang="scss">
.accordion-item {
  border: none;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 14px;
}
.accordion-item:last-of-type {
  margin-bottom: 0;
}
.accordion-item * {
  background-color: $light-pink;
}

.accordion-button:not(.collapsed) {
  background-color: $light-pink;
  .subheading {
    color: $black;
  }
}
.accordion-button:focus {
  box-shadow: none;
}

.accordion-button,
.accordion-body {
  padding: 20px;
  .subheading {
    color: $grey;
  }
}
@include media-breakpoint-up(sm) {
  .accordion-button,
  .accordion-body {
    padding: 22px;
  }
}
@include media-breakpoint-up(lg) {
  .accordion-button,
  .accordion-body {
    padding: 40px;
  }
}
.accordion-body {
  padding-top: 0;
}
</style>
