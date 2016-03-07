# to-static

This tool convert blog entries to the markup used in static websites genertors.

It can be extended to handle others frameworks and blogs.


The idea comes when I was like to convert my blog hosted on Blogger to static website for use with [generators]. I don't find an easy way to migrate my blog, so this tool may be helpfull.



### Folders

- **/input** recovery blog content from http, file, etc. 
- **/format** parser to convert the blog content to JSON
- **/origin** implementations to convert JSON blog to standard Model used. It will be created for each blog, like blogger, tumblr, wordpress.
- **/staticgen** implementation specific for each static website generator. It will be one for each framework like hexo, jekyll.
- **/markup** convert post content to specific markup, like markdown, reStructuredDoc, AsciiDoc and such.
- **/output** handle write file and templates.


[generators]: http://www.staticgen.com/