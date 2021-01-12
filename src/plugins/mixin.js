const helper = {
    clearObject(obj) {
        for (let prop in obj) {
            delete obj[prop];
        }
        return obj;
    } 
}

export default {
    methods: helper
};