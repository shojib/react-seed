requirejs.config({
  paths: {
    react: "../libs/react/react",
    reactDom: "../libs/react/react-dom",
    reactAddons: "../libs/react/react-with-addons"
  },
  useStrict: true,
  shim: {
    react: {
      exports: "react"
    },
    reactDom: {
      exports: "reactDom"
    },
    reactAddons: {
      exports: "reactAddons"
    }
  },
  priority: ["react"]
});

requirejs([
  "react",
  "reactDom",
  "reactAddons",
  "react-seed"]);


