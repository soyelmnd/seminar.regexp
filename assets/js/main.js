(function() {
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        slideNumber: true,
        touch: true,
        overview: true,

        theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
        transition: Reveal.getQueryHash().transition || 'fade', // default/cube/page/concave/zoom/linear/fade/none

        // Optional libraries 
        //   used to extend on reveal.js
        dependencies: [
            { 
                src: 'vendors/reveal.js/plugin/highlight/highlight.js', 
                async: true, 
                callback: function() { 
                    hljs.initHighlightingOnLoad();
                } 
            },
            { 
                src: 'vendors/reveal.js/plugin/notes/notes.js', 
                async: true, 
                condition: function() { 
                    return !!document.body.classList; 
                } 
            }
        ]
    });

    var printQuery = window.location.search.match(/print-(.+?)$/);
    if(printQuery) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'vendors/reveal.js/css/print/' + printQuery[1] + '.css' ;
        document.getElementsByTagName('head')[0].appendChild(link);
    }
})();