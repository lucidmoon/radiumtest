(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle) {
    for (var key in bundle) {
      if (has(bundle, key)) {
        modules[key] = bundle[key];
      }
    }
  }

  globals.require = require;
  globals.require.define = define;
  globals.require.brunch = true;
})();

window.require.define({"app": function(exports, require, module) {
  // Application bootstrapper

  module.exports = Em.Application.create();
  
}});

window.require.define({"application": function(exports, require, module) {
  var Application, Chaplin, HeaderController, Layout, SessionController, mediator, routes,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Chaplin = require('chaplin');

  mediator = require('mediator');

  routes = require('routes');

  SessionController = require('controllers/session_controller');

  HeaderController = require('controllers/header_controller');

  Layout = require('views/layout');

  module.exports = Application = (function(_super) {

    __extends(Application, _super);

    function Application() {
      return Application.__super__.constructor.apply(this, arguments);
    }

    Application.prototype.title = 'Brunch example application';

    Application.prototype.initialize = function() {
      Application.__super__.initialize.apply(this, arguments);
      this.initDispatcher();
      this.initLayout();
      this.initMediator();
      this.initControllers();
      this.initRouter(routes);
      return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
    };

    Application.prototype.initLayout = function() {
      return this.layout = new Layout({
        title: this.title
      });
    };

    Application.prototype.initControllers = function() {
      new SessionController();
      return new HeaderController();
    };

    Application.prototype.initMediator = function() {
      Chaplin.mediator.user = null;
      return Chaplin.mediator.seal();
    };

    return Application;

  })(Chaplin.Application);
  
}});

window.require.define({"controllers": function(exports, require, module) {
  // load all your controllers here

  require('controllers/application');
  require('controllers/home');
  require('controllers/feed');
  
}});

window.require.define({"controllers/application": function(exports, require, module) {
  var RT = require('app');

  RT.ApplicationController = Em.Controller.extend({
      
  });
}});

window.require.define({"controllers/base/controller": function(exports, require, module) {
  var Chaplin, Controller,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Chaplin = require('chaplin');

  module.exports = Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    return Controller;

  })(Chaplin.Controller);
  
}});

window.require.define({"controllers/feed": function(exports, require, module) {
  var RT = require('app');

  RT.FeedController = Em.ObjectController.extend({

  });
}});

window.require.define({"controllers/home": function(exports, require, module) {
  var RT = require('app');

  RT.HomeController = Em.Controller.extend({
      
  });
}});

window.require.define({"initialize": function(exports, require, module) {
  
  window.RT = require('app');

  require('templates');
  require('models');
  require('controllers');
  require('views');
  require('router');

  RT.initialize();
  
}});

window.require.define({"models": function(exports, require, module) {
  // load all your models here

  require('models/item');
}});

window.require.define({"models/base/collection": function(exports, require, module) {
  var Chaplin, Collection,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Chaplin = require('chaplin');

  module.exports = Collection = (function(_super) {

    __extends(Collection, _super);

    function Collection() {
      return Collection.__super__.constructor.apply(this, arguments);
    }

    return Collection;

  })(Chaplin.Collection);
  
}});

window.require.define({"models/base/model": function(exports, require, module) {
  var Chaplin, Model,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Chaplin = require('chaplin');

  module.exports = Model = (function(_super) {

    __extends(Model, _super);

    function Model() {
      return Model.__super__.constructor.apply(this, arguments);
    }

    return Model;

  })(Chaplin.Model);
  
}});

window.require.define({"models/item": function(exports, require, module) {
  var RT = require('app');

  RT.ItemModel = Em.Object.extend({

      firstName : null,
      lastName  : null,
      lyrics    : null,

      fullName: function(){
          return this.get('firstName') + ' ' + this.get('lastName');
      }.property('firstName', 'lastName')

  });
}});

window.require.define({"router": function(exports, require, module) {
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
}});

window.require.define({"templates": function(exports, require, module) {
  // load all your templates here

  require('templates/application');
  require('templates/home');
  require('templates/feed');
  
}});

