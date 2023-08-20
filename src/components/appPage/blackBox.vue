<template>
  <div class="black-box">
    <span class="title-black-box">{{ title }}</span>
  </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
.black-box {
    background-color: #323232;
    border-bottom: 4px solid #12C891;
    height: 100%;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    justify-content: center;
    span {
        color: white; 
        font-weight: 700;
        font-size: 26px;
        font-family: Montserrat;  
    }
}
</style>