<template>
    <div class="crud-functions">
        <router-link to="/" style="height: 0; display: block">
            <img src="../assets/instructions.svg" alt="instructios icon" class="instructions-icon">
        </router-link>
        <div class="title-wrapper">
            <img class="check-icon" src="../assets/check.svg" />
            <h1 class="title">TO DO LIST</h1>
        </div>
        <div class="boxes-wrapper" :class="{'boxes-wrapper-crear': isCrearClicked}">
            <div class="box-wrapper">
                <blackBox :title="'CREAR'" @click="crear()" :class="{crear: isCrearClicked}"/>
                <blackBox :title="'VER'" @click="ver()"/>
                <blackBox :title="'ACTUALIZAR'" @click="actualizar()"/>
                <blackBox :title="'BORRAR'" @click="borrar()"/>
            </div>
        </div>
    </div>
</template>

<script>
import blackBox from '../components/appPage/blackBox.vue'
export default {
    components: {
        blackBox
    },
    data() {
        return {
            isCrearClicked: false,
            isVerClicked: false,
            isActualizarClicked: false,
            isBorrarClicked: false
        };
    },
    methods: {
        crear() {
            if (this.isCrearClicked === false) {
                this.isCrearClicked = true,
                this.isVerClicked = false,
                this.isActualizarClicked = false,
                this.isBorrarClicked = false
            }
        },
        ver() {

        },
        actualizar() {

        },
        borrar() {

        }
    }
}
</script>

<style scoped lang="scss">
.crud-functions {
    background: var(--fondo, linear-gradient(180deg, #12C891 0%, #9C0064 99.98%, #696969 99.99%, #9C0064 100%));
    height: 100vh;

    .instructions-icon {
        padding: 10px 0 0 10px;
    }

    .title-wrapper {
        display: flex;
        gap: 15px;
        justify-content: center;
        align-items: center;
        min-height: 115px;

        .title {
            color: #FFF;
            font-family: Montserrat;
            font-size: 35px;
            font-weight: 700;
            margin: initial;
        }

        img {
            width: 30px;
        }
    }

    .boxes-wrapper {
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        height: calc(100% - 124px);
    }
}
</style>