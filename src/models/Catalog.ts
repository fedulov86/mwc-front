import Tab from "@/models/Tab";

export default class Catalog {
    constructor(
        public documentsCount: number = 0,
        public description: string = '',
        public nameField: string = '',
        public name: string = '',
        public code: string = '',
        public isTree: boolean = false
    ) {
    }
}