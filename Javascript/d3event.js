// var span = d3.select("body").append("span");


// Select the html element we want to append to
var span = d3.select('#d3-div');

// Twitter image element
var twitterImage = span.append('image')
    .attr('src', '../images/twitter.png')
    .attr('width', 100)
    .attr('height', 100);

// Facebook image element
var facebookImage = span.append('image')
    .attr('src', '../images/facebook.png')
    .attr('width', 100)
    .attr('height', 100);

// Reddit image element
var redditImage = span.append('image')
    .attr('src', '../images/reddit.png')
    .attr('width', 100)
    .attr('height', 100);

// Linkedin image element
var linkedinImage = span.append('image')
    .attr('src', '../images/linkedin.png')
    .attr('width', 100)
    .attr('height', 100);

// Instagram image element
var instagramImage = span.append('image')
    .attr('src', '../images/instagram.png')
    .attr('width', 100)
    .attr('height', 100);