<template>
    <div class="landing-wrapper">
        <div class="title-icon-wrapper">
            <img class="check-icon" src="../assets/check.svg" />
            <h1 class="title">TO DO LIST</h1>
        </div>
        <h2 class="subtitle">Haz una lista de tareas de forma sencilla con tan solo 4 tareas 👀</h2>
        <div class="cards-wrapper">
            <div class="card-wrapper" v-for="card in cards" :key="card.id">
                <card :title="card.title" :description="card.description"></card>
            </div>
        </div>
        <router-link to="/app-page" class="button-wrapper">
            <button class="cta-landing">COMENCEMOS 🚀</button>
        </router-link>
    </div>
</template>

<script>
import card from "../components/landingPage/landingCard.vue"
export default {
    components: { card },
    data() {
        return {
            cards: [{
                id: 1,
                title: "CREAR",
                description: "Comienza por crear tus tareas! Podrás definir el nombre y añadir una descripción"
            },
            {
                id: 2,
                title: "VER",
                description: "¿Quieres ver la lista que haz hecho? Entonces utiliza esta opción!"
            },
            {
                id: 3,
                title: "ACTUALIZAR",
                description: "¿Algun error de ortografía? No te preocupes, siempre puedes editar las tareas que haz creado",
            },
            {
                id: 4,
                title: "BORRAR",
                description: "Si ya haz completado una tarea, quizás sea tiempo de borrarla!"
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.landing-wrapper {
    background: var(--fondo, linear-gradient(180deg, #12C891 0%, #9C0064 99.98%, #696969 99.99%, #9C0064 100%));
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    .title-icon-wrapper {
        display: flex;
        justify-content: center;
        padding-top: 28px;
        padding-bottom: 16px;
        gap:13px;

        .title {
            margin: initial;
            color: #FFF;
            font-size: 26px;
            font-family: 'Montserrat';
            font-weight: 700;
        }
    }

    .subtitle {
        font-size: 12px;
        font-family: 'Poppins';
        font-style: normal;
        text-align: center;
        color: white;
        padding-bottom: 25px;
        margin: 0 20px;
        font-weight: 400;
    }

    .cards-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .button-wrapper{
        display: flex;
        justify-content: center;
        text-decoration: none;
        .cta-landing {
        border-radius: 6px;
        background: linear-gradient(90deg, #12C891 0%, #C206A4 100%);
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.20);
        color: white;
        font-size: 26px;
        font-family: Montserrat;
        font-weight: 700;
        padding:22px 22px;
        border: none;
        margin: 25px 35px;
    }
    }
}
</style>