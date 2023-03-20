<template>
  <p>Viewer</p>
  <p>Prop: {{catalogCode}}</p>
  <p>DefineProps: {{test}}</p>
</template>

<script lang="ts">
export default {
  name: "CatalogView"
}
</script>

<script lang="ts" setup>
import useCatalogsStore from "@/stores/catalogsStore";
interface Props {
  catalogCode: string
}
import {defineProps, reactive} from "vue";
import { storeToRefs } from "pinia";

const store = useCatalogsStore();
const props = defineProps<Props>()
console.log('hello script setup')
const test = props.catalogCode + ' trest';

// const catalog = store.getCatalogByCode(props.catalogCode)
// onMounted(() => {})
</script>

<style scoped>

</style>