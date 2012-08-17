exports.config =
  # See http://brunch.readthedocs.org/en/latest/config.html for documentation.
  files:
    javascripts:
      # defaultExtension: 'js',
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/
        'test/javascripts/test.js': /^test(\/|\\)(?!vendor)/
        'test/javascripts/test-vendor.js': /^test(\/|\\)(?=vendor)/
      order:
        # Files in `vendor` directories are compiled before other files
        # even if they aren't specified in order.before.
        before: [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/jquery-1.8.0.min.js',
          'vendor/scripts/handlebars-1.0.0.beta.6.js',
          'vendor/scripts/ember-latest.js',
          'vendor/scripts/ember-data-latest.js',
          'vendor/scripts/underscore.js',          
          # Twitter Bootstrap jquery plugins
          'vendor/scripts/bootstrap/bootstrap-transition.js',
          'vendor/scripts/bootstrap/bootstrap-alert.js',
          'vendor/scripts/bootstrap/bootstrap-button.js',
          'vendor/scripts/bootstrap/bootstrap-carousel.js',
          'vendor/scripts/bootstrap/bootstrap-collapse.js',
          'vendor/scripts/bootstrap/bootstrap-dropdown.js',
          'vendor/scripts/bootstrap/bootstrap-modal.js',
          'vendor/scripts/bootstrap/bootstrap-tooltip.js',
          'vendor/scripts/bootstrap/bootstrap-popover.js',
          'vendor/scripts/bootstrap/bootstrap-scrollspy.js',
          'vendor/scripts/bootstrap/bootstrap-tab.js',
          'vendor/scripts/bootstrap/bootstrap-typeahed.js'
          ]
    stylesheets:
      defaultExtension: 'scss'
      joinTo: 
        'stylesheets/app.css' : /^(app|vendor)/
        'test/stylesheets/test.css': /^test/
      order:
        before: ['vendor/styles/_bootstrap.scss']
        after: ['vendor/styles/helpers.css']        
    templates:
      precompile: true
      defaultExtension: 'hbs'
      joinTo: 'javascripts/app.js' : /^app/