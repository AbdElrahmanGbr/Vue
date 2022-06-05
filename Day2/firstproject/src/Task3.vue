<template>
<div class="container">
    <div class="row">
        <div class="col-12 py-2 my-2">
            <HeaderComponent/>
        </div>
    </div>
    <div class="row my-2">
        <div class="col-4"> 
            <LinksComponent/>
        </div>
    </div>
        <div class="row">
        <div class="col-12">
            <FooterComponent/>
        </div>
    </div>

</div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import LinksComponent from "./components/LinksComponent.vue";
export default {
    components: { HeaderComponent, FooterComponent, LinksComponent }
}
</script>