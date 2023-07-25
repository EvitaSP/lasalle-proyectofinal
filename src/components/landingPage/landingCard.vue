<template>
    <div class="card-background">
        <div class="card-landing-grid">
            <h3 class="title-card-landing">{{ this.title }}</h3>
            <p class="description-card-landing">{{ this.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String
    }
}
</script>

<style lang="scss" scoped>
.card-background {
    min-height: 88px;
    background-color: rgba(238, 179, 217, 0.21);
    padding:20px;
    align-items: center;
    display: flex;

    .card-landing-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap:50px;
        align-items: center;
        justify-items: center ;

        h3 {
            font-size: 22px;
            font-family: Montserrat;
            margin:initial;
            font-weight: 700;
            color: white;
            justify-content: center;

        }

        p {
            font-size: 12px;
            justify-content: center;
            margin:initial;
            font-family: Poppins;
            font-style: normal;
            font-weight: 400;
            color: white;
        }
    }
}</style>