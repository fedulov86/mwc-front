import {defineStore} from "pinia"
import Tab from "@/models/Tab";

export type RootState = {
    tabs: Tab[];
    activeTabPath: null|string;
};

export default defineStore({
    id: "tabsStore",
    state: () =>
        ({
            tabs: [],
            activeTabPath: null
        } as RootState),

    actions: {
        createNewTab(tab: Tab) {
            if (!tab) return;

            this.tabs.push(tab);
            this.activeTabPath = tab.path
        },

        // updateTab(id: string, payload: Tab) {
        //     if (!id || !payload) return;
        //
        //     const index = this.findIndexById(id);
        //
        //     if (index !== -1) {
        //         this.Tabs[index] = generateFakeData();
        //     }
        // },

        deleteTab(path: string) {
            const index = this.findIndexById(path);

            if (index === -1) return;

            this.tabs.splice(index, 1);
        },

        findIndexById(url: string) {
            return this.tabs.findIndex((Tab) => Tab.path === url);
        },
        saveState() {
            localStorage.setItem(
                'mwc-tabs',
                JSON.stringify({
                    activeTabPath: this.activeTabPath,
                    tabs: this.tabs
                })
            )
        },

        loadState() {
            const stateString = localStorage.getItem('mwc-tabs');
            if(!stateString) return;
            const options = JSON.parse(stateString) as RootState;
            this.tabs = options.tabs;
            this.activeTabPath = options.activeTabPath;
        },
    },
});