window.require.define({"templates/application": function(exports, require, module) {
  
  Ember.TEMPLATES[module.id] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Ember.Handlebars.helpers;
    var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


    data.buffer.push("<div class=\"container\">\n	<div class=\"navbar navbar-fixed-top\">\n	  <div class=\"navbar-inner\">\n	    <div class=\"container\">\n	      	<a class=\"brand\" href=\"#\">\n  			lucidmoon :: Radium Test\n			</a>\n		   	<ul class=\"nav\">\n				<li><a ");
    stack1 = depth0;
    stack2 = "redirectToHome";
    stack3 = helpers.action;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + ">Home</a></li>\n				<li><a ");
    stack1 = depth0;
    stack2 = "redirectToFeed";
    stack3 = helpers.action;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + ">Feed</a></li>\n			</ul>\n	    </div>\n	  </div>\n	</div>\n    <div class=\"well\">\n        ");
    stack1 = depth0;
    stack2 = "outlet";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "\n    </div>\n</div>");
    return buffer;
  });
   module.exports = module.id;
}});

window.require.define({"templates/feed": function(exports, require, module) {
  
  Ember.TEMPLATES[module.id] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Ember.Handlebars.helpers;
    var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

  function program1(depth0,data) {
    
    var buffer = '', stack1, stack2, stack3;
    data.buffer.push("\n<tbody>\n	<tr>\n		<td><i class=\"icon-");
    stack1 = depth0;
    stack2 = "kind";
    stack3 = helpers.unbound;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "\" /></td>\n		<td>");
    stack1 = depth0;
    stack2 = "id";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "</td>\n		<td>");
    stack1 = depth0;
    stack2 = "timestamp";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "</td>		\n		<td class=\"kind\">\n			");
    stack1 = depth0;
    stack2 = "kind";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "\n		</td>\n		<td><span class=\"label\">");
    stack1 = depth0;
    stack2 = "tag";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "</span></td>\n	</tr>\n</tbody>\n");
    return buffer;}

  function program3(depth0,data) {
    
    var buffer = '', stack1, stack2, stack3;
    data.buffer.push("\n<tbody>\n	<tr>\n		<td><i class=\"icon-");
    stack1 = depth0;
    stack2 = "kind";
    stack3 = helpers.unbound;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "\" /></td>\n		<td>");
    stack1 = depth0;
    stack2 = "id";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "</td>\n		<td class=\"kind\">\n			");
    stack1 = depth0;
    stack2 = "kind";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "\n		</td>\n		<td><span class=\"label\">");
    stack1 = depth0;
    stack2 = "tag";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "</span></td>\n	</tr>\n</tbody>\n");
    return buffer;}

    data.buffer.push("<h2>Datebook</h2>\n<table class=\"table\">\n<thead>\n	<tr>\n		<th></th>\n		<th>Id</th>\n		<th>Timestamp</th>\n		<th>Kind</th>\n		<th>Tag</th>\n	</tr>\n</thead>\n");
    stack1 = depth0;
    stack2 = "datebook";
    stack3 = helpers.each;
    tmp1 = self.program(1, program1, data);
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.fn = tmp1;
    tmp1.inverse = self.noop;
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n<table>\n\n<h2>History</h2>\n<table class=\"table\">\n<thead>\n	<tr>\n		<th></th>\n		<th>Id</th>\n		<th>Kind</th>\n		<th>Tag</th>\n	</tr>\n</thead>\n");
    stack1 = depth0;
    stack2 = "history";
    stack3 = helpers.each;
    tmp1 = self.program(3, program3, data);
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.fn = tmp1;
    tmp1.inverse = self.noop;
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n<table>");
    return buffer;
  });
   module.exports = module.id;
}});

window.require.define({"templates/home": function(exports, require, module) {
  
  Ember.TEMPLATES[module.id] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Ember.Handlebars.helpers;
    var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


    data.buffer.push("<h2>You are on the home page</h2>\n<a class=\"btn\" ");
    stack1 = depth0;
    stack2 = "redirectToFeed";
    stack3 = helpers.action;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-list-alt\" /> View your Feed</a>");
    return buffer;
  });
   module.exports = module.id;
}});

