import idb from '@/api/idb';

export default {
    actions: {
        async deleteCategory(context, category) {
            await idb.deleteCategory(category);
            this.dispatch("updateDelete", category)
        },
        async updateDelete (context, category) {
            const index = context.state.categories.findIndex( i => i.id === category.id)
            index != -1 ? context.state.categories.splice(index, 1) : false;
        },
        async updateAddedCategory (context, category) {
                await context.state.categories.push(category)
        },
        async updateCategory(context) {
            context.state.categories = [];
            let categories = await idb.getCategories();
            context.state.categories = categories
            return context.state.categories
        },
        async saveCategory(context, category) {
            await idb.saveCategory(category);
            if(!category?.id ) { // if id  = update / if !id = add and push category in state
                const categories = await idb.getCategories();
                const lastAddedCategory = categories[categories.length - 1] // need to add in state category with id
                this.dispatch("updateAddedCategory", lastAddedCategory);
            }
        },
        async updateAddedCard(context, currentData){
            const categories = await idb.getCategories();
            const currentCategoryIndex = categories.findIndex(item => item.id === currentData.categoryId)
            const currentCardIndex = categories[currentCategoryIndex].card.findIndex(item => item.id === currentData.card.id)
            if(currentData.newTitle) {
                context.state.categories[currentCategoryIndex].card[currentCardIndex].title = currentData.newTitle
            } else {
                context.state.categories[currentCategoryIndex].card.push(currentData.card)
            }
        },
        async updateDeletedCard (context, currentDataDelete) {
            const currentCategoryIndex =  context.state.categories.findIndex(item => item.id === currentDataDelete.categoryId)
            const currentCardIndex = context.state.categories[currentCategoryIndex].card.findIndex(item => item.id === currentDataDelete.id)
            context.state.categories[currentCategoryIndex].card.splice(currentCardIndex,1)
            console.log(context.state.categories) // удаляется верный элемент но в темплейте остаются старые тайтлы
        },
        async saveCard(context, currentData) {
            await idb.saveCard(currentData);
            await this.dispatch("updateAddedCard", currentData)
        },
        async deleteCard(context, currentDataDelete){
            await idb.deleteCard(currentDataDelete);
            await this.dispatch("updateDeletedCard", currentDataDelete)
        }
    },
    mutations: {
    },
    state: {
        categories:[{ name: "default", title: "default"}],
        default: { name: "default", title: "default"}
    },
    getters: {
        getCategories(state){
            return state.categories
        }
    }
}