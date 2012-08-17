# Radium Test #2 - Activity Feed

Implementation of the following requirements:

> ### Radium Test #2 - Activity Feed
> 
> #### Background
> 
> This is a chronological activity feed. The feed is divided by day; each day
> has it's own section. Each section is divided up into two parts: things that
> need to be done and records of events that happened. From here one they will
> be known as the datebook and historical sections respectively. Many of one item in
> a single section are grouped. For example, if there are 5 todos then they
> appear as one clickable group.
> 
> Every activity has a `timestamp`. This timestamp determines where it's placed
> in the feed. Items are rendered in ascending (earlier dates first). 
> 
> Activity's are associated with various types of objects. These objects are 
> in the `reference` property. It's up to you to explore these items.
> 
> Each entry has it's own icon. The reference determines the icon.
> 
> Activities have a `tag` and `kind`. The `tag` and `kind` are used to group items
> in the historical section. The `kind` attribute is used to group items in the
> datebook section. A `scheduled_for` tag places that entry in the datebook section.
> Any other tag places the activity in the historical section. 
> Conversely you can use the `scheduled` attribute for the same logic.
> 
> Groups in the datebook section can be expanded. This shows all the items like
> they would be rendered individually. Groups in the historical section are only
> for summary data. They are not expandable.
> 
> Each entry needs a short sentence to describe it. Use the reference to generate
> a headline of each.
> 
> Filters are used to reduce the feed. For example: a todo filter would only show items with a `todo` `tag`.
> This would remove all other individual items and groups. There is a filter for each `kind`.
> 
> #### The View
> 
> The structure for one section looks like this:
> 
> ```
> # Date: 2010-06-20
> 
> Date Book Items
> ---------------
> Historical Items
> ```
> 
> #### View Examples
> 
> ```
> # Date: 2010-06-20
> 
> * [icon] Call Bob
> * [icon] Meeting with James
> * [expand icon] 10 todos
> --------------------
> * 3 todos added
> * 10 deals closed
> * 6 contacts became prospects
> ```
> 
> #### Requirements & Features
> 
> * Ember
> * jQuery
> * Use `activites.json` provided in this gist
> * Extract the most recent date. Render the described view for that date.
> * When the user scrolls down display the closest date in the past. Example: 2012-06-20 is first date.
>   The user scrolls to the bottom of the page. 2012-06-19 is displayed below. Allow the user to scroll
>   down until they reach the end of the feed.
> * Implement filters as described.
> * Use Twitter Bootstrap for CSS and icons.
> * Make up your own mind about icons
> * Make up your own mind about what each headline (short one sentence description of each) should say
> * Group activities of more than 5 of the same in the datebook section
> * Group activities of the same `kind` and `tag` in the historical section
> * Group's in the datebook section are expandable.
> * Templates are rendered with handlebars
> * Passing Test suite (of your choice)
> * Items rendered as ember objects
> 
> #### Deliverables
> 
> 1. All source files in a git repo
> 2. An `index.html` file which show your solution.
> 3. A `readme.md` file describing how you solved the problem.
> 4. Organize the repo however you like, but `index.html` and `readme.md` must be at the root.

## Running the package
This project has been built using Brunch (http://brunch.io/) an assembler for HTML5 applications.

Installation is one-line. You‘ll need node.js 0.6.10+. Execute in console:

```bash
$ npm install -g brunch
```

Clone this repository, change into the application directory, install node modules & fire up the server:

```bash
$ git clone git@github.com:lucidmoon/radiumtest
$ cd radiumtest
$ npm install
$ brunch watch --server
```

### Alternative Method (using Python instead of node.js)

Don't have node installed, have no desire to install it, but you are running OS X and you do have Python installed? 

```bash
$ cd radiumtest/public
$ python -m SimpleHTTPServer
```


## Tests

To run tests, while within the application folder execute in console: 

```bash
$ brunch test
```

