const settings = {
  name: "resources",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Mental Health Resources",
      description:
        "This is an ever growing list of Mental Health topics and resources. This even includes resources to help with life situations as well, which plays a vital part in our mental health."
    }
  },
  packages: [
    {
      name: "@frontity/twentytwenty-theme",
      state: {
        theme: {
          menu: [["Home", "/"]],
          featured: {
            showOnList: false,
            showOnPost: false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api:
            "https://public-api.wordpress.com/wp/v2/sites/mentalhealthresources574094628.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
