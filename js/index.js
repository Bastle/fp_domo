requirejs.config({
  paths: {
    ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
    jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min'
  }
});

require([
    'ramda',
    'jquery'
  ],
  function (_, $) {

    const Impure = {
      getJSON: _.curry(function(callback, url) {
        $.getJSON(url, callback);
      }),

      setHtml: _.curry(function(sel, html) {
        $(sel).html(html);
      })
    };

    const img = url => $('<img />', { src: url })
    const url = t => `https://api.flickr.com/services/feeds/photos_public.gne?tags=${t}&format=json&jsoncallback=?`
    

    const mediaUrl = _.compose(_.prop('m'), _.prop('media'));
    const srcs = _.compose(_.map(mediaUrl), _.prop('items'));
    const images = _.compose(_.map(img), srcs);
    const renderImages = _.compose(Impure.setHtml("body"), images);
    // callback：renderImages
    const app = _.compose(Impure.getJSON(renderImages), url);

    app("cats");
  });