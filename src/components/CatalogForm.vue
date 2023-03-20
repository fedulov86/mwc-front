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

<script>
export default {
  name: "CatalogForm"
}
</script>

<script lang="ts" setup>
import useCatalogsStore from "@/stores/catalogsStore";
import { storeToRefs } from "pinia";
import Catalog from "@/models/Catalog";
import {reactive} from "vue";
interface Props {
  catalog: Catalog
}

const props = withDefaults(defineProps<Props>(), {
  catalog: new Catalog()
})

const catalog = reactive(props.catalog)
</script>

<style scoped>

</style>