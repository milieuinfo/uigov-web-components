const filters = [
  {
    id: "acteur",
    filter: {
      name: "Acteur",
      fieldQualifier: "qText",
      field: "[Actor]",
      nrOfValues: 1000,
    }
  },
  {
    id: "decennium",
    filter: {
      name: "Decennium",
      fieldQualifier: "qText",
      field: "[Decade]",
      nrOfValues: 1000,
    }
  },
  {
    id: "lengte",
    filter: {
      name: "Lengte",
      fieldQualifier: "qText",
      field: "[Length]",
      nrOfValues: 1000,
    }
  },
  {
    id: "titel",
    filter: {
      name: "Titel",
      fieldQualifier: "qText",
      field: "[Title]",
      nrOfValues: 1000,
    }
  },
  {
    id: "jaar",
    filter: {
      name: "Jaar",
      fieldQualifier: "qText",
      field: "[Year]",
      nrOfValues: 1000,
    }
  },
  {
    id: "lengte-interval",
    filter: {
      name: "Lengte (interval)",
      fieldQualifier: "qText",
      field: "[Length Range]",
      nrOfValues: 1000,
    }
  },
]

export {filters as default};