window.require.define({"views": function(exports, require, module) {
  // load all your views here

  require('views/application');
  require('views/home');
  require('views/feed');
}});

window.require.define({"views/application": function(exports, require, module) {
  var App = require('app');

  App.ApplicationView = Em.View.extend({
      templateName: require('templates/application')
  });
}});

window.require.define({"views/base/collection_view": function(exports, require, module) {
  var Chaplin, CollectionView, View,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Chaplin = require('chaplin');

  View = require('views/base/view');

  module.exports = CollectionView = (function(_super) {

    __extends(CollectionView, _super);

    function CollectionView() {
      return CollectionView.__super__.constructor.apply(this, arguments);
    }

    CollectionView.prototype.getTemplateFunction = View.prototype.getTemplateFunction;

    return CollectionView;

  })(Chaplin.CollectionView);
  
}});

window.require.define({"views/base/page_view": function(exports, require, module) {
  var PageView, View, mediator,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  mediator = require('mediator');

  View = require('views/base/view');

  module.exports = PageView = (function(_super) {

    __extends(PageView, _super);

    function PageView() {
      return PageView.__super__.constructor.apply(this, arguments);
    }

    PageView.prototype.container = '#page-container';

    PageView.prototype.autoRender = true;

    PageView.prototype.renderedSubviews = false;

    PageView.prototype.initialize = function() {
      var rendered,
        _this = this;
      PageView.__super__.initialize.apply(this, arguments);
      if (this.model || this.collection) {
        rendered = false;
        return this.modelBind('change', function() {
          if (!rendered) {
            _this.render();
          }
          return rendered = true;
        });
      }
    };

    PageView.prototype.renderSubviews = function() {};

    PageView.prototype.render = function() {
      PageView.__super__.render.apply(this, arguments);
      if (!this.renderedSubviews) {
        this.renderSubviews();
        return this.renderedSubviews = true;
      }
    };

    return PageView;

  })(View);
  
}});

window.require.define({"views/base/view": function(exports, require, module) {
  var Chaplin, View,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Chaplin = require('chaplin');

  require('lib/view_helper');

  module.exports = View = (function(_super) {

    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    View.prototype.getTemplateFunction = function() {
      return this.template;
    };

    return View;

  })(Chaplin.View);
  
}});

window.require.define({"views/feed": function(exports, require, module) {
  var RT = require('app');

  RT.FeedView = Em.View.extend({
      templateName: require('templates/feed')

  });
}});

window.require.define({"views/home": function(exports, require, module) {
  var App = require('app');

  App.HomeView = Em.View.extend({
      templateName: require('templates/home')
  });
  
}});

window.require.define({"views/templates/header": function(exports, require, module) {
  
  Ember.TEMPLATES[module.id] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Ember.Handlebars.helpers;
    var stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

  function program1(depth0,data) {
    
    var buffer = '', stack1, stack2, stack3;
    data.buffer.push("\n  <a class=\"header-link\" href=\"");
    stack1 = depth0;
    stack2 = "href";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "\">");
    stack1 = depth0;
    stack2 = "title";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "</a>\n");
    return buffer;}

    stack1 = depth0;
    stack2 = "items";
    stack3 = helpers.each;
    tmp1 = self.program(1, program1, data);
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.fn = tmp1;
    tmp1.inverse = self.noop;
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    else { data.buffer.push(''); }
  });
   module.exports = module.id;
}});

window.require.define({"views/templates/home": function(exports, require, module) {
  
  Ember.TEMPLATES[module.id] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Ember.Handlebars.helpers;
    var foundHelper, self=this;


    data.buffer.push("<a href=\"http://brunch.io/\">\n  <img src=\"http://brunch.io/images/brunch.png\" alt=\"Brunch\" />\n</a>\n");
  });
   module.exports = module.id;
}});

window.require.define({"views/templates/login": function(exports, require, module) {
  
  Ember.TEMPLATES[module.id] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Ember.Handlebars.helpers;
    var buffer = '', foundHelper, self=this;


    return buffer;
  });
   module.exports = module.id;
}});

