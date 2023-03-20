<template>
  <a-form>
    <a-row>
      <a-form-item
          label="name"
          name='Название справочника'
          :rules="[{ required: true, message: 'Введите название справочника' }]"
      >
        <a-input
            :value="catalog.name"
            :name="name"
        />
      </a-form-item>
    </a-row>
  </a-form>
</template>

<script lang="ts">
export default {
  name: "CatalogEditor"
}
</script>

<script lang="ts" setup>
import useCatalogsStore from "@/stores/catalogsStore";
import { storeToRefs } from "pinia";
import Catalog from "@/models/Catalog";
import {reactive, defineProps} from "vue";
interface Props {
  catalogCode: string
}

const store = useCatalogsStore();

const props = defineProps<Props>()

const catalog = reactive(store.getCatalogByCode(props.catalogCode))
</script>

<style scoped>

</style>