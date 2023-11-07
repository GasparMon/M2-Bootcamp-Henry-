var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }


  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ:


  function recall(element) {
    if (matchFunc(element)) {
      resultSet.push(element);
    }

    for (var i = 0; i < element.children.length; i++) {
      recall(element.children[i]);
    }
  }

  if (startEl) {
    recall(startEl);
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí

  let idSelector = /^#[a-zA-Z0-9_\-]/;
  let classSelector = /^\.[a-zA-Z0-9_\-]/;
  let tagClassSelector = /^[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-]/;
  let tagSelector = /^[a-zA-Z0-9_\-]/;

  if(idSelector.test(selector)){ return "id"}
  else if(classSelector.test(selector)){return "class"}
  else if(tagClassSelector.test(selector)){return "tag.class"}
  else if(tagSelector.test(selector)){return "tag"}

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  let selectorType = selectorTypeMatcher(selector);
  let matchFunction;
  if (selectorType === "id") {

    let idSelector = selector.slice(1);

    matchFunction = function(element)

    {return element.id === idSelector}

  } else if (selectorType === "class") {

    let classSelector = selector.slice(1);

    matchFunction = function(element)
    {return element.classList.contains(classSelector)}

  } else if (selectorType === "tag.class"){

    let tagClassSelector = selector.split(".")

    var tagMatch = tagClassSelector[0];
    var classMatch = tagClassSelector[1];

    matchFunction = function(element){

      return element.tagName.toLowerCase() === tagMatch && element.classList.contains(classMatch);
    }
  } else if (selectorType === "tag") {

    matchFunction = function(element){

      return element.tagName.toLowerCase() === selector.toLowerCase()
    }
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
