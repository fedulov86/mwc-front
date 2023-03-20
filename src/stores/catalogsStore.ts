import {defineStore} from "pinia"
import {getCatalogs} from "@/api/getCatalogs";
import Catalog from "@/models/Catalog";
import Tab from "@/models/Tab";

interface State {
    catalogs: Catalog[],
    // tabs: Tab[],
    // activeTabPath: string | null,
}

export default defineStore(
    'catalogsStore',
    {
        state: (): State => {
            return {
                catalogs: [],
                // columns: {},
                // selectedCatalogs: [],
                // tabs: [],
                // activeTabPath: null,
                // types: [],
                // filtersCache: {}
            }
        },
        getters: {
            getCatalogByCode: (state: State) => {
                return (code: string): Catalog => state.catalogs.find((c: Catalog) => c.code === code) || new Catalog()
            },
            // hasTabs(): boolean {
            //     return (this.tabs.length !== 0);
            //     // selectedCatalogData: state =>
            //     //     state.catalogs.find(catalog => catalog._id === state.activeTab)
            // },
            // activeTab(): Tab | undefined {
            //     if (this.activeTabPath === null) {
            //         return undefined;
            //     }
            //     return this.tabs.find((t: Tab) => t.path === this.activeTabPath)
            // }
        },
        actions: {
            async loadCatalogs() {
                try {
                    this.catalogs = await getCatalogs();
                } catch (err) {
                    this.catalogs = [];
                    // this.columns = {};
                    throw err
                }
            },
        }
    })