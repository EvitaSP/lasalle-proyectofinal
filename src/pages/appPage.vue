<template>
    <div class="crud-functions">
        <h1 class="read-title">MI LISTA</h1>
        <div class="create">
            <input type="text" class="create-input" placeholder="Nombre de la tarea" v-model="tarea"
                @keyup.enter="agregarTarea">
            <button class="create-button" @click="agregarTarea">CREAR</button>
        </div>
        <div class="read">
            <ul class="lista-tareas">
                <li class="lista-tarea" v-for="(tarea, index) in tareas" :key="index">{{ tarea }}
                    <img src="../assets/delete.png" alt="" class="delete-icon" @click="borrarTarea(index)">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tarea: '',
            tareas: []
        };
    },
    methods: {
        agregarTarea() {
            if (this.tarea !== '') {
                this.tareas.push(this.tarea)
                this.tarea = ''
            }
        },
        borrarTarea(index) {
            this.tareas.splice(index, 1);
        }
    }
}
</script>

<style scoped lang="scss">
.crud-functions {
    background: var(--fondo, linear-gradient(180deg, #12C891 0%, #9C0064 99.98%, #696969 99.99%, #9C0064 100%));
    height: 100vh;
    .read-title {
            color: #FFF;
            font-size: 26px;
            font-family: 'Montserrat';
            font-weight: 700;
            margin:initial;
            margin-bottom:20px;
            padding-top:20px;
            text-align: center;
        }

    .create {
        display: flex;
        flex-direction: column;
        gap:15px;
        padding-left:20px;
        input{
            border-radius: 2px;
            width: fit-content;
            min-width: 60px;
            border:none;
            min-height:25px;
        }

        button {
            border-radius: 6px;
            background: blueviolet;
            width: fit-content;
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.20);
            color: white;
            font-size: 13px;
            font-family: Montserrat;
            font-weight: 700;
            padding: 7px 10px;
            border: none;
        }
    }

    .read {
        ul {
            padding:initial;
            padding-left:20px;
            li{
                font-family: Montserrat;
                font-size:16px;
                color:#FFF;
                list-style: none;
                margin-bottom:5px;
                
            }
            img {
                width: 20px;
            }
        }
    }
}
</style>