(function(window, undefined) {
  var dictionary = {
    "d46a6cee-4ef9-48c3-b1af-b3a74e99adb2": "LoggedIn Screen",
    "3863f94e-cca1-4ed1-a7cc-bfde11610e4b": "Sign Up",
    "c875aea7-751f-44f2-ad3e-1c2f266d6ef6": "Sign In",
    "6d07122f-7e4d-43cf-b4a9-29af9fc5d13b": "Email Confirmation",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Homepage",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);