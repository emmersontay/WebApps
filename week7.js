Vue.component('component1', {
    template: '<div>{{ message }}</div>',
    data: function () {
        return {
            message: 'This is my component 1'
        }
    }
});
Vue.component('component 2', {
    template: '<div>This is component 2</div>',
});
Vue.component('global', {
    template: '<div>This is global</div>',
});
var component1 = {
    template: '<div><global></global>This is component 1 in a global</div>',
};
var component2 = {
    template: '<div><component1></component1>This is component 2 in component 1</div>',
    component:{
        component1,
    }
};
var app = new Vue ({
    el: '#app',
    data: {
        text: 'These are my local and global components.',

    },
    components: {
        component1,
        component2,
    },
})