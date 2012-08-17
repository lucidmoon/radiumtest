var RT = require('app');

RT.Router = Em.Router.extend({
    
    enableLogging: true,

    root: Em.Route.extend({
        
        index: Em.Route.extend({
            route: '/',
            redirectsTo: 'home'
        }),

        home: Em.Route.extend({
            route: '/home',
            
            redirectToFeed: function(router, event){
                router.transitionTo('feed');
            },

            connectOutlets: function(router, context){
                router.get('applicationController').connectOutlet('home',{action:'home'});
            }
        }),

        feed: Em.Route.extend({
            route: '/feed',

            redirectToHome: function(router, event){
                router.transitionTo('home');
            },

            connectOutlets: function(router, context){

                RT.set("datebookController", Em.ArrayController.create({
                    sortProperties: ['timestamp'],
                    sortAscending: false
                }));

                RT.set("historyController", Em.ArrayController.create({
                    sortProperties: ['timestamp'],
                    sortAscending: false
                }));

                $.get('/feed.json', function(data) {
                    var datebook = [],
                        history = [];

                    datebook = _.filter(data, function(item) {
                        if (item.tag === 'scheduled_for') {
                            return true;
                        }
                        return false;
                    });
                            
                    history = _.filter(data, function(item) {
                        if (item.tag != 'scheduled_for') {
                            return true;
                        }
                        return false;
                    });

                    RT.get("datebookController").set('content', datebook);
                    RT.get("historyController").set('content', history);                    

                    router.get('applicationController').connectOutlet('feed', {datebook:RT.get("datebookController"), history:RT.get("historyController"),action:'feed'});
                });
                

            }
        })
    })
})