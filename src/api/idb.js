const DB_NAME = 'categoriesdb';
const DB_VERSION = 1;
let DB;
export default {

    async getDb() {
        return new Promise((resolve, reject) => {

            if(DB) { return resolve(DB); }
            console.log('OPENING DB', DB);
            let request = window.indexedDB.open(DB_NAME, DB_VERSION);

            request.onerror = e => {
                console.log('Error opening db', e);
                reject('Error');
            };

            request.onsuccess = e => {
                DB = e.target.result;
                resolve(DB);
            };

            request.onupgradeneeded = e => {
                console.log('onupgradeneeded');
                let db = e.target.result;
                console.log("adfgegenkejnvkjewrnbvjewnrbv")
                db.createObjectStore("categories", { autoIncrement: true, keyPath:'id' }).createIndex("hours", "hours", { unique: false });
            };
        });
    },
    async deleteCategory(category) {

        let db = await this.getDb();

        return new Promise(resolve => {

            let trans = db.transaction(['categories'],'readwrite');
            trans.oncomplete = () => {
                resolve();
            };

            let store = trans.objectStore('categories');
            store.delete(category.id);
        });
    },
    async getCategories() {

        let db = await this.getDb();

        return new Promise(resolve => {
            let trans = db.transaction(['categories'],'readonly');
            trans.oncomplete = () => {
                resolve(categories);
            };
            let store = trans.objectStore('categories');
            let categories = [];

            store.openCursor().onsuccess = e => {
                let cursor = e.target.result;
                if (cursor) {
                    categories.push(cursor.value)
                    cursor.continue();
                }
            };
        });
    },

    async saveCategory(categories) {
        let db = await this.getDb();
        return new Promise(resolve => {

            let trans = db.transaction(['categories'],'readwrite');
            trans.oncomplete = () => {
                resolve();
            };

            let store = trans.objectStore('categories');
            store.put(categories)
        });
    },
    async saveCard(currentData) {
        let db = await this.getDb();
        return new Promise(resolve => {

            let trans = db.transaction(['categories'],'readwrite');
            trans.oncomplete = () => {
                resolve();
            };
            let store = trans.objectStore('categories');
            const openCursorReq = store.openCursor(IDBKeyRange.only(currentData.categoryId));
            openCursorReq.onsuccess = (event) => {
                const cursor = event.target.result;
                let oldValue = cursor.value; // array with old card data
                if(currentData?.newTitle){
                oldValue.card[currentData.card.id].title = currentData.newTitle
                    console.log(1)
                } else {
                    if (oldValue.card.length) {
                        const id = oldValue.card[oldValue.card.length - 1].id + 1
                        currentData.card.id = id
                    }
                    oldValue.card.push(currentData.card)
                }
                const updateRequest = cursor.update(oldValue);
                updateRequest.onerror = updateRequest.onblocked = () => {
                    console.log('Error updating');
                    // eslint-disable-next-line no-undef
                    reject("Error");
                };

                updateRequest.onsuccess = function () {
                    resolve();
                };
            }
        });


    },
    async deleteCard(currentData) {

        let db = await this.getDb();
        return new Promise(resolve => {

            let trans = db.transaction(['categories'],'readwrite');
            trans.oncomplete = () => {
                resolve();
            };
            let store = trans.objectStore('categories');
            const openCursorReq = store.openCursor(IDBKeyRange.only(currentData.categoryId));
            openCursorReq.onsuccess = (event) => {
                const cursor = event.target.result;
                let oldValue = cursor.value; // array with old card data
                const deleteIndexCard = oldValue.card.findIndex(item => item.id === currentData.id)
                    oldValue.card.splice(deleteIndexCard, 1)

                const updateRequest = cursor.update(oldValue);
                updateRequest.onerror = updateRequest.onblocked = () => {
                    console.log('Error updating');
                    // eslint-disable-next-line no-undef
                    reject("Error");
                };

                updateRequest.onsuccess = function () {
                    resolve();
                };
            }
            //const openCursorReq = store.openCursor(IDBKeyRange.only(categoryData.id));
            // openCursorReq.onsuccess = (event) => {
            //     // const cursor = event.target.result;
            //     // let oldValue = cursor.value; // глянуть возможно это все изза того что передаю весь обьект с всем массивом а не только нужный айтем
            //     // console.log("oldValue",oldValue.value) //понять как старое значение изменить на новое а не запушить новое в массив
            //     // oldValue.card.push(categoryData.card)
            //     // console.log(store.get(categoryData.id))
            //     // const updateRequest = cursor.update(oldValue);
            //     // console.log(updateRequest)
            //
            //     updateRequest.onerror = updateRequest.onblocked = () => {
            //
            //         console.log('Error updating');
            //         // eslint-disable-next-line no-undef
            //         reject("Error");
            //     };
            //
            //     updateRequest.onsuccess = function () {
            //         resolve();
            //     };
            // }




            // console.log(categoryData)
            // console.log(store)
            //store.put(categoryData)
        });


    },
}