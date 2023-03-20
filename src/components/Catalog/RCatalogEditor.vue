<template>
  <catalog-editor :catalog=""
</template>

<script lang="ts">
export default {
  name: "RCatalogEditor"
}
</script>

<script lang="ts" setup>
import CatalogEditor from "@/components/Catalog/CatalogEditor.vue";
import useCatalogsStore from "@/stores/catalogsStore";
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const store = useCatalogsStore();
</script>
