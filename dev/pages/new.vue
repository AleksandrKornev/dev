<template>
  <div class="new__wrapper">
    <div 
      class="new__item"
      v-for="(item, index) in items" 
      :key="index"
      @click="route(item)"
    >
      <div class="new__item__text">{{ item.name }}</div>
      <div class="new__item__bg">
        <component :is="item.component" :isDefault="item.route == '/contacts' ? false : true " ></component>
      </div>
    </div>
  </div>
</template>

<script>
/* import Index from '@/pages/index';
import Second from '@/pages/second';
import Tab from '@/pages/tab';
import Contacts from '@/pages/index'; */

import Default from '@/layouts/default';

export default {
  name: "New",
  layout: 'two',
  components: {
    Default
  },
  data() {
    return {
      items: [
        {
          name: "Главная",
          route: '/',
          component: 'Default'
        },
        {
          name: "Вкладка",
          route: '/tab',
          component: 'Default'
        },
        {
          name: "Контакты",
          route: '/contacts',
          component: 'Default'
        },
        {
          name: "Вторая",
          route: '/second',
          component: 'Default'
        },
      ]
    }
  },
  methods: {
    route(item) {
      this.$router.push(item.route);
    }
  },
}
</script>

<style lang="scss">
  .new {
    &__wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 101vw;
      overflow: hidden;
    }

    &__item {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: .6s;
      opacity: 0.2;
      cursor: pointer;


      &__text {
        position: absolute;
        font-size: 3vw;
        transition: .5s;
      }

      &:hover {
        opacity: 1;
      }

      &:nth-child(1) {
        top: 0;

        & .new__item__bg {
          /* border-left: 50vw solid transparent; 
          border-right: 50vw solid transparent; 
          border-top: 50vh solid #000; 
          box-sizing: border-box;
          transform: translate(0, -25vh); */
          /* border-right: 71vw solid transparent; 
          border-top: 71vw solid #000; 
          transform: rotate(-135deg) translate(1vw, 0); */
          position: absolute;
          width: 71vw;
          height: 71vw;
          background: linear-gradient(45deg, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.4) 50%, transparent 50%, transparent 100%);
          transform: rotate(-45deg);
        }

        & .new__item__text {
          top: 25vw;
        }

        &:hover {
          & .new__item__text {
            top: 15vw;
            font-size: 4vw;
          }
        }
      }
      &:nth-child(2) {
        left: 0;
        top: 50vw;

        & .new__item__bg {
          position: absolute;
          width: 71vw;
          height: 71vw;
          background: linear-gradient(45deg, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.4) 50%, transparent 50%, transparent 100%);
          transform: rotate(-135deg);
        }

        & .new__item__text {
          left: 25vw;
        }

        &:hover {
          & .new__item__text {
            left: 15vw;
            font-size: 4vw;
          }
        }
      }
      &:nth-child(3) {
        right: 0;
        top: 50vw;

        & .new__item__bg {
          position: absolute;
          width: 71vw;
          height: 71vw;
          background: linear-gradient(-135deg, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.4) 50%, transparent 50%, transparent 100%);
          transform: rotate(-135deg);
        }

        & .new__item__text {
          right: 25vw;
        }

        &:hover {
          & .new__item__text {
            right: 15vw;
            font-size: 4vw;
          }
        }
      }

      &:nth-child(4) {
        bottom: 1%;

        & .new__item__bg {
          position: absolute;
          width: 71vw;
          height: 71vw;
          background: linear-gradient(-135deg, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.4) 50%, transparent 50%, transparent 100%);
          transform: rotate(-45deg);
        }

        & .new__item__text {
          bottom: 25vw;
        }

        &:hover {
          & .new__item__text {
            bottom: 15vw;
            font-size: 4vw;
          }
        }
      }
    }
  }
</style